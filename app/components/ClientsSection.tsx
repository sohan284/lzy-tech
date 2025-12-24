import Image from 'next/image';
import backgroundImage from '@/public/assets/client.jpg';
export default function ClientsSection() {
    return (
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F2E7]">
            <div className="max-w-[1440px] mx-auto">
                {/* Title Section */}
                <div className="mb-12 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002FA7] mb-6">
                        Avec qui nous travaillons
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        Pour en savoir plus sur la façon dont nous accompagnons ces organisations, vous pouvez télécharger notre plaquette détaillée, avec plusieurs exemples de missions et d&apos;impacts concrets.
                    </p>

                    {/* Download Button */}
                    <button className="px-8 py-4 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors rounded-lg text-lg flex items-center gap-2 mx-auto">
                        Télécharger la plaquette IzyTechnology
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                {/* Partners Grid with Central Image */}
                <div className="  py-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Central Image */}


                    {/* Partner Categories - Positioned at corners */}
                    {/* Top Left - Telecom */}
                    <div className='h-full flex lg:flex-col justify-between'>
                        <div className=" flex flex-col items-end">
                            <div className="w-16 h-16 rounded-full bg-[#002FA7] flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {/* Antenna/Tower icon */}
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v2m0 0v2m0-2h2m-2 0H10" />
                                </svg>
                            </div>
                            <h3 className="text-lg lg:text-xl font-semibold text-black">
                                Acteurs télécoms en Afrique
                            </h3>
                        </div>
                        {/* Bottom Left - Industrial */}
                        <div className=" flex flex-col items-end">
                            <div className="w-16 h-16 rounded-full bg-[#002FA7] flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {/* Factory with smokestack */}
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    {/* Smokestack */}
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 8v2m-2-2v2m4-2h-2m2 0h2" />
                                </svg>
                            </div>
                            <h3 className="text-lg lg:text-xl font-semibold text-black">
                                Entreprises industrielles
                            </h3>
                        </div>
                    </div>
                    <div className="relative w-full h-full mx-auto min-h-[650px]">
                        <Image src={backgroundImage} alt="Clients Background" fill className="object-contain" />
                    </div>
                    <div className='h-full flex lg:flex-col justify-between '>
                        {/* Top Right - Public Bodies */}
                        <div className=" flex flex-col items-start text-left">
                            <div className="w-16 h-16 rounded-full bg-[#002FA7] flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {/* Building with columns */}
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    {/* Columns */}
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 21V7m14 14V7" />
                                </svg>
                            </div>
                            <h3 className="text-lg lg:text-xl font-semibold text-black">
                                Organismes publics
                            </h3>
                        </div>


                        {/* Bottom Right - Services */}
                        <div className=" flex flex-col items-start">
                            <div className="w-16 h-16 rounded-full bg-[#002FA7] flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {/* Gavel and document */}
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    {/* Gavel handle */}
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l3-3m0 0l3 3m-3-3v12" />
                                </svg>
                            </div>
                            <h3 className="text-lg lg:text-xl font-semibold text-black">
                                Acteurs de services<br />(juridiques et financiers)
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

