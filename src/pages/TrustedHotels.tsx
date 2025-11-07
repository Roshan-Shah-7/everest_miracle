import React from 'react';
import { FaMapMarkerAlt, FaBed, FaUtensils, FaStar, FaCheck, FaExternalLinkAlt } from 'react-icons/fa';

const TrustedHotels: React.FC = () => {
    const features = [
        {
            icon: <FaMapMarkerAlt className="text-logo-green" />,
            title: "Prime Location",
            description: "Located in the heart of Thamel, the main tourist hub of Kathmandu."
        },
        {
            icon: <FaBed className="text-logo-green" />,
            title: "Comfort Guaranteed",
            description: "Enjoy well-maintained rooms with the finest beddings."
        },
        {
            icon: <FaUtensils className="text-logo-green" />,
            title: "Culinary Delight",
            description: "Savor hygienic and delicious meals at our Terrace Garden restaurant."
        },
        {
            icon: <FaStar className="text-logo-green" />,
            title: "Personalized Service",
            description: "Our dedicated team ensures a warm and welcoming experience."
        }
    ];

    const roomTypes = [
        {
            name: "Superior Double",
            description: "Cozy and comfortable, perfect for solo travelers or couples.",
            features: ["Queen Bed", "City View", "Free WiFi"],
            image: "/assets/galleryHotel/superiorDouble.webp"
        },
        {
            name: "Superior Twin",
            description: "For friends traveling together, colleagues on a business trip.",
            features: ["Twin Beds", "Garden View", "Free WiFi"],
            image: "/assets/galleryHotel/superiorTwin.webp"
        },
        {
            name: "Deluxe Double",
            description: "Spacious and stylish, ideal for those seeking extra comfort.",
            features: ["King Bed", "Balcony", "Netflix"],
            image: "/assets/galleryHotel/deluxeDouble.webp"
        },
        {
            name: "Deluxe Twin",
            description: "Ample space, elegant furnishings & additional amenities.",
            features: ["Twin Beds", "Mountain View", "Netflix"],
            image: "/assets/galleryHotel/deluxeTwin.webp"
        }
    ];

    const amenities = [
        "Free Wi-Fi (scan on the TV as soon as you enter the room)",
        "Television with Free Netflix",
        "Air conditioning",
        "Coffee/tea maker",
        "Complimentary toiletries",
        "Bathroom slippers",
        "Telephone",
        "Work desk",
        "Laundry service",
        "24/7 Room Service"
    ];

    const services = [
        "24-Hour Front Desk",
        "24-Hour Security",
        "Daily Housekeeping",
        "F&B Services",
        "Free Wi-Fi",
        "Airport Transfers",
        "Tour Desk",
        "Luggage Storage"
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-linear-to-br from-gray-900 to-primary-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/50"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
                ></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 bg-logo-green/20 text-logo-green rounded-full text-sm font-medium mb-4 border border-logo-green/30">
                            Featured Hotel
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Our Trusted <span className="text-logo-green">Hotel Partner</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            We have partnered with the best hotels to provide you with a comfortable and memorable stay.
                            Enjoy exclusive discounts as an Everest Miracle guest.
                        </p>
                    </div>
                </div>
            </section>

            {/* Hotel Introduction */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Content Side */}
                            <div className="p-8 md:p-12 lg:p-16">
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 bg-logo-green/10 text-logo-green text-sm font-medium rounded-full mb-4">
                                        Featured Partner
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Gallery Park Hotel
                                    </h2>
                                    <div className="w-16 h-1 bg-logo-green mb-6"></div>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                    Welcome to Gallery Park Hotel! Nestled in the vibrant heart of Thamel, we offer a unique blend of comfort and style, perfect for travelers seeking an authentic Kathmandu experience.
                                </p>

                                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                    As a guest of Everest Miracle, you are entitled to a special discount at Gallery Park Hotel. Please contact us for more information.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="https://gallerypark.com.np/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-logo-green text-white font-bold rounded-lg hover:bg-logo-green-dark transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Visit Gallery Park Hotel
                                        <FaExternalLinkAlt className="ml-3 -mr-1 h-5 w-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="relative min-h-96 lg:min-h-full">
                                <img
                                    src="/assets/galleryHotel/feature.webp"
                                    alt="Gallery Park Hotel"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-l from-black/20 to-transparent lg:hidden"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hotel Story */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl mx-auto text-left">
                            <span className="inline-block px-4 py-1.5 bg-logo-green/20 text-logo-green rounded-full text-sm font-medium mb-4 border border-logo-green/30">
                                Our Story
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                Where Heritage Meets Modern Comfort
                            </h2>
                            
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    At Gallery Park Hotel, we believe that travel is an art, and we aim to make your stay a masterpiece.
                                    Managed by seasoned hotelier Bharat Jung Pandey, our hotel is a sanctuary for travelers, offering a
                                    serene escape amidst the bustling streets of Kathmandu.
                                </p>
                                <p>
                                    Gallery Park Hotel has undergone a significant transformation, combining the charm of the old by
                                    carefully renovating furniture such as tables, chairs, beds, and cupboards. The interior brick walls
                                    in the rooms were restored and remodeled, while the exterior of the building was also renewed.
                                </p>
                                <p>
                                    Our hotel's name, Gallery Park, reflects our passion for art and nature. As you explore our premises,
                                    you'll find a curated collection of pictures, diverse plants, small brass images, and intricate
                                    woodworks that embody the rich cultural heritage of Nepal.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                src="/assets/galleryHotel/about.webp" 
                                alt="Gallery Park Hotel Heritage" 
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Gallery Park Hotel?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Experience unparalleled comfort and service in the heart of Kathmandu
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
                            >
                                <div className="text-4xl mb-4 flex justify-center">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Room Types */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-logo-green/20 text-logo-green rounded-full text-sm font-medium mb-4 border border-logo-green/30">
                            Accommodation
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Rooms & Suites
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Choose from our carefully designed rooms that blend comfort with local artistry
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {roomTypes.map((room, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={room.image} 
                                        alt={room.name} 
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                                        <div className="text-2xl font-bold text-white">{room.name}</div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">{room.description}</p>
                                    <div className="space-y-2">
                                        {room.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-sm text-gray-500">
                                                <FaCheck className="w-4 h-4 text-logo-green mr-2" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenities & Services */}
            <section className="py-20 bg-linear-to-br from-gray-900 to-[#1a2336] text-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Amenities */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold mb-6 text-center">Amenities & Facilities</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {amenities.map((amenity, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-logo-green rounded-full"></div>
                                        <span className="text-gray-300">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Services */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold mb-6 text-center">Services & Facilities</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-logo-green rounded-full"></div>
                                        <span className="text-gray-300">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dining Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-logo-green/20 text-logo-green rounded-full text-sm font-medium mb-4 border border-logo-green/30">
                                Dining Experience
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Terrace Garden Restaurant
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Savor Authentic Flavors with a View. Indulge in a culinary journey at our Terrace Garden restaurant,
                                where you can enjoy delicious meals with stunning views of the city.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-6 rounded-2xl">
                                    <h4 className="font-bold text-gray-900 mb-2">Garden Terrace</h4>
                                    <p className="text-gray-600 text-sm">Outdoor seating for 28 guests, surrounded by lush greenery.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl">
                                    <h4 className="font-bold text-gray-900 mb-2">Indoor Dining</h4>
                                    <p className="text-gray-600 text-sm">Comfortable seating for 30+ guests, offering a warm and cozy ambiance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Terrace Garden Restaurant"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-linear-to-r from-logo-green to-logo-green-light">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Experience Gallery Park Hotel?
                    </h2>
                    <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                        Contact us today to get your exclusive Everest Miracle discount and book your perfect stay in Kathmandu.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://gallerypark.com.np/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-logo-green font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
                        >
                            Visit Hotel Website
                            <FaExternalLinkAlt className="ml-3 -mr-1 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrustedHotels;