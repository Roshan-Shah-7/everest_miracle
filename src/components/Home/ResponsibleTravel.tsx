import React from 'react';

const ResponsibleTravel: React.FC = () => {
    const initiatives = [
        {
            title: "Environmental Conservation",
            description: "We implement waste management systems, promote reusable alternatives, and organize clean-up campaigns in trekking regions.",
            icon: "🌱"
        },
        {
            title: "Community Empowerment",
            description: "Fair wages for local staff, support for community schools, and partnerships with locally-owned businesses.",
            icon: "🤝"
        },
        {
            title: "Cultural Preservation",
            description: "Respectful tourism practices that honor local traditions and support cultural heritage sites.",
            icon: "🏛️"
        },
        {
            title: "Wildlife Protection",
            description: "Strict policies against wildlife disturbance and support for conservation projects in national parks.",
            icon: "🐾"
        }
    ];


    return (
        <section className="bg-gray-50 py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#83bf48] to-transparent"></div>
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#83bf48]/10 blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[#83bf48]/10 blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-1.5 bg-[#83bf48]/20 text-[#83bf48] rounded-full text-sm font-medium mb-4 border border-[#83bf48]/30">
                                Our Promise
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                A Commitment to <span className="text-[#83bf48]">Responsible Travel</span>
                            </h2>
                            <div className="w-20 h-1 bg-linear-to-r from-[#83bf48] to-transparent mb-6"></div>
                        </div>

                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            We believe that travel should be a force for good. Our journeys are designed to be as respectful as they are remarkable. We are dedicated to sustainable practices, empowering local communities through fair employment, and preserving the pristine natural environments we are privileged to share with you.
                        </p>

                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            Traveling with us means you are directly contributing to the conservation of Nepalese culture and its breathtaking landscapes for generations to come. Every adventure supports local economies while maintaining the ecological balance of these magnificent regions.
                        </p>

                        {/* Key Initiatives */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {initiatives.map((initiative, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-[#83bf48]/30 transition-all duration-300">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">{initiative.icon}</span>
                                        <div>
                                            <h4 className="text-gray-900 font-semibold mb-1">{initiative.title}</h4>
                                            <p className="text-gray-600 text-sm">{initiative.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="order-1 lg:order-2">
                        <div className="relative group">
                            <img
                                src="/src/assets/home/responsible1.webp"
                                alt="Local community in Nepal practicing sustainable tourism"
                                className="rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white shadow-lg">
                                <div className="text-gray-900 text-sm">
                                    <div className="font-bold text-[#83bf48]">Since 2008</div>
                                    <div>Supporting Sustainable Tourism</div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Image Cards */}
                        <div className="grid grid-cols-2 gap-4 mt-6 place-items-center">
                            <div className="relative group">
                                <img
                                    src="/src/assets/home/heroSlider1.webp"
                                    alt="Community development project"
                                    className="rounded-lg h-32 lg:h-50 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="relative group">
                                <img
                                    src="/src/assets/home/heroSlider3.webp"
                                    alt="Environmental conservation efforts"
                                    className="rounded-lg h-32 lg:h-50 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center bg-linear-to-r from-[#83bf48]/10 to-white p-8 rounded-2xl border border-[#83bf48]/20 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Join Us in Making a <span className="text-[#83bf48]">Positive Impact</span>
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Choose Everest Miracle for an adventure that not only transforms your life but also supports the communities and environments you visit.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-[#83bf48] text-white font-semibold rounded-lg hover:bg-[#73a940] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#83bf48]/30">
                            Learn More About Us
                        </button>
                        <button className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:border-[#83bf48]/30 transition-all duration-300">
                            Contact Us to Get Involved
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResponsibleTravel;