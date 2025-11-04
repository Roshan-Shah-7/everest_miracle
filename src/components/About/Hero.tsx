import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative py-20 bg-linear-to-br from-primary-700 to-primary-700/90 text-white">
            <div className="absolute inset-0 bg-black/50"></div>
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759849-deb9df5f14d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
            ></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block px-4 py-1.5 bg-logo-green/20 text-logo-green rounded-full text-sm font-medium mb-4 border border-logo-green/30">
                        About Us
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Make Your Travel Experience <span className="text-logo-green">The Best!</span>
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Everest Miracle prides itself of being a premier travel service company committed in providing our
                        clients with personalized service at competitive prices.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;