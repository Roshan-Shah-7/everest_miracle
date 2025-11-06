import React from 'react';

const BharatJung: React.FC = () => {
    return (
        <div className="bg-gray-50 pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-primary-700 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Bharat Jung Pandey
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        Owner & Operations Director
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-1">
                                <img src="/assets/team/bharat-jung.webp" alt="Bharat Jung Pandey" className="rounded-2xl shadow-lg w-full" />
                            </div>
                            <div className="lg:col-span-2 prose prose-lg max-w-none">
                                <p>
                                    Bharat Jung Pandey is the owner and Operations Director of Everest Miracle Travels. He completed his Graduation in Hotel Management from Pokhara University and started his career from International Chain Hotel at Kathmandu in the year 2005. From the mere start of his career he succeeded in grasping several performance awards and went abroad for his further career developments. But he always had a strong desire to work for his own country as such he returned and established his own Company in the year 2009; Today Everest Miracle is the leading travel company in Nepal. He well proved his diversities during his student years, He was selected for IFT International Exchange Programme held at Macao, which was organized by ( WTO) World Tourism Organization at the Institute for Tourism Studies. He is also a passionate photographer, his keen interest in photography led him to win award from His Excellency James F Moriarty (US Ambassador to Nepal) and senior team of Photographers organized by Wildlife Conservation Nepal at Nature and wildlife Photography competition. Besides operating a Travel company Bharat is also widely involved in many social and extra activities. He is a member of Skal Club of Kathmandu, Member of Lions International and other social organizations. He is representing the trade participating as active member of APJC committee and a senior advisor of NATTA.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BharatJung;