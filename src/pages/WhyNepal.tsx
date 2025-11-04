import React from 'react';

const WhyNepalPage: React.FC = () => {
    return (
        <div className="bg-gray-50 pt-20">
            {/* Hero Section */}
            <section
                className="py-40 bg-cover bg-center text-white"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')` }}
            >
                <div className="container mx-auto px-6 text-centerpy-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Why Visit Nepal?
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        Discover a land of breathtaking beauty, rich culture, and unparalleled adventure.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="space-y-16">
                        {/* Section 1: The Himalayas */}
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt="The Himalayas"
                                    className="rounded-lg shadow-lg w-full h-auto"
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold text-primary-800 mb-6">
                                    The Majestic Himalayas
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Home to eight of the world's ten highest peaks, including Mount Everest, Nepal offers some of the most spectacular mountain scenery on Earth. Trekking and mountaineering opportunities abound, from the famous Everest Base Camp and Annapurna Circuit to countless other pristine trails. Whether you are a seasoned mountaineer or a casual hiker, you will find a trail that suits your preference. The Himalayas are not just mountains; they are a spiritual sanctuary, a place of profound peace and self-discovery.
                                </p>
                            </div>
                        </div>

                        {/* Section 2: Rich Culture and Heritage */}
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                            <div className="lg:w-1/2">
                                <img
                                    src="/assets/nepal/nepali-culture.webp"
                                    alt="Nepali Culture"
                                    className="rounded-lg shadow-lg w-full h-auto"
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold text-primary-800 mb-6">
                                    Rich Culture and Heritage
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Nepal is a melting pot of cultures and religions. Explore ancient temples and palaces in the Kathmandu Valley, a UNESCO World Heritage site. Witness vibrant festivals like Dashain and Tihar, and immerse yourself in the spiritual traditions of Hinduism and Buddhism, which coexist in perfect harmony. Visit Lumbini, the birthplace of Lord Buddha, and explore the ancient city of Bhaktapur. The living goddess Kumari, the vibrant prayer flags, and the intricate woodcarvings are just a few examples of Nepal's rich cultural tapestry.
                                </p>
                            </div>
                        </div>

                        {/* Section 3: Adventure Activities */}
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2">
                                <img
                                    src="/assets/nepal/trekking.webp"
                                    alt="Adventure in Nepal"
                                    className="rounded-lg shadow-lg w-full h-auto"
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold text-primary-800 mb-6">
                                    A Hub for Adventure
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Beyond trekking, Nepal is a playground for thrill-seekers. Experience world-class white-water rafting on the Trishuli River, paragliding over Phewa Lake in Pokhara, bungee jumping into the Bhote Koshi gorge, and canyoning down pristine waterfalls. For a unique experience, take an ultralight flight for a bird's-eye view of the Annapurnas. There's an adventure for every level of adrenaline junkie.
                                </p>
                            </div>
                        </div>

                        {/* Section 4: Wildlife and Nature */}
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                            <div className="lg:w-1/2">
                                <img
                                    src="/public/assets/nepal/nepal-wildlife.webp"
                                    alt="Wildlife in Nepal"
                                    className="rounded-lg shadow-lg w-full h-auto"
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold text-primary-800 mb-6">
                                    Wildlife and Nature
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Nepal's diverse geography supports a rich variety of flora and fauna. Explore the jungles of Chitwan and Bardia National Parks, where you can spot one-horned rhinos, Bengal tigers, and countless species of birds. The country's commitment to conservation is evident in its well-preserved national parks. Keep an eye out for the elusive snow leopard in the high Himalayas or the playful red panda in the eastern forests. From subtropical jungles to alpine meadows, Nepal is a nature lover's paradise.
                                </p>
                            </div>
                        </div>

                        {/* Section 5: A Gastronomic Journey */}
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2">
                                <img
                                    src="/assets/nepal/nepali-food.webp"
                                    alt="Nepali Food"
                                    className="rounded-lg shadow-lg w-full h-auto"
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold text-primary-800 mb-6">
                                    A Gastronomic Journey
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Nepali cuisine is a delicious fusion of flavors from Tibet, India, and Southeast Asia. The staple dish is Dal Bhat, a hearty meal of lentil soup, rice, and vegetables. Don't miss out on momos, delicious dumplings with various fillings. Explore the unique and spicy Newari cuisine in the Kathmandu Valley. The food is not just about taste; it's about community, sharing, and celebrating life.
                                </p>
                            </div>
                        </div>

                        {/* Section 6: People and Hospitality */}
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-primary-800 mb-6">
                                Warm Hospitality
                            </h2>
                            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                                The people of Nepal are known for their warmth, friendliness, and incredible hospitality. You will be welcomed with a genuine 'Namaste' and open hearts. The Nepali philosophy of "Atithi Devo Bhava" (Guest is God) is deeply ingrained in the culture. Your journey will not just be a trip, but a collection of cherished memories and new friendships.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyNepalPage;
