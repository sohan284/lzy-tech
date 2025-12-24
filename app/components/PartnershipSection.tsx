import Image from 'next/image';
import backgroundImage from '@/public/assets/partnership.jpg';
    export default function PartnershipSection() {
    return (
      <section className="py-20 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Plus qu&apos;un conseil,<br />un partenaire de vérité.
            </h2>
            <p className="text-lg text-gray-600 italic max-w-2xl mx-auto">
              &quot;Notre croissance repose sur une règle d&apos;or : nous ne vendons pas du temps, nous vendons de l&apos;impact.&quot;
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                {/* Placeholder for image - replace with your actual image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Replace with team image</p>
                  </div>
                </div>
                <Image src={backgroundImage} alt="Partnership Background" fill className="object-cover" />
                {/* Decorative border accent */}
                <div className="absolute -top-4 -left-4 w-32 h-1 bg-yellow-500"></div>
              </div>
            </div>
  
            {/* Right - Content Cards */}
            <div className="space-y-8">
              {/* Card 1 - L'Honnêteté Radicale */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    01
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    L&apos;Honnêteté Radicale
                  </h3>
                  <p className="text-sm font-semibold text-red-600 mb-3">
                    Nous savons dire NON.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Si la promesse de valeur n&apos;est pas atteignable ou si nous n&apos;avons pas la certitude de réussir, nous refusons la mission. Nous n&apos;acceptons que les défis que nous pouvons relever jusqu&apos;au bout.
                  </p>
                </div>
              </div>
  
              {/* Card 2 - L'Obsession du Concret */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    02
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    L&apos;Obsession du Concret
                  </h3>
                  <p className="text-sm font-semibold text-gray-600 mb-3">
                    Au-delà des slides.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Vous n&apos;avez pas besoin d&apos;un énième rapport théorique qui finit dans un tiroir. Nous livrons des solutions éprouvées, des processus installés et des outils configurés pour agir dès le lendemain.
                  </p>
                </div>
              </div>
  
              {/* Card 3 - L'Adaptation Terrain */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    03
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    L&apos;Adaptation Terrain
                  </h3>
                  <p className="text-sm font-semibold text-yellow-600 mb-3">
                    La réalité dicte la méthode.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Nous appliquons la rigueur des standards internationaux, mais nous l&apos;adaptons toujours à vos réalités locales et opérationnelles. C&apos;est la méthode qui s&apos;adapte à votre terrain, jamais l&apos;inverse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }