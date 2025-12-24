'use server';

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Basic validation
  const errors: ContactFormState['errors'] = {};

  if (!name || name.trim().length === 0) {
    errors.name = 'Name is required';
  }

  if (!email || email.trim().length === 0) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!message || message.trim().length === 0) {
    errors.message = 'Message is required';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please fix the errors below',
      errors,
    };
  }

  // Simulate form submission
  // In a real application, you would send this data to your backend/email service
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Log for development (remove in production or send to your backend)
  console.log('Form submitted:', { name, email, message });

  return {
    success: true,
    message: 'Thank you for your message! We\'ll get back to you soon.',
  };
}

