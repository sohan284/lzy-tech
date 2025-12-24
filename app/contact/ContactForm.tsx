'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type ContactFormState } from '../actions/contact';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export default function ContactForm({ submitContactForm }: { submitContactForm: (prevState: ContactFormState | null, formData: FormData) => Promise<ContactFormState> }) {
  const [state, formAction] = useFormState<ContactFormState | null, FormData>(
    submitContactForm,
    null
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12">
      <form action={formAction} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white outline-none transition-colors"
            placeholder="Your name"
          />
          {state?.errors?.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{state.errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white outline-none transition-colors"
            placeholder="your.email@example.com"
          />
          {state?.errors?.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{state.errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white outline-none transition-colors resize-none"
            placeholder="Your message..."
          />
          {state?.errors?.message && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{state.errors.message}</p>
          )}
        </div>

        {state?.success && (
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-green-800 dark:text-green-300">
              {state.message}
            </p>
          </div>
        )}

        {state && !state.success && state.message && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-800 dark:text-red-300">
              {state.message}
            </p>
          </div>
        )}

        <SubmitButton />
      </form>
    </div>
  );
}

