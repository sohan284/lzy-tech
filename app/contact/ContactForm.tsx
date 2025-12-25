"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { type ContactFormState } from "../actions/contact";
import contactImage from "@/public/assets/contactImage.jpg";

// Comprehensive list of countries
const countries = [
  { code: "AF", name: "Afghanistan" },
  { code: "ZA", name: "Afrique du Sud" },
  { code: "AL", name: "Albanie" },
  { code: "DZ", name: "Algérie" },
  { code: "DE", name: "Allemagne" },
  { code: "AD", name: "Andorre" },
  { code: "AO", name: "Angola" },
  { code: "AG", name: "Antigua-et-Barbuda" },
  { code: "SA", name: "Arabie saoudite" },
  { code: "AR", name: "Argentine" },
  { code: "AM", name: "Arménie" },
  { code: "AU", name: "Australie" },
  { code: "AT", name: "Autriche" },
  { code: "AZ", name: "Azerbaïdjan" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Bahreïn" },
  { code: "BD", name: "Bangladesh" },
  { code: "BB", name: "Barbade" },
  { code: "BE", name: "Belgique" },
  { code: "BZ", name: "Belize" },
  { code: "BJ", name: "Bénin" },
  { code: "BT", name: "Bhoutan" },
  { code: "BY", name: "Biélorussie" },
  { code: "MM", name: "Birmanie" },
  { code: "BO", name: "Bolivie" },
  { code: "BA", name: "Bosnie-Herzégovine" },
  { code: "BW", name: "Botswana" },
  { code: "BR", name: "Brésil" },
  { code: "BN", name: "Brunei" },
  { code: "BG", name: "Bulgarie" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "KH", name: "Cambodge" },
  { code: "CM", name: "Cameroun" },
  { code: "CA", name: "Canada" },
  { code: "CV", name: "Cap-Vert" },
  { code: "CL", name: "Chili" },
  { code: "CN", name: "Chine" },
  { code: "CY", name: "Chypre" },
  { code: "CO", name: "Colombie" },
  { code: "KM", name: "Comores" },
  { code: "CG", name: "Congo" },
  { code: "CD", name: "Congo (RDC)" },
  { code: "KP", name: "Corée du Nord" },
  { code: "KR", name: "Corée du Sud" },
  { code: "CR", name: "Costa Rica" },
  { code: "CI", name: "Côte d'Ivoire" },
  { code: "HR", name: "Croatie" },
  { code: "CU", name: "Cuba" },
  { code: "DK", name: "Danemark" },
  { code: "DJ", name: "Djibouti" },
  { code: "DM", name: "Dominique" },
  { code: "EG", name: "Égypte" },
  { code: "AE", name: "Émirats arabes unis" },
  { code: "EC", name: "Équateur" },
  { code: "ER", name: "Érythrée" },
  { code: "ES", name: "Espagne" },
  { code: "EE", name: "Estonie" },
  { code: "SZ", name: "Eswatini" },
  { code: "US", name: "États-Unis" },
  { code: "ET", name: "Éthiopie" },
  { code: "FJ", name: "Fidji" },
  { code: "FI", name: "Finlande" },
  { code: "FR", name: "France" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambie" },
  { code: "GE", name: "Géorgie" },
  { code: "GH", name: "Ghana" },
  { code: "GR", name: "Grèce" },
  { code: "GD", name: "Grenade" },
  { code: "GT", name: "Guatemala" },
  { code: "GN", name: "Guinée" },
  { code: "GW", name: "Guinée-Bissau" },
  { code: "GQ", name: "Guinée équatoriale" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Haïti" },
  { code: "HN", name: "Honduras" },
  { code: "HU", name: "Hongrie" },
  { code: "IN", name: "Inde" },
  { code: "ID", name: "Indonésie" },
  { code: "IQ", name: "Irak" },
  { code: "IR", name: "Iran" },
  { code: "IE", name: "Irlande" },
  { code: "IS", name: "Islande" },
  { code: "IL", name: "Israël" },
  { code: "IT", name: "Italie" },
  { code: "JM", name: "Jamaïque" },
  { code: "JP", name: "Japon" },
  { code: "JO", name: "Jordanie" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "KE", name: "Kenya" },
  { code: "KG", name: "Kirghizistan" },
  { code: "KI", name: "Kiribati" },
  { code: "KW", name: "Koweït" },
  { code: "LA", name: "Laos" },
  { code: "LS", name: "Lesotho" },
  { code: "LV", name: "Lettonie" },
  { code: "LB", name: "Liban" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libye" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lituanie" },
  { code: "LU", name: "Luxembourg" },
  { code: "MK", name: "Macédoine du Nord" },
  { code: "MG", name: "Madagascar" },
  { code: "MY", name: "Malaisie" },
  { code: "MW", name: "Malawi" },
  { code: "MV", name: "Maldives" },
  { code: "ML", name: "Mali" },
  { code: "MT", name: "Malte" },
  { code: "MA", name: "Maroc" },
  { code: "MU", name: "Maurice" },
  { code: "MR", name: "Mauritanie" },
  { code: "MX", name: "Mexique" },
  { code: "FM", name: "Micronésie" },
  { code: "MD", name: "Moldavie" },
  { code: "MC", name: "Monaco" },
  { code: "MN", name: "Mongolie" },
  { code: "ME", name: "Monténégro" },
  { code: "MZ", name: "Mozambique" },
  { code: "NA", name: "Namibie" },
  { code: "NR", name: "Nauru" },
  { code: "NP", name: "Népal" },
  { code: "NI", name: "Nicaragua" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "NO", name: "Norvège" },
  { code: "NZ", name: "Nouvelle-Zélande" },
  { code: "OM", name: "Oman" },
  { code: "UG", name: "Ouganda" },
  { code: "UZ", name: "Ouzbékistan" },
  { code: "PK", name: "Pakistan" },
  { code: "PW", name: "Palaos" },
  { code: "PA", name: "Panama" },
  { code: "PG", name: "Papouasie-Nouvelle-Guinée" },
  { code: "PY", name: "Paraguay" },
  { code: "NL", name: "Pays-Bas" },
  { code: "PE", name: "Pérou" },
  { code: "PH", name: "Philippines" },
  { code: "PL", name: "Pologne" },
  { code: "PT", name: "Portugal" },
  { code: "QA", name: "Qatar" },
  { code: "RO", name: "Roumanie" },
  { code: "GB", name: "Royaume-Uni" },
  { code: "RU", name: "Russie" },
  { code: "RW", name: "Rwanda" },
  { code: "KN", name: "Saint-Kitts-et-Nevis" },
  { code: "LC", name: "Sainte-Lucie" },
  { code: "VC", name: "Saint-Vincent-et-les-Grenadines" },
  { code: "SB", name: "Salomon" },
  { code: "SV", name: "Salvador" },
  { code: "WS", name: "Samoa" },
  { code: "ST", name: "Sao Tomé-et-Principe" },
  { code: "SN", name: "Sénégal" },
  { code: "RS", name: "Serbie" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SG", name: "Singapour" },
  { code: "SK", name: "Slovaquie" },
  { code: "SI", name: "Slovénie" },
  { code: "SO", name: "Somalie" },
  { code: "SD", name: "Soudan" },
  { code: "SS", name: "Soudan du Sud" },
  { code: "LK", name: "Sri Lanka" },
  { code: "SE", name: "Suède" },
  { code: "CH", name: "Suisse" },
  { code: "SR", name: "Suriname" },
  { code: "SY", name: "Syrie" },
  { code: "TJ", name: "Tadjikistan" },
  { code: "TZ", name: "Tanzanie" },
  { code: "TD", name: "Tchad" },
  { code: "CZ", name: "Tchéquie" },
  { code: "TH", name: "Thaïlande" },
  { code: "TL", name: "Timor oriental" },
  { code: "TG", name: "Togo" },
  { code: "TO", name: "Tonga" },
  { code: "TT", name: "Trinité-et-Tobago" },
  { code: "TN", name: "Tunisie" },
  { code: "TM", name: "Turkménistan" },
  { code: "TR", name: "Turquie" },
  { code: "TV", name: "Tuvalu" },
  { code: "UA", name: "Ukraine" },
  { code: "UY", name: "Uruguay" },
  { code: "VU", name: "Vanuatu" },
  { code: "VA", name: "Vatican" },
  { code: "VE", name: "Venezuela" },
  { code: "VN", name: "Viêt Nam" },
  { code: "YE", name: "Yémen" },
  { code: "ZM", name: "Zambie" },
  { code: "ZW", name: "Zimbabwe" },
];

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      disabled={pending}
      className="w-full px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 cursor-pointer"
    >
      {pending ? "Envoi en cours..." : "Envoyer"}
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </motion.button>
  );
}

export default function ContactForm({
  submitContactForm,
}: {
  submitContactForm: (
    prevState: ContactFormState | null,
    formData: FormData
  ) => Promise<ContactFormState>;
}) {
  const [state, formAction] = useFormState<ContactFormState | null, FormData>(
    submitContactForm,
    null
  );

  // Country dropdown state
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<{
    code: string;
    name: string;
  } | null>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  // Filter countries based on search
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
                <label
                  htmlFor="prenom"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
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
                  <p className="mt-1 text-sm text-red-600">
                    {state.errors.prenom}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="fonction"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
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
                  <p className="mt-1 text-sm text-red-600">
                    {state.errors.fonction}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="organisation"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
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
                  <p className="mt-1 text-sm text-red-600">
                    {state.errors.organisation}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="pays"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Pays<span className="text-red-600">*</span>
                </label>
                <div className="relative" ref={countryDropdownRef}>
                  {/* Hidden input for form submission */}
                  <input
                    type="hidden"
                    id="pays"
                    name="pays"
                    value={selectedCountry?.code || ""}
                    required
                  />
                  {/* Custom dropdown button */}
                  <button
                    type="button"
                    onClick={() => setIsCountryOpen(!isCountryOpen)}
                    className={`w-full text-left text-black px-4 py-3 bg-[#F6F2E7] border border-[#F6F2E7] rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors flex items-center justify-between ${
                      !selectedCountry ? "text-gray-500" : "text-black"
                    }`}
                  >
                    <span>
                      {selectedCountry
                        ? selectedCountry.name
                        : "Sélectionnez un pays"}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        isCountryOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {/* Dropdown menu */}
                  {isCountryOpen && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-hidden">
                      {/* Search input */}
                      <div className="p-2 border-b border-gray-200">
                        <input
                          type="text"
                          placeholder="Rechercher un pays..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full text-black px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                          autoFocus
                        />
                      </div>
                      {/* Country list */}
                      <div className="max-h-48 overflow-y-auto">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(country);
                                setIsCountryOpen(false);
                                setSearchQuery("");
                              }}
                              className={`w-full text-left px-4 py-2 hover:bg-[#F6F2E7] transition-colors ${
                                selectedCountry?.code === country.code
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "text-gray-700"
                              }`}
                            >
                              {country.name}
                            </button>
                          ))
                        ) : (
                          <div className="px-4 py-2 text-gray-500 text-sm">
                            Aucun pays trouvé
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                {state?.errors?.pays && (
                  <p className="mt-1 text-sm text-red-600">
                    {state.errors.pays}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
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
                  <p className="mt-1 text-sm text-red-600">
                    {state.errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
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
                  <p className="mt-1 text-sm text-red-600">
                    {state.errors.telephone}
                  </p>
                )}
              </div>
            </div>

            {/* Votre priorité actuelle Section */}
            <div>
              <h3 className="section-text-small font-bold text-primary mb-4">
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
                  <span className="text-gray-700">
                    Mieux travailler (Outils & applications métier)
                  </span>
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
                <p className="mt-2 text-sm text-red-600">
                  {state.errors.priorities}
                </p>
              )}
            </div>

            {/* Text zone Section */}
            <div>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full text-black px-4 py-3 bg-[#F6F2E7] border border-[#F6F2E7] rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                placeholder="Décrivez brièvement vos enjeux"
              />
              {state?.errors?.message && (
                <p className="mt-1 text-sm text-red-600">
                  {state.errors.message}
                </p>
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
