import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-primary-700 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        We'd love to hear from you! Reach out to us for any inquiries, bookings, or feedback.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-logo-green focus:border-logo-green sm:text-sm"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-logo-green focus:border-logo-green sm:text-sm"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-logo-green focus:border-logo-green sm:text-sm"
                                    placeholder="Subject of your message"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-logo-green focus:border-logo-green sm:text-sm"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-logo-green hover:bg-logo-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-logo-green-dark"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information & Map */}
                    <div className="space-y-12">
                        {/* Contact Info */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Details</h2>
                            <div className="space-y-4 text-gray-700">
                                <p className="flex items-center text-lg">
                                    <svg className="w-6 h-6 mr-3 text-logo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Kathmandu, Nepal
                                </p>
                                <p className="flex items-center text-lg">
                                    <svg className="w-6 h-6 mr-3 text-logo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.249 11.249 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +977 1-XXXXXXX
                                </p>
                                <p className="flex items-center text-lg">
                                    <svg className="w-6 h-6 mr-3 text-logo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    info@everestmiracle.com
                                </p>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us on the Map</h2>
                            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                                Map Placeholder
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;