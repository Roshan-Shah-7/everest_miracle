import React from 'react';

const Memberships: React.FC = () => {
    const logos = [
        { name: 'Australia Federation of Travel Agents', imageUrl: '/src/assets/memberOf/afta-logo.webp' },
        { name: 'International Air Transport Association', imageUrl: '/src/assets/memberOf/iata.webp' },
        { name: 'Government of Nepal', imageUrl: '/src/assets/memberOf/nepal-gov.webp' },
        { name: 'Nepal Association of Tour and Travel Agents', imageUrl: '/src/assets/memberOf/natta-logo.webp' },
        { name: 'Nepal Tourism Board', imageUrl: '/src/assets/memberOf/ntb.webp' },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-2xl font-semibold text-gray-500 tracking-wider mb-10">
                    Proud Members & Affiliates
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-8">
                    {logos.map((logo) => (
                        <div key={logo.name}>
                            <img
                                src={logo.imageUrl}
                                alt={logo.name}
                                className="h-12 lg:h-30 object-contain filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
                                title={logo.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Memberships;