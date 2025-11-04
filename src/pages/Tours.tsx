import React from 'react';
import { packages } from '../data/data';
import FeaturedTourCard from '../components/Home/FeaturedTourCard';
import type { Package } from '../data/types';

const ToursPage: React.FC = () => {
    const tours: Package[] = packages;

    return (
        <div className="bg-gray-50 pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-primary-700 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Our Tours
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        Explore our curated selection of tours and treks in the Himalayas. From the iconic Everest Base Camp to the serene Annapurna Circuit, we have an adventure for everyone.
                    </p>
                </div>
            </section>

            {/* Tours Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tours.map((tour) => (
                            <FeaturedTourCard key={tour.id} tour={tour} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ToursPage;