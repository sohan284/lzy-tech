"use server";

import * as nodemailer from "nodemailer";
import { z } from "zod";

// Gmail SMTP Configuration
// Environment variables must be set in .env.local
if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
  throw new Error("SMTP_USER and SMTP_PASSWORD must be set in environment variables");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Rate limiting: Simple in-memory store (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per minute

// Helper function to sanitize HTML
function sanitizeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

// Helper function to get client IP (simplified - use proper method in production)
function getClientIdentifier(): string {
  // In production, use request headers or middleware to get real IP
  return "default"; // This is a simplified version
}

// Rate limiting check
function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

// Validation schema with zod
const contactFormSchema = z.object({
  prenom: z
    .string()
    .min(1, "Le prénom est requis")
    .max(100, "Le prénom ne peut pas dépasser 100 caractères")
    .trim(),
  nom: z
    .string()
    .min(1, "Le nom de famille est requis")
    .max(100, "Le nom ne peut pas dépasser 100 caractères")
    .trim(),
  organisation: z
    .string()
    .min(1, "L'organisation est requise")
    .max(100, "L'organisation ne peut pas dépasser 100 caractères")
    .trim(),
  pays: z.string().min(1, "Le pays est requis").trim(),
  email: z
    .string()
    .min(1, "L'email est requis")
    .email("Veuillez entrer une adresse email valide (ex: nom@domaine.com)")
    .max(255, "L'email ne peut pas dépasser 255 caractères"),
  telephone: z.string().min(1, "Le téléphone est requis").trim(),
  phoneCode: z.string().optional(),
  priorities: z
    .array(z.string())
    .min(1, "Veuillez sélectionner au moins une priorité"),
  autre: z.string().optional(),
  message: z
    .string()
    .min(1, "Le message est requis")
    .max(500, "Le message ne peut pas dépasser 500 caractères")
    .trim(),
  consent: z
    .string()
    .refine((val) => val === "on", {
      message: "Vous devez accepter le traitement de vos données personnelles",
    }),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    prenom?: string;
    nom?: string;
    organisation?: string;
    pays?: string;
    email?: string;
    telephone?: string;
    priorities?: string;
    message?: string;
    consent?: string;
  };
};

// Map priority values to readable text
const priorityLabels: Record<string, string> = {
  "fiabiliser-donnees": "Fiabiliser nos données",
  "securiser-revenus": "Sécuriser nos revenus",
  "optimiser-processus": "Optimiser nos processus",
  "mieux-travailler": "Mieux travailler (Outils & applications métier)",
  autre: "Autre",
};

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  // Rate limiting check
  const clientId = getClientIdentifier();
  if (!checkRateLimit(clientId)) {
    return {
      success: false,
      message: "Trop de requêtes. Veuillez patienter avant de réessayer.",
    };
  }

  // Extract and validate form data
  const rawData = {
    prenom: formData.get("prenom") as string,
    nom: formData.get("nom") as string,
    organisation: formData.get("organisation") as string,
    pays: formData.get("pays") as string,
    email: formData.get("email") as string,
    telephone: formData.get("telephone") as string,
    phoneCode: formData.get("phoneCode") as string,
    priorities: formData.getAll("priorities") as string[],
    autre: formData.get("autre") as string,
    message: formData.get("message") as string,
    consent: formData.get("consent") as string,
  };

  // Validate with zod
  const validationResult = contactFormSchema.safeParse(rawData);

  if (!validationResult.success) {
    const errors: ContactFormState["errors"] = {};
    validationResult.error.issues.forEach((err) => {
      const field = err.path[0];
      if (field && typeof field === "string") {
        const errorKey = field as keyof NonNullable<ContactFormState["errors"]>;
        if (errorKey) {
          (errors as Record<string, string>)[errorKey] = err.message;
        }
      }
    });

    // Additional validation for Ivorian phone numbers
    if (rawData.phoneCode === "+225" && rawData.telephone) {
      const phoneNumberOnly = rawData.telephone.replace(rawData.phoneCode, "").replace(/\D/g, "");
      if (phoneNumberOnly.length !== 10) {
        errors.telephone = "Le numéro ivoirien doit contenir exactement 10 chiffres";
      }
    }

    return {
      success: false,
      message: "Veuillez corriger les erreurs ci-dessus",
      errors,
    };
  }

  const validatedData = validationResult.data;

  // Sanitize all user inputs before using in HTML
  const sanitizedData = {
    prenom: sanitizeHtml(validatedData.prenom),
    nom: sanitizeHtml(validatedData.nom),
    organisation: sanitizeHtml(validatedData.organisation),
    pays: sanitizeHtml(validatedData.pays),
    email: sanitizeHtml(validatedData.email),
    telephone: sanitizeHtml(validatedData.telephone),
    message: sanitizeHtml(validatedData.message),
    autre: validatedData.autre ? sanitizeHtml(validatedData.autre) : "",
  };

  // Format priorities for email
  const prioritiesText = validatedData.priorities
    .map((p) => priorityLabels[p] || sanitizeHtml(p))
    .join(", ");

  const autreText =
    validatedData.priorities.includes("autre") && sanitizedData.autre
      ? ` (${sanitizedData.autre})`
      : "";

  // Get email from environment or use default
  const fromEmail = process.env.SMTP_USER || "sr.sohan088@gmail.com";
  const toEmail = process.env.CONTACT_EMAIL || fromEmail;

  // Send email
  try {
    const mailOptions = {
      from: `IzyTechnology Contact <${fromEmail}>`,
      to: toEmail,
      subject: `Nouveau message de contact - ${sanitizedData.prenom} de ${sanitizedData.organisation}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #002FA7; border-bottom: 2px solid #002FA7; padding-bottom: 10px;">
            Nouveau message de contact
          </h2>
          
          <div style="margin-top: 30px;">
            <h3 style="color: #333; margin-bottom: 15px;">Informations de contact</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666; width: 150px;">Prénom:</td>
                <td style="padding: 8px 0; color: #333;">${sanitizedData.prenom}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Nom de famille:</td>
                <td style="padding: 8px 0; color: #333;">${sanitizedData.nom}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Organisation:</td>
                <td style="padding: 8px 0; color: #333;">${sanitizedData.organisation}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Pays:</td>
                <td style="padding: 8px 0; color: #333;">${sanitizedData.pays}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td>
                <td style="padding: 8px 0; color: #333;"><a href="mailto:${sanitizedData.email}" style="color: #002FA7;">${sanitizedData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Téléphone:</td>
                <td style="padding: 8px 0; color: #333;"><a href="tel:${sanitizedData.telephone}" style="color: #002FA7;">${sanitizedData.telephone}</a></td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 30px;">
            <h3 style="color: #333; margin-bottom: 15px;">Priorités actuelles</h3>
            <p style="color: #333; line-height: 1.6;">${prioritiesText}${autreText}</p>
          </div>

          <div style="margin-top: 30px;">
            <h3 style="color: #333; margin-bottom: 15px;">Message</h3>
            <div style="background-color: #f6f2e7; padding: 15px; border-radius: 5px; color: #333; line-height: 1.6; white-space: pre-wrap;">
              ${sanitizedData.message}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Ce message a été envoyé depuis le formulaire de contact du site IzyTechnology.</p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    // Log success only in development
    if (process.env.NODE_ENV === "development") {
      console.log("Email sent successfully:", info.messageId);
    }
  } catch (error) {
    // Log error details only on server side, never expose to client
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    // In production, use a proper logging service (Sentry, LogRocket, etc.)
    if (process.env.NODE_ENV === "development") {
      console.error("Error sending email:", errorMessage);
    }
    // Return generic error message to client
    return {
      success: false,
      message:
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.",
    };
  }

  return {
    success: true,
    message: "Merci pour votre message ! Nous vous répondrons bientôt.",
  };
}
