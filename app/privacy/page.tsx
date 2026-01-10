"use client";

import { motion } from "framer-motion";
import NoticeHeroSection from "../components/NoticeHeroSection";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <NoticeHeroSection />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-lg p-8 md:p-12 space-y-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* 1. Éditeur du site */}
            <section>
              <h2 className="section-title text-primary mb-4">
                1. Éditeur du site
              </h2>
              <div className="space-y-2 section-text text-gray-700">
                <p>
                  <strong>IzyTechnology</strong>
                </p>
                <p>
                  Société de conseil et de services en systèmes
                  d&apos;information
                </p>
                <p>
                  <strong>RC :</strong> CI-GRDBSM-2018-B-869
                </p>
                <p>
                  <strong>Adresse :</strong> BP 363 Grand-Bassam – Côte
                  d&apos;Ivoire
                </p>
                <p>
                  <strong>Téléphone :</strong> (+225) 25 21 00 3030 / (+225) 05
                  05 85 7777
                </p>
                <p>
                  <strong>E-mail :</strong>{" "}
                  <a
                    href="mailto:info@izytechnology.com"
                    className="text-primary hover:underline"
                  >
                    info@izytechnology.com
                  </a>
                </p>
                <p>
                  <strong>Représentant légal :</strong> Parfait KOUADIO
                </p>
              </div>
            </section>

            {/* 2. Hébergeur */}
            <section>
              <h2 className="section-title text-primary mb-4">2. Hébergeur</h2>
              <div className="space-y-2 section-text text-gray-700">
                <p>
                  <strong>OVH</strong>
                </p>
                <p>
                  <strong>Contact :</strong> +33 972 10 10 07
                </p>
                <p>
                  <strong>Site web :</strong>{" "}
                  <a
                    href="https://www.ovhcloud.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://www.ovhcloud.com
                  </a>
                </p>
              </div>
            </section>

            {/* 3. Propriété intellectuelle */}
            <section>
              <h2 className="section-title text-primary mb-4">
                3. Propriété intellectuelle
              </h2>
              <div className="space-y-3 section-text text-gray-700">
                <p>
                  L&apos;ensemble des éléments présents sur ce site (textes,
                  images, logos, mises en page, icônes, etc.) est la propriété
                  d&apos;IzyTechnology, sauf mention contraire.
                </p>
                <p>
                  Toute reproduction ou utilisation, totale ou partielle, sans
                  autorisation écrite préalable est interdite.
                </p>
              </div>
            </section>

            {/* 4. Données personnelles */}
            <section>
              <h2 className="section-title text-primary mb-4">
                4. Données personnelles
              </h2>
              <div className="space-y-3 section-text text-gray-700">
                <p>
                  Les informations saisies via le formulaire de contact (nom,
                  prénom, fonction, organisation, e-mail, téléphone, description
                  de votre demande) sont utilisées uniquement pour :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>répondre à votre demande,</li>
                  <li>
                    préparer, le cas échéant, un échange ou une proposition
                    d&apos;accompagnement.
                  </li>
                </ul>
                <p>
                  Ces données ne sont pas vendues ni cédées à des tiers à des
                  fins commerciales.
                </p>
                <p>
                  Vous pouvez demander l&apos;accès, la rectification ou la
                  suppression de vos données en écrivant à :{" "}
                  <a
                    href="mailto:info@izytechnology.com"
                    className="text-primary hover:underline"
                  >
                    info@izytechnology.com
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* 5. Cookies */}
            <section>
              <h2 className="section-title text-primary mb-4">5. Cookies</h2>
              <div className="space-y-3 section-text text-gray-700">
                <p>
                  Le site peut utiliser des cookies de mesure d&apos;audience ou
                  de confort de navigation.
                </p>
                <p>
                  Vous pouvez les accepter ou les refuser via les paramètres de
                  votre navigateur. Le refus de certains cookies peut limiter
                  certaines fonctionnalités.
                </p>
              </div>
            </section>

            {/* 6. Droit applicable */}
            <section>
              <h2 className="section-title text-primary mb-4">
                6. Droit applicable
              </h2>
              <div className="space-y-3 section-text text-gray-700">
                <p>
                  Le site et les présentes mentions légales sont soumis au droit
                  ivoirien.
                </p>
                <p>
                  En cas de litige, et à défaut de solution amiable, les
                  tribunaux compétents seront ceux du ressort d&apos;Abidjan,
                  sous réserve des règles de compétence impératives.
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
