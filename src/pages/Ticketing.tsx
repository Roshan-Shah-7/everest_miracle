import React from 'react';

const TicketingPage: React.FC = () => {
    return (
        <div className="bg-gray-50 pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-primary-700 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Ticketing Information
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        Find out how to book your next adventure with us or through our trusted partners.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Our Ticketing Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-primary-800 mb-6">
                                Booking Directly with Us
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We offer a seamless booking experience directly through our website for all our tour packages. Simply browse our tours, select your desired package, and follow the easy steps to secure your spot.
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                                <li>Browse our diverse range of tour packages.</li>
                                <li>Select your preferred dates and group size.</li>
                                <li>Fill out the booking form with your details.</li>
                                <li>Receive instant confirmation and payment options.</li>
                                <li>Our customer support team is always ready to assist you.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                For any custom requests or special arrangements, please don't hesitate to <a href="/contact" className="text-primary-500 hover:underline">contact us</a> directly.
                            </p>
                        </div>

                        {/* Afnuu Website Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-primary-800 mb-6">
                                External Ticketing Partner: Afnuu.com
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We are proud to partner with Afnuu.com, a leading platform for travel and ticketing services. You can also find and book our tours, as well as a wide array of other travel options, directly on their website.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Afnuu.com provides a secure and convenient way to purchase tickets, often featuring exclusive deals and flexible booking options. We highly recommend checking out their platform for additional choices.
                            </p>
                            <a
                                href="https://afnuu.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-8 rounded-lg text-base sm:text-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                            >
                                Visit Afnuu.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TicketingPage;
