import ServiceCard from './ServiceCard';

// Icon components
const DataReliabilityIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

const RevenueAssuranceIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
  </svg>
);

const ProcessOptimizationIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const DatabaseOptimizationIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v4m0 0v4m0-4h4m-4 0H8" />
  </svg>
);

const DigitalizationIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v2m0 0v2m0-2h2m-2 0H10" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default function ServicesSection() {
  const services = [
    {
      icon: <DataReliabilityIcon />,
      title: 'Fiabilisation des données',
      description: 'Alignez votre organisation sur une vérité unique. Nous réconcilions Finance, Métiers et DSI pour que vos reportings deviennent des outils de pilotage incontestables, et non des sources de conflits.',
      backgroundImage: '/assets/service1.jpg'
    },
    {
      icon: <RevenueAssuranceIcon />,
      title: 'Revenue Assurance',
      description: 'Encaissez tout ce que vous produisez. Nous traquons les écarts là où ils se cachent pour récupérer le revenu qui vous est dû.',
      backgroundImage: '/assets/service2.jpg'
    },
    {
      icon: <ProcessOptimizationIcon />,
      title: 'Audit & Optimisation de processus',
      description: 'Supprimez les lourdeurs qui fatiguent vos équipes. Nous cartographions et simplifions vos processus pour réduire les risques, limiter les tâches sans valeur ajoutée et gagner en efficacité opérationnelle.',
      backgroundImage: '/assets/service3.jpg'
    },
    {
      icon: <DatabaseOptimizationIcon />,
      title: 'Optimisation bases de données',
      description: 'Faites de vos données un capital exploitable, pas un coût technique. Nous structurons et outillons l\'exploitation de vos bases pour transformer vos données en leviers de pilotage et d\'aide à la décision.',
      backgroundImage: '/assets/service4.jpg'
    },
    {
      icon: <DigitalizationIcon />,
      title: 'Digitalisation ciblée',
      description: 'Digitalisez uniquement là où ça rapporte. Nous concevons des applications métier simples, centrées sur l\'usage, pour remplacer les tâches manuelles répétitives et sécuriser vos opérations au quotidien.',
      backgroundImage: '/assets/service5.jpg'
    },
    {
      icon: <DownloadIcon />,
      title: 'Plaquette Commerciale',
      description: 'Téléchargez notre présentation détaillée pour en savoir plus.',
      backgroundImage: '/assets/service5.jpg',
      isDownloadCard: true
    }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F2E7]">
      <div className="max-w-[1440px] mx-auto">
        {/* Title Section */}
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Là où nous intervenons
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Nous intervenons là où la donnée, les processus et les outils se rejoignent, avec un{' '}
            <span className="text-orange-500 font-semibold">impact direct sur vos revenus et vos opérations</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              backgroundImage={service.backgroundImage}
              isDownloadCard={service.isDownloadCard}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 py-4 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors rounded-lg text-lg">
            Consolidez vos données et sécurisez vos revenus →
          </button>
        </div>
      </div>
    </section>
  );
}

