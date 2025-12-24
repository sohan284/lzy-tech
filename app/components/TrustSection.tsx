import Image from 'next/image';

export default function TrustSection() {
  const partners = [
    {
      name: 'Côte d\'Ivoire Cables',
      image: '/assets/trust1.png'
    },
    {
      name: 'bnetd',
      image: '/assets/trust2.png'
    },
    {
      name: 'Orange',
      image: '/assets/trust3.png'
    },
    {
      name: 'OIC',
      image: '/assets/trust4.png'
    },
    {
      name: 'Cellcom',
      image: '/assets/trust5.png'
    },
    {
      name: 'Etude Maître CRABE ADJOGOUA Notaire',
      image: '/assets/trust6.png'
    }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#002FA7] text-center mb-12">
          Ils nous font confiance
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <div className="relative w-24 h-24  lg:w-32 lg:h-32">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

