import React from 'react';
import { FaPlaneDeparture, FaFileContract, FaAward, FaStar } from 'react-icons/fa';

const Certifications: React.FC = () => {
    const certifications = [
        {
            title: "IATA Accredited",
            description: "International Air Transport Association certified travel company",
            icon: <FaPlaneDeparture />
        },
        {
            title: "Company Registration",
            description: "Registered with company registrar of Nepal under incorporation number 52355/064/065",
            icon: <FaFileContract />
        },
        {
            title: "Award Winning",
            description: "Recognized as one of the highest selling BSP Agents in Nepal",
            icon: <FaAward />
        },
        {
            title: "Since 2008",
            description: "Providing exceptional travel services for over 15 years",
            icon: <FaStar />
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Accreditations
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Trusted and certified by leading international organizations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="text-4xl mb-4">{cert.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                            <p className="text-gray-600 text-sm">{cert.description}</p>
                        </div>
                    ))}
                </div>

                {/* IATA Accreditation Details */}
                <div className="mt-16 bg-linear-to-r from-logo-green/10 to-white p-8 rounded-2xl border border-logo-green/20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            IATA Accredited Travel Company
                        </h3>
                        <p className="text-gray-600 mb-6">
                            As an IATA accredited Travel Company Everest Miracle is listed among highest selling BSP Agent of
                            Nepal, company is registered with the office of the company registrar of Nepal under its incorporation
                            number 52355/064/065 which was on 17 Day of March 2008 as private limited company to sub-section
                            (1) of section 5 of the Companies Act 2006.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="bg-white px-6 py-3 rounded-lg border border-gray-300">
                                <div className="text-sm text-gray-500">Registration No.</div>
                                <div className="font-bold text-gray-900">52355/064/065</div>
                            </div>
                            <div className="bg-white px-6 py-3 rounded-lg border border-gray-300">
                                <div className="text-sm text-gray-500">Established</div>
                                <div className="font-bold text-gray-900">March 17, 2008</div>
                            </div>
                            <div className="bg-white px-6 py-3 rounded-lg border border-gray-300">
                                <div className="text-sm text-gray-500">Company Type</div>
                                <div className="font-bold text-gray-900">Private Limited</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;