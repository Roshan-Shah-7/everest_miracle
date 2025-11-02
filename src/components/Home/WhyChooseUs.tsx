import React from 'react';

const WhyChooseUs: React.FC = () => {
    const ToursIcon = () => (
    // Icon components
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-logo-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20.25l6-3.75-6-3.75-6 3.75l6 3.75zM9 15V4.5M15 12l6-3.75-6-3.75-6 3.75l6 3.75z" />
        </svg>
    );

    const FlightsIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-logo-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
    );

    const HotelsIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-logo-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
    );

    const VehicleIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-logo-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h-2.625a1.125 1.125 0 01-1.125-1.125V6.75c0-.621.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125v1.875" />
        </svg>
    );

    const SafetyIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-logo-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    );

    const CustomIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-logo-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
    );

    const features = [
        { title: 'Expert Guides', description: 'Our certified guides bring years of experience and deep knowledge of local culture.', icon: <ToursIcon /> },
        { title: 'Best Price Guarantee', description: 'We offer the best prices with a 100% satisfaction guarantee on all our packages.', icon: <FlightsIcon /> },
        { title: 'Premium Accommodation', description: 'From luxury hotels to cozy teahouses, we ensure your comfort at every stop.', icon: <HotelsIcon /> },
        { title: '24/7 Support', description: 'Round-the-clock assistance during your journey with local and international teams.', icon: <VehicleIcon /> },
        { title: 'Safety First', description: 'Your safety is our priority with certified equipment and emergency protocols.', icon: <SafetyIcon /> },
        { title: 'Custom Packages', description: 'Tailor-made itineraries designed to match your preferences and fitness level.', icon: <CustomIcon /> }
    ];
    
    return (
        <section className="bg-primary-700 py-16 sm:py-20 relative overflow-hidden" aria-labelledby="why-choose-us">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-logo-green to-transparent"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-logo-green/10 blur-xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-logo-green/5 blur-xl"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block px-4 py-1.5 bg-logo-green/20 text-logo-green rounded-full text-sm font-medium mb-4 border border-logo-green/30">
                        Why Choose Us
                    </span>
                    <h2 id="why-choose-us" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 mt-2">
                        The Everest Miracle <span className="text-logo-green">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-logo-green to-transparent mx-auto mb-6"></div>
                    <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                        As a leading travel agency, Everest Miracle is dedicated to helping you explore this unexploited land. Nepal, the land of Buddha, enlightens the world with peace. With hospitality in our hearts, we strive to exceed every guest's expectations.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-logo-green/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-logo-green/10"
                        >
                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-linear-to-br from-logo-green/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex justify-center items-center mb-4 sm:mb-6">
                                    <div className="bg-white/10 p-3 sm:p-4 rounded-2xl group-hover:bg-logo-green/10 transition-colors duration-300 group-hover:scale-110 transform">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-center group-hover:text-logo-green transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 text-center text-sm sm:text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Number indicator */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-logo-green rounded-full flex items-center justify-center text-white text-xs font-bold">
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional CTA Section */}
                <div className="mt-12 sm:mt-16 text-center">
                    <div className="bg-linear-to-r from-logo-green/10 to-primary-800/50 p-8 rounded-2xl border border-logo-green/20 max-w-4xl mx-auto">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Ready for Your <span className="text-logo-green">Adventure</span>?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Join thousands of satisfied travelers who have experienced the magic of Nepal with us.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 bg-logo-green text-white font-semibold rounded-lg hover:bg-logo-green-dark transition-colors duration-300 transform hover:scale-105 shadow-lg shadow-logo-green/20">
                                Book Your Trip Now
                            </button>
                            <button className="px-8 py-3 bg-transparent border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                                Contact Our Experts
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;