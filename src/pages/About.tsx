import React, { useState } from 'react';
import { FaPlaneDeparture, FaFileContract, FaAward, FaStar } from 'react-icons/fa';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [setNode, entry] = useIntersectionObserver({ threshold: 0.1 });
    const isVisible = entry?.isIntersecting ?? false;

    return (
        <div ref={setNode as any} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

const About: React.FC = () => {
    const [expanded, setExpanded] = useState<number[]>([]);

    const toggleExpanded = (index: number) => {
        if (expanded.includes(index)) {
            setExpanded(expanded.filter((i) => i !== index));
        } else {
            setExpanded([...expanded, index]);
        }
    };

    const teamMembers = [
        {
            name: "Deepak Kumar Chaulagai",
            role: "Owner & Director",
            description: "Deepak is the owner and Director of Everest Miracle Travels. Everest Miracle was established in the year 2009 since the inception of the company Deepak started as its Director. He has been instrumental in driving Inbound Tour activities as well as International Ticketing of the Company. Deepak has over 20 years of experience, out of which he has spent the last decade building and maintaining market for Everest Miracle focusing in the International Ticketing and Inbound Tours of the company. Prior to Everest Miracle, Deepak served as Credit Controller at Radisson Hotel Kathmandu he handled Credit and Finance divisions at Radisson. Deepak holds Masters Degree in Management from Tribhuwan University Nepal. As a business leader with experience in building & running a market he had well contributed in grooming and leading the company to new heights.",
            image: "/assets/team/deepak-kumar.webp"
        },
        {
            name: "Bharat Jung Pandey",
            role: "Owner & Operations Director",
            description: "Bharat Jung Pandey is the owner and Operations Director of Everest Miracle Travels. He completed his Graduation in Hotel Management from Pokhara University and started his career from International Chain Hotel at Kathmandu in the year 2005. From the mere start of his career he succeeded in grasping several performance awards and went abroad for his further career developments. But he always had a strong desire to work for his own country as such he returned and established his own Company in the year 2009; Today Everest Miracle is the leading travel company in Nepal. He well proved his diversities during his student years, He was selected for IFT International Exchange Programme held at Macao, which was organized by ( WTO) World Tourism Organization at the Institute for Tourism Studies. He is also a passionate photographer, his keen interest in photography led him to win award from His Excellency James F Moriarty (US Ambassador to Nepal) and senior team of Photographers organized by Wildlife Conservation Nepal at Nature and wildlife Photography competition. Besides operating a Travel company Bharat is also widely involved in many social and extra activities. He is a member of Skal Club of Kathmandu, Member of Lions International and other social organizations. He is representing the trade participating as active member of APJC committee and a senior advisor of NATTA.",
            image: "/assets/team/bharat-jung.webp"
        }
    ];

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
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Section */}
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

            {/* Introduction Section */}
            <AnimatedSection>
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
            </AnimatedSection>

            {/* Certifications Section */}
            <AnimatedSection>
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
            </AnimatedSection>
            
            {/* Team Section */}
            <AnimatedSection>
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 bg-logo-green/20 text-logo-green rounded-full text-sm font-medium mb-4 border border-logo-green/30">
                                Our Team
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Meet The Leadership
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                Dedicated professionals with decades of experience in travel and hospitality
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="md:flex">
                                        <div className="md:shrink-0 md:w-48">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="h-48 w-full md:w-48 md:h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-8">
                                            <div className="uppercase tracking-wide text-sm text-logo-green font-semibold">
                                                {member.role}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                                                {member.name}
                                            </h3>
                                            <p className={`text-gray-600 leading-relaxed ${expanded.includes(index) ? '' : 'line-clamp-5'}`}>
                                                {member.description}
                                            </p>
                                            <button onClick={() => toggleExpanded(index)} className="mt-6 text-logo-green font-semibold hover:text-logo-green-dark transition-colors duration-300">
                                                {expanded.includes(index) ? 'Read Less' : 'Read Full Bio →'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection>
                <section className="py-20 bg-linear-to-r from-logo-green to-logo-green-light">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                            Let us create the perfect travel experience for you. Contact our expert team today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-logo-green font-bold py-3 px-8 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                Contact Us Now
                            </button>
                            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                                View Our Tours
                            </button>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default About;