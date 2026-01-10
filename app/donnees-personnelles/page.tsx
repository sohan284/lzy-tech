"use client";

import { motion } from "framer-motion";
import NoticeHeroSection from "../components/NoticeHeroSection";

export default function DonneesPersonnelles() {
  return (
    <div className="min-h-screen bg-white">
      <NoticeHeroSection title="Données personnelles" />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-lg p-8 md:p-12 space-y-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Introduction */}
            <section>
              <div className="space-y-3 section-text text-gray-700">
                <p>
                  IzyTechnology accorde une importance primordiale au respect de
                  votre vie privée et des données que vous nous confiez.
                </p>
                <p>
                  Cette page a pour objectif de vous informer des conditions dans
                  lesquelles vos données personnelles sont collectées et traitées
                  lorsque vous utilisez notre site internet.
                </p>
              </div>
            </section>

            {/* I. Qui accède à vos données ? */}
            <section>
              <h2 className="section-title text-primary mb-4">
                I. Qui accède à vos données ?
              </h2>
              <div className="space-y-3 section-text text-gray-700">
                <p>
                  En accédant au site internet izytechnology.com, certaines
                  informations vous concernant peuvent être collectées et traitées
                  par :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>IzyTechnology</strong>, société de conseil et de services
                    en systèmes d&apos;information,
                    <br />
                    BP 363 Grand-Bassam – Côte d&apos;Ivoire,
                  </li>
                  <li>
                    ses équipes internes en charge du suivi des demandes et de la
                    relation clients,
                  </li>
                  <li>
                    ses prestataires techniques (hébergeur, maintenance, outils de
                    mesure d&apos;audience) qui contribuent au bon fonctionnement du
                    site.
                  </li>
                </ul>
                <p>
                  IzyTechnology est responsable des traitements de données réalisés
                  à partir de ce site, conformément à la réglementation applicable
                  en matière de protection des données personnelles.
                </p>
                <p>
                  IzyTechnology pourra être amenée à communiquer certaines données
                  personnelles aux autorités administratives ou judiciaires
                  légalement habilitées, dans le cadre de leurs missions et dans la
                  limite de ce qui est strictement nécessaire.
                </p>
              </div>
            </section>

            {/* II. Quelles sont les données collectées ? */}
            <section>
              <h2 className="section-title text-primary mb-4">
                II. Quelles sont les données collectées ?
              </h2>
              <div className="space-y-3 section-text text-gray-700">
                <p>
                  Les données personnelles que nous traitons proviennent
                  principalement :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    des informations que vous nous communiquez via le formulaire de
                    contact ou par e-mail,
                  </li>
                  <li>
                    des données techniques liées à votre navigation (par exemple :
                    pages consultées, temps de visite), lorsque des cookies de mesure
                    d&apos;audience sont utilisés.
                  </li>
                </ul>
                <p>Nous pouvons collecter notamment :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Données d&apos;identification :</strong> nom, prénom
                  </li>
                  <li>
                    <strong>Données professionnelles :</strong> fonction,
                    organisation, pays
                  </li>
                  <li>
                    <strong>Données de contact :</strong> adresse e-mail, numéro de
                    téléphone (facultatif)
                  </li>
                  <li>
                    <strong>Contenu de votre message :</strong> description de vos
                    besoins, de vos enjeux ou de votre projet
                  </li>
                </ul>
                <p>
                  Aucune donnée n&apos;est collectée à partir de sources publiques
                  sans que vous en soyez informé.
                </p>
              </div>
            </section>

            {/* III. Pourquoi IzyTechnology collecte vos données ? */}
            <section>
              <h2 className="section-title text-primary mb-4">
                III. Pourquoi IzyTechnology collecte vos données ?
              </h2>
              <div className="space-y-3 section-text text-gray-700">
                <p>
                  IzyTechnology collecte et traite vos données personnelles pour :
                </p>
                <div className="space-y-4">
                  <div>
                    <p>
                      <strong>1. Répondre à vos demandes de contact</strong>
                    </p>
                    <p className="ml-4">
                      Les données saisies dans le formulaire sont utilisées pour
                      recevoir, analyser et traiter votre demande, et, si nécessaire,
                      organiser un échange avec vous.
                    </p>
                    <p className="ml-4 italic">
                      Base légale : l&apos;intérêt légitime d&apos;IzyTechnology à
                      répondre aux demandes entrantes et à développer sa relation
                      commerciale.
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>2. Préparer et suivre la relation commerciale</strong>
                    </p>
                    <p className="ml-4">
                      Vos données peuvent être utilisées pour vous recontacter,
                      préciser vos besoins, vous adresser une proposition ou assurer
                      le suivi d&apos;un échange déjà engagé.
                    </p>
                    <p className="ml-4 italic">
                      Base légale : l&apos;intérêt légitime d&apos;IzyTechnology à
                      assurer le suivi de ses prospects et clients.
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>
                        3. Mesurer l&apos;audience du site et améliorer son contenu
                      </strong>
                    </p>
                    <p className="ml-4">
                      Des cookies ou outils de mesure d&apos;audience peuvent être
                      utilisés pour mieux comprendre l&apos;utilisation du site
                      (pages les plus consultées, temps passé, etc.) et améliorer nos
                      contenus.
                    </p>
                    <p className="ml-4 italic">
                      Base légale : votre consentement lorsqu&apos;il est requis (voir
                      bandeau cookies et réglages de votre navigateur).
                    </p>
                  </div>
                </div>
                <p>
                  IzyTechnology ne réalise pas de prise de décision automatisée
                  produisant des effets juridiques à votre égard, ni de profilage au
                  sens strict à partir des données collectées via ce site.
                </p>
              </div>
            </section>

            {/* IV. Combien de temps vos données sont-elles conservées ? */}
            <section>
              <h2 className="section-title text-primary mb-4">
                IV. Combien de temps vos données sont-elles conservées ?
              </h2>
              <div className="space-y-3 section-text text-gray-700">
                <p>
                  Les données que vous nous transmettez via le formulaire de contact
                  sont conservées pendant une durée maximale de 24 mois à compter de
                  votre dernier échange avec nous (dernière demande, dernier contact
                  initié de votre part).
                </p>
                <p>
                  Si une relation commerciale plus durable s&apos;engage (par exemple,
                  signature de contrat), vos données pourront être conservées plus
                  longtemps, pour la durée nécessaire à l&apos;exécution du contrat
                  puis pour le respect des obligations légales ou réglementaires
                  applicables.
                </p>
                <p>
                  En cas de demande d&apos;effacement ou d&apos;opposition de votre
                  part, et sous réserve des obligations légales d&apos;IzyTechnology,
                  vos données seront supprimées ou archivées de manière sécurisée après
                  vérification de votre identité.
                </p>
              </div>
            </section>

            {/* V. Quels sont vos droits et comment les exercer ? */}
            <section>
              <h2 className="section-title text-primary mb-4">
                V. Quels sont vos droits et comment les exercer ?
              </h2>
              <div className="space-y-3 section-text text-gray-700">
                <p>
                  Conformément à la réglementation applicable, vous disposez notamment
                  :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>d&apos;un droit d&apos;accès à vos données,</li>
                  <li>
                    d&apos;un droit de rectification si elles sont inexactes ou
                    incomplètes,
                  </li>
                  <li>
                    d&apos;un droit de suppression (dans les limites prévues par la
                    loi),
                  </li>
                  <li>
                    d&apos;un droit d&apos;opposition ou de limitation du traitement
                    dans certains cas.
                  </li>
                </ul>
                <p>
                  Pour exercer vos droits ou pour toute question relative à la gestion
                  de vos données personnelles, vous pouvez nous contacter à
                  l&apos;adresse suivante :
                </p>
                <p>
                  <a
                    href="mailto:info@izytechnology.com"
                    className="text-primary hover:underline"
                  >
                    info@izytechnology.com
                  </a>
                </p>
                <p>
                  IzyTechnology pourra vous demander un justificatif d&apos;identité en
                  cas de doute, afin de protéger vos données contre tout accès non
                  autorisé.
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

