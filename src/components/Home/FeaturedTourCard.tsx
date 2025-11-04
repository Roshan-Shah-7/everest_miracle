import React from 'react';
import { Link } from 'react-router-dom';
import type { Package } from '../../data/types';

interface FeaturedTourCardProps {
    tour: Package;
}

const FeaturedTourCard: React.FC<FeaturedTourCardProps> = ({ tour }) => {
    return (
        <Link to={`/tour/${tour.id}`} className="block group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-56">
                    <img
                        src={tour.imageUrl}
                        alt={tour.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {tour.duration}
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-800 mb-2 truncate">
                        {tour.name}
                    </h3>
                    <p className="text-gray-600 mb-4 h-12 overflow-hidden">
                        {tour.description}
                    </p>
                    <div className="flex justify-between items-center">
                        <div className="text-lg font-bold text-green-600">
                            {tour.price}
                        </div>
                        <div className="text-primary-500 font-semibold group-hover:text-primary-600 transition-colors duration-300">
                            View Details &rarr;
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FeaturedTourCard;