import { Link, useParams } from 'react-router-dom';
import { packages } from '../data/data';
import type { Package } from '../data/types';

const TourDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const tour: Package | undefined = packages.find((pkg) => pkg.id === id);

    if (!tour) {
        return <div>Tour not found</div>;
    }

    return (
        <div className="bg-gray-50 pt-20">
            {/* Hero Section */}
            <section
                className="py-40 bg-cover bg-center text-white"
                style={{ backgroundImage: `url(${tour.imageUrl})` }}
            >
                <div className="container mx-auto px-6 text-center py-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        {tour.name}
                    </h1>
                </div>
            </section>

            {/* Tour Details */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-primary-800 mb-6">
                                Description
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {tour.description}
                            </p>

                            <div className="mt-10">
                                <h3 className="text-2xl font-bold text-primary-800 mb-4">
                                    Tour Highlights
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Stunning views of the Himalayas</li>
                                    <li>Cultural immersion in local villages</li>
                                    <li>Challenging and rewarding trek</li>
                                    <li>Experienced and friendly guides</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-primary-800 mb-6">
                                Tour Details
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="font-semibold text-gray-600">
                                        Duration:
                                    </span>
                                    <span className="text-gray-800">
                                        {tour.duration}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold text-gray-600">
                                        Difficulty:
                                    </span>
                                    <span className="text-gray-800">
                                        {tour.difficulty}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold text-gray-600">
                                        Price:
                                    </span>
                                    <span className="text-green-600 font-bold text-xl">
                                        {tour.price}
                                    </span>
                                </div>
                            </div>
                            <Link to="/contact" className="mt-8 w-full block text-center bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TourDetailPage;
