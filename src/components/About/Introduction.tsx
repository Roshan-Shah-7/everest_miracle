import React from 'react';

const Introduction: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Your Trusted Travel Partner
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Everest Miracle prides itself of being a premier travel service company committed in providing our
                            clients with personalized service at competitive prices. We aim to open travelers mind and try to show
                            them best of nature, culture and available activities on the itineraries we craft.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Company was established in the year 2008 at Kathmandu. Everest Miracle is now the award-winning
                            IATA Company of Nepal; our focus on guest satisfaction has enabled us to maintain a high level of
                            service which is reflected in all aspects of our services whether it is mere ticketing or organizing tour
                            services to our valued clients.
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Everest Miracle Team"
                            className="rounded-2xl shadow-2xl"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-logo-green text-white p-6 rounded-2xl shadow-xl">
                            <div className="text-3xl font-bold">15+</div>
                            <div className="text-sm">Years of Excellence</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;