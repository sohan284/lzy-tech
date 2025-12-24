'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { type ContactFormState } from '../actions/contact';
import contactImage from '@/public/assets/contactImage.jpg';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      disabled={pending}
      className="w-full px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {pending ? 'Envoi en cours...' : 'envoyer'}
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </motion.button>
  );
}

export default function ContactForm({ submitContactForm }: { submitContactForm: (prevState: ContactFormState | null, formData: FormData) => Promise<ContactFormState> }) {
  const [state, formAction] = useFormState<ContactFormState | null, FormData>(
    submitContactForm,
    null
  );

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 max-w-[1440px] mx-auto">
      {/* Left Side - Form */}
      <div className="bg-white p-8 lg:p-12 xl:p-16 flex items-center ">
        <div className="w-full max-w-2xl mx-auto">
          <motion.form 
            action={formAction} 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Contact Information Fields - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  required
                  className="w-full text-black px-4 py-3 bg-[#F6F2E7] border border-[#F6F2E7] rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  placeholder=""
                />
                {state?.errors?.prenom && (
                  <p className="mt-1 text-sm text-red-600">{state.errors.prenom}</p>
                )}
              </div>

              <div>
                <label htmlFor="fonction" className="block text-sm font-medium text-gray-700 mb-2">
                  Fonction<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="fonction"
                  name="fonction"
                  required
                  className="w-full text-black px-4 py-3 bg-[#F6F2E7] border border-[#F6F2E7] rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  placeholder=""
                />
                {state?.errors?.fonction && (
                  <p className="mt-1 text-sm text-red-600">{state.errors.fonction}</p>
                )}
              </div>

              <div>
                <label htmlFor="organisation" className="block text-sm font-medium text-gray-700 mb-2">
                  Organisation<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  required
                  className="w-full text-black px-4 py-3 bg-[#F6F2E7] border border-[#F6F2E7] rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  placeholder=""
                />
                {state?.errors?.organisation && (
                  <p className="mt-1 text-sm text-red-600">{state.errors.organisation}</p>
                )}
              </div>

              <div>
                <label htmlFor="pays" className="block text-sm font-medium text-gray-700 mb-2">
                  Pays<span className="text-red-600">*</span>
                </label>
                <select
                  id="pays"
                  name="pays"
                  required
                  className="w-full text-black px-4 py-3 bg-[#F6F2E7] border border-[#F6F2E7] rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Sélectionnez un pays</option>
                  <option value="CI">Côte d&apos;Ivoire</option>
                  <option value="SN">Sénégal</option>
                  <option value="CM">Cameroun</option>
                  <option value="GA">Gabon</option>
                  <option value="FR">France</option>
                  <option value="BE">Belgique</option>
                  <option value="other">Autre</option>
                </select>
                {state?.errors?.pays && (
                  <p className="mt-1 text-sm text-red-600">{state.errors.pays}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full text-black px-4 py-3 bg-[#F6F2E7] border border-[#F6F2E7] rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  placeholder=""
                />
                {state?.errors?.email && (
                  <p className="mt-1 text-sm text-red-600">{state.errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone<span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  required
                  className="w-full text-black px-4 py-3 bg-[#F6F2E7] border border-[#F6F2E7] rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  placeholder=""
                />
                {state?.errors?.telephone && (
                  <p className="mt-1 text-sm text-red-600">{state.errors.telephone}</p>
                )}
              </div>
            </div>

            {/* Votre priorité actuelle Section */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">
                Votre priorité actuelle
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="priorities"
                    value="fiabiliser-donnees"
                    className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="text-gray-700">Fiabiliser nos données</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="priorities"
                    value="securiser-revenus"
                    className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="text-gray-700">Sécuriser nos revenus</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="priorities"
                    value="optimiser-processus"
                    className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="text-gray-700">Optimiser nos processus</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="priorities"
                    value="mieux-travailler"
                    className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="text-gray-700">Mieux travailler (Outils & applications métier)</span>
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="priorities"
                      value="autre"
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="text-gray-700">Autre</span>
                  </label>
                  <input
                    type="text"
                    name="autre"
                    className="flex-1 text-black px-3 py-2 bg-[#F6F2E7] border border-[#F6F2E7] rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-sm"
                    placeholder=""
                  />
                </div>
              </div>
              {state?.errors?.priorities && (
                <p className="mt-2 text-sm text-red-600">{state.errors.priorities}</p>
              )}
            </div>

            {/* Text zone Section */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">
                Text zone
              </h3>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full text-black px-4 py-3 bg-[#F6F2E7] border border-[#F6F2E7] rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                placeholder="Décrivez brièvement vos enjeux"
              />
              {state?.errors?.message && (
                <p className="mt-1 text-sm text-red-600">{state.errors.message}</p>
              )}
            </div>

            {/* Success/Error Messages */}
            {state?.success && (
              <motion.div 
                className="p-4 bg-green-50 border border-green-200 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-green-800">{state.message}</p>
              </motion.div>
            )}

            {state && !state.success && state.message && (
              <motion.div 
                className="p-4 bg-red-50 border border-red-200 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-red-800">{state.message}</p>
              </motion.div>
            )}

            <SubmitButton />
          </motion.form>
        </div>
      </div>

      {/* Right Side - Image */}
      <motion.div 
        className="hidden lg:block relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
    <div className="flex  mt-[15vh] justify-center h-full">
    <div className="relative w-[40vw] max-w-[600px] h-[50vh]">
     <Image
          src={contactImage}
          alt="Contact"
          fill
          className="object-cover rounded-lg"
          priority
        />
     </div>
    </div>
      </motion.div>
    </div>
  );
}
