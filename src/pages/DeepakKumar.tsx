import React from 'react';

const DeepakKumar: React.FC = () => {
    return (
        <div className="bg-gray-50 pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-primary-700 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Deepak Kumar Chaulagai
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        Owner & Director
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-1">
                                <img src="/assets/team/deepak-kumar.webp" alt="Deepak Kumar Chaulagai" className="rounded-2xl shadow-lg w-full" />
                            </div>
                            <div className="lg:col-span-2 prose prose-lg max-w-none">
                                <p>
                                    Deepak is the owner and Director of Everest Miracle Travels. Everest Miracle was established in the year 2009 since the inception of the company Deepak started as its Director. He has been instrumental in driving Inbound Tour activities as well as International Ticketing of the Company. Deepak has over 20 years of experience, out of which he has spent the last decade building and maintaining market for Everest Miracle focusing in the International Ticketing and Inbound Tours of the company. Prior to Everest Miracle, Deepak served as Credit Controller at Radisson Hotel Kathmandu he handled Credit and Finance divisions at Radisson. Deepak holds Masters Degree in Management from Tribhuwan University Nepal. As a business leader with experience in building & running a market he had well contributed in grooming and leading the company to new heights.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DeepakKumar;