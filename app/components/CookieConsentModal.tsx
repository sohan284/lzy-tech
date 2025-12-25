"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ConsentStatus = "accepted" | "rejected" | "skipped" | null;

export default function CookieConsentModal() {
  const [showModal, setShowModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showFullPolicy, setShowFullPolicy] = useState(false);

  useEffect(() => {
    // Use setTimeout to avoid synchronous setState in effect
    const timer = setTimeout(() => {
      setIsMounted(true);
      // Check localStorage for existing consent
      const consent = localStorage.getItem("cookieConsent") as ConsentStatus;
      // Check sessionStorage to see if user skipped in this session
      const skippedThisSession = sessionStorage.getItem("cookieConsentSkipped");

      // Only show modal if:
      // 1. No consent has been given (not accepted or rejected)
      // 2. User hasn't skipped in this session
      if (
        consent !== "accepted" &&
        consent !== "rejected" &&
        !skippedThisSession
      ) {
        setShowModal(true);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowModal(false);
    // Here you can initialize analytics or other tracking if needed
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowModal(false);
    // Here you can disable analytics or other tracking if needed
  };

  const handleSkip = () => {
    // Save to sessionStorage so it doesn't show again in this session
    sessionStorage.setItem("cookieConsentSkipped", "true");
    setShowModal(false);
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {showModal && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-[10000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleSkip}
          />

          {/* Modal */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:max-w-2xl md:max-h-[90vh] z-[10001] bg-white rounded-t-2xl md:rounded-2xl shadow-2xl flex flex-col"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-4 sticky top-0 bg-white pb-4 border-b">
                <h3 className="text-xl font-bold text-gray-900">
                  Politique de Cookies
                </h3>
                <button
                  onClick={handleSkip}
                  className="text-gray-400 hover:text-gray-600 transition-colors ml-4"
                  aria-label="Fermer"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Introduction */}
                <div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Conformément au Règlement Général sur la Protection des
                    Données (RGPD) et à la directive ePrivacy, cette politique
                    de cookies explique comment IzyTechnology utilise les
                    cookies et technologies similaires sur son site web.
                  </p>
                  <p className="text-gray-600 text-xs mb-2">
                    <strong>Dernière mise à jour :</strong>{" "}
                    {new Date().toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                {/* Toggle for full policy */}
                <button
                  onClick={() => setShowFullPolicy(!showFullPolicy)}
                  className="w-full text-left text-primary hover:text-primary/80 font-medium text-sm flex items-center justify-between py-2"
                >
                  <span>
                    {showFullPolicy ? "Masquer" : "Afficher"} la politique
                    complète
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      showFullPolicy ? "rotate-180" : ""
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

                {/* Full Policy */}
                <AnimatePresence>
                  {showFullPolicy && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-6 text-sm text-gray-700 pt-4 border-t">
                        {/* 1. Qu'est-ce qu'un cookie */}
                        <section>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            1. Qu&apos;est-ce qu&apos;un cookie ?
                          </h4>
                          <p className="mb-2">
                            Un cookie est un petit fichier texte déposé sur
                            votre terminal (ordinateur, tablette, smartphone)
                            lors de la visite d&apos;un site web. Il permet au
                            site de reconnaître votre navigateur et de mémoriser
                            certaines informations vous concernant.
                          </p>
                          <p>
                            Les cookies sont utilisés pour améliorer votre
                            expérience de navigation, analyser le trafic du site
                            et personnaliser le contenu.
                          </p>
                        </section>

                        {/* 2. Types de cookies */}
                        <section>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            2. Types de cookies utilisés
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <h5 className="font-medium text-gray-800 mb-1">
                                Cookies strictement nécessaires
                              </h5>
                              <p className="text-xs mb-1">
                                Ces cookies sont indispensables au
                                fonctionnement du site et ne peuvent pas être
                                désactivés. Base légale : intérêt légitime
                                (fonctionnement du site).
                              </p>
                              <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                                <li>
                                  Mémoriser vos préférences de consentement aux
                                  cookies
                                </li>
                                <li>Assurer la sécurité de votre navigation</li>
                                <li>Maintenir votre session active</li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-gray-800 mb-1">
                                Cookies de mesure d&apos;audience (analytics)
                              </h5>
                              <p className="text-xs mb-1">
                                Ces cookies nous permettent de comprendre
                                comment les visiteurs utilisent notre site. Base
                                légale : consentement.
                              </p>
                              <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                                <li>Le nombre de visiteurs</li>
                                <li>Les pages les plus consultées</li>
                                <li>Le temps passé sur le site</li>
                                <li>Les sources de trafic</li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-gray-800 mb-1">
                                Cookies de confort de navigation
                              </h5>
                              <p className="text-xs mb-1">
                                Ces cookies améliorent votre expérience
                                utilisateur. Base légale : consentement.
                              </p>
                              <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                                <li>Vos préférences linguistiques</li>
                                <li>Vos choix d&apos;affichage</li>
                                <li>
                                  Les informations saisies dans les formulaires
                                </li>
                              </ul>
                            </div>
                          </div>
                        </section>

                        {/* 3. Durée de conservation */}
                        <section>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            3. Durée de conservation des cookies
                          </h4>
                          <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                            <li>
                              <strong>Cookies de session :</strong> Supprimés
                              automatiquement à la fermeture de votre navigateur
                            </li>
                            <li>
                              <strong>Cookies persistants :</strong> Conservés
                              jusqu&apos;à 13 mois maximum ou jusqu&apos;à leur
                              suppression manuelle
                            </li>
                            <li>
                              <strong>Cookies de consentement :</strong>{" "}
                              Conservés 13 mois pour mémoriser votre choix
                            </li>
                          </ul>
                        </section>

                        {/* 4. Liste détaillée des cookies */}
                        <section>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            4. Liste détaillée des cookies utilisés
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-xs border-collapse border border-gray-300">
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 p-2 text-left">
                                    Nom du cookie
                                  </th>
                                  <th className="border border-gray-300 p-2 text-left">
                                    Type
                                  </th>
                                  <th className="border border-gray-300 p-2 text-left">
                                    Finalité
                                  </th>
                                  <th className="border border-gray-300 p-2 text-left">
                                    Durée
                                  </th>
                                  <th className="border border-gray-300 p-2 text-left">
                                    Base légale
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-gray-300 p-2">
                                    cookieConsent
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    Strictement nécessaire
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    Mémoriser votre choix de consentement
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    13 mois
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    Intérêt légitime
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 p-2">
                                    cookieConsentDate
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    Strictement nécessaire
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    Enregistrer la date de consentement
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    13 mois
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    Intérêt légitime
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 p-2">
                                    cookieConsentSkipped
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    Strictement nécessaire
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    Mémoriser le report du consentement
                                    (session)
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    Fin de session
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    Intérêt légitime
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="text-xs mt-2 italic text-gray-600">
                            Note : Actuellement, nous n&apos;utilisons pas de
                            cookies d&apos;analyse, de marketing ou de réseaux
                            sociaux. Si cela venait à changer, cette liste sera
                            mise à jour et vous en serez informé.
                          </p>
                        </section>

                        {/* 4b. Cookies tiers */}
                        <section>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            5. Cookies tiers
                          </h4>
                          <p className="text-xs">
                            Actuellement, notre site n&apos;utilise pas de
                            cookies tiers (publicitaires, réseaux sociaux,
                            etc.). Si cela venait à changer, nous mettrions à
                            jour cette politique en conséquence et vous en
                            informerions conformément à l&apos;article 13 du
                            RGPD.
                          </p>
                        </section>

                        {/* 6. Gestion des cookies */}
                        <section>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            6. Comment gérer vos cookies ?
                          </h4>
                          <p className="text-xs mb-2">
                            Vous pouvez à tout moment modifier vos préférences
                            via les paramètres de votre navigateur :
                          </p>
                          <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                            <li>
                              <strong>Chrome :</strong> Paramètres →
                              Confidentialité et sécurité → Cookies
                            </li>
                            <li>
                              <strong>Firefox :</strong> Options → Vie privée et
                              sécurité → Cookies
                            </li>
                            <li>
                              <strong>Safari :</strong> Préférences →
                              Confidentialité → Cookies
                            </li>
                            <li>
                              <strong>Edge :</strong> Paramètres →
                              Confidentialité, recherche et services → Cookies
                            </li>
                          </ul>
                          <p className="text-xs mt-2 text-amber-600">
                            <strong>Attention :</strong> Le refus de certains
                            cookies peut limiter certaines fonctionnalités du
                            site.
                          </p>
                        </section>

                        {/* 7. Vos droits RGPD */}
                        <section>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            7. Vos droits (RGPD - Règlement UE 2016/679)
                          </h4>
                          <p className="text-xs mb-2">
                            Conformément au RGPD, vous disposez des droits
                            suivants :
                          </p>
                          <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                            <li>Droit d&apos;accès à vos données</li>
                            <li>Droit de rectification</li>
                            <li>
                              Droit à l&apos;effacement (&quot;droit à
                              l&apos;oubli&quot;)
                            </li>
                            <li>Droit d&apos;opposition au traitement</li>
                            <li>Droit à la limitation du traitement</li>
                            <li>Droit à la portabilité des données</li>
                            <li>
                              Droit de retirer votre consentement à tout moment
                            </li>
                            <li>
                              Droit d&apos;introduire une réclamation auprès de
                              l&apos;autorité de contrôle
                            </li>
                          </ul>
                          <p className="text-xs mt-2">
                            Pour exercer ces droits, contactez-nous à :{" "}
                            <a
                              href="mailto:info@izytechnology.com"
                              className="text-primary hover:underline"
                            >
                              info@izytechnology.com
                            </a>
                          </p>
                          <p className="text-xs mt-2">
                            Vous avez également le droit d&apos;introduire une
                            réclamation auprès de l&apos;autorité de contrôle
                            compétente de votre pays de résidence si vous
                            estimez que le traitement de vos données
                            personnelles constitue une violation du RGPD.
                          </p>
                          <p className="text-xs mt-2">
                            <strong>Autorité de contrôle en France :</strong>{" "}
                            CNIL (Commission Nationale de l&apos;Informatique et
                            des Libertés) -{" "}
                            <a
                              href="https://www.cnil.fr"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              www.cnil.fr
                            </a>
                          </p>
                        </section>

                        {/* 8. Base légale et finalités */}
                        <section>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            8. Base légale du traitement (Article 6 RGPD)
                          </h4>
                          <p className="text-xs">
                            Le traitement de vos données via les cookies est
                            basé sur :
                          </p>
                          <ul className="list-disc list-inside space-y-1 ml-2 text-xs mt-1">
                            <li>
                              <strong>
                                Intérêt légitime (Art. 6.1.f RGPD) :
                              </strong>{" "}
                              Pour les cookies strictement nécessaires au
                              fonctionnement du site (mémorisation du
                              consentement, sécurité, session)
                            </li>
                            <li>
                              <strong>Consentement (Art. 6.1.a RGPD) :</strong>{" "}
                              Pour les cookies d&apos;analyse et de confort de
                              navigation (non utilisés actuellement)
                            </li>
                          </ul>
                          <p className="text-xs mt-2">
                            <strong>Finalités du traitement :</strong>
                          </p>
                          <ul className="list-disc list-inside space-y-1 ml-2 text-xs mt-1">
                            <li>Assurer le fonctionnement technique du site</li>
                            <li>Mémoriser vos préférences de consentement</li>
                            <li>
                              Améliorer la sécurité et prévenir les fraudes
                            </li>
                            <li>
                              Respecter nos obligations légales (conservation
                              des preuves de consentement)
                            </li>
                          </ul>
                        </section>

                        {/* 9. Transferts internationaux */}
                        <section>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            9. Transferts de données hors UE
                          </h4>
                          <p className="text-xs">
                            Les données collectées via les cookies sont stockées
                            et traitées au sein de l&apos;Union Européenne.
                            Aucun transfert de données personnelles vers des
                            pays tiers n&apos;est effectué actuellement. Si cela
                            venait à changer, nous nous assurerions que des
                            garanties appropriées sont en place conformément au
                            chapitre V du RGPD (clauses contractuelles types,
                            Privacy Shield, etc.).
                          </p>
                        </section>

                        {/* 10. Retrait du consentement */}
                        <section>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            10. Retrait du consentement
                          </h4>
                          <p className="text-xs">
                            Vous pouvez retirer votre consentement à tout moment
                            en supprimant les cookies de votre navigateur ou en
                            nous contactant à{" "}
                            <a
                              href="mailto:info@izytechnology.com"
                              className="text-primary hover:underline"
                            >
                              info@izytechnology.com
                            </a>
                            . Le retrait du consentement n&apos;affecte pas la
                            licéité du traitement effectué avant le retrait
                            (Art. 7.3 RGPD).
                          </p>
                        </section>

                        {/* 11. Contact et responsable du traitement */}
                        <section>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            11. Contact et responsable du traitement (Art. 13
                            RGPD)
                          </h4>
                          <div className="text-xs space-y-1">
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
                              <strong>Adresse :</strong> BP 363 Grand-Bassam –
                              Côte d&apos;Ivoire
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
                              <strong>Téléphone :</strong> (+225) 25 21 00 3030
                              / (+225) 05 05 85 7777
                            </p>
                            <p>
                              <strong>Représentant légal :</strong> Parfait
                              KOUADIO
                            </p>
                            <p className="mt-2">
                              <strong>
                                Délégué à la Protection des Données (DPO) :
                              </strong>{" "}
                              Pour toute question relative au traitement de vos
                              données personnelles, vous pouvez contacter notre
                              responsable à l&apos;adresse ci-dessus.
                            </p>
                          </div>
                        </section>

                        {/* 12. Modifications */}
                        <section>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            12. Modifications de la politique
                          </h4>
                          <p className="text-xs">
                            Cette politique de cookies peut être modifiée pour
                            refléter les changements dans nos pratiques ou pour
                            d&apos;autres raisons opérationnelles, légales ou
                            réglementaires. La date de dernière mise à jour est
                            indiquée en haut de cette politique. Nous vous
                            encourageons à consulter régulièrement cette page
                            pour prendre connaissance de toute modification.
                          </p>
                        </section>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Quick summary */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    <strong>Résumé :</strong> Nous utilisons des cookies pour
                    améliorer votre expérience de navigation et analyser le
                    trafic du site. Les cookies strictement nécessaires sont
                    activés par défaut. Vous pouvez accepter ou refuser les
                    autres cookies.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions - Sticky footer */}
            <div className="p-6 md:p-8 pt-4 border-t bg-white sticky bottom-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Accepter tous les cookies
                </button>
                <button
                  onClick={handleReject}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Refuser les cookies non essentiels
                </button>
                <button
                  onClick={handleSkip}
                  className="px-6 py-3 text-gray-600 font-medium rounded-lg hover:bg-gray-100 transition-colors text-sm"
                >
                  Plus tard
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
