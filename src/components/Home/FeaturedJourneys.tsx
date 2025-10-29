import React from 'react';
import type { Page, Tour } from '../../types';
import { packages, convertPackagesToTours } from '../../data/data';
import FeaturedTourCard from './FeaturedTourCard';

interface FeaturedJourneysProps {
    setCurrentPage: (page: Page) => void;
}

const FeaturedJourneys: React.FC<FeaturedJourneysProps> = ({ setCurrentPage }) => {
    const tours: Tour[] = convertPackagesToTours(packages);
    const featured = tours.slice(0, 3);
    return (
        <section className="bg-gray-50 py-16 sm:py-20" aria-labelledby="featured-journeys-title">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 id="featured-journeys-title" className="text-3xl sm:text-4xl font-bold text-[#1a2336] mb-4">Featured Journeys</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">Explore our most sought-after experiences, curated for the ultimate Himalayan adventure.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list" aria-label="Featured journeys">
                    {featured.map((tour: Tour) => (
                        <div key={tour.id} role="listitem">
                            <FeaturedTourCard tour={tour} />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12 sm:mt-16">
                    <button 
                        onClick={() => setCurrentPage('tours')} 
                        className="bg-[#83bf48] hover:bg-[#7ab440] text-white font-bold py-3.5 px-8 rounded-lg text-base sm:text-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                        aria-label="View all journeys"
                    >
                        View All Journeys
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedJourneys;