'use server';

import { Resend } from 'resend';

// Replace 'YOUR_RESEND_API_KEY' with your actual Resend API key
// Get your API key from: https://resend.com/api-keys
const resend = new Resend('re_vBLqpLVo_GBdvcfi1mm6nRoooaDKE7EV3');

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    prenom?: string;
    fonction?: string;
    organisation?: string;
    pays?: string;
    email?: string;
    telephone?: string;
    priorities?: string;
    message?: string;
  };
};

// Map priority values to readable text
const priorityLabels: Record<string, string> = {
  'fiabiliser-donnees': 'Fiabiliser nos données',
  'securiser-revenus': 'Sécuriser nos revenus',
  'optimiser-processus': 'Optimiser nos processus',
  'mieux-travailler': 'Mieux travailler (Outils & applications métier)',
  'autre': 'Autre'
};

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const prenom = formData.get('prenom') as string;
  const fonction = formData.get('fonction') as string;
  const organisation = formData.get('organisation') as string;
  const pays = formData.get('pays') as string;
  const email = formData.get('email') as string;
  const telephone = formData.get('telephone') as string;
  const priorities = formData.getAll('priorities') as string[];
  const autre = formData.get('autre') as string;
  const message = formData.get('message') as string;

  // Basic validation
  const errors: ContactFormState['errors'] = {};

  if (!prenom || prenom.trim().length === 0) {
    errors.prenom = 'Le prénom est requis';
  }

  if (!fonction || fonction.trim().length === 0) {
    errors.fonction = 'La fonction est requise';
  }

  if (!organisation || organisation.trim().length === 0) {
    errors.organisation = 'L\'organisation est requise';
  }

  if (!pays || pays.trim().length === 0) {
    errors.pays = 'Le pays est requis';
  }

  if (!email || email.trim().length === 0) {
    errors.email = 'L\'email est requis';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Veuillez entrer une adresse email valide';
  }

  if (!telephone || telephone.trim().length === 0) {
    errors.telephone = 'Le téléphone est requis';
  }

  if (priorities.length === 0) {
    errors.priorities = 'Veuillez sélectionner au moins une priorité';
  }

  if (!message || message.trim().length === 0) {
    errors.message = 'Le message est requis';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Veuillez corriger les erreurs ci-dessous',
      errors,
    };
  }

  // Format priorities for email
  const prioritiesText = priorities
    .map(p => priorityLabels[p] || p)
    .join(', ');
  
  const autreText = priorities.includes('autre') && autre ? ` (${autre})` : '';

  // Send email
  try {
    const { data, error } = await resend.emails.send({
      from: 'IzyTechnology Contact <onboarding@resend.dev>', // You'll need to verify your domain with Resend
      to: ['sr.sohan088@gmail.com'],
      subject: `Nouveau message de contact - ${prenom} de ${organisation}`,
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
                <td style="padding: 8px 0; color: #333;">${prenom}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Fonction:</td>
                <td style="padding: 8px 0; color: #333;">${fonction}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Organisation:</td>
                <td style="padding: 8px 0; color: #333;">${organisation}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Pays:</td>
                <td style="padding: 8px 0; color: #333;">${pays}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td>
                <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #002FA7;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Téléphone:</td>
                <td style="padding: 8px 0; color: #333;"><a href="tel:${telephone}" style="color: #002FA7;">${telephone}</a></td>
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
              ${message}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Ce message a été envoyé depuis le formulaire de contact du site IzyTechnology.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return {
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer plus tard.',
      };
    }

    console.log('Email sent successfully:', data);
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer plus tard.',
    };
  }

  return {
    success: true,
    message: 'Merci pour votre message ! Nous vous répondrons bientôt.',
  };
}

