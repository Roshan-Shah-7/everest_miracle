import React, { useState } from 'react';
import type { Tour } from '../../types';

const FeaturedTourCard: React.FC<{ tour: Tour }> = ({ tour }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100 transform hover:-translate-y-1" aria-labelledby={`tour-title-${tour.id}`}>
            <div className="relative h-56 overflow-hidden">
                {!imageLoaded && !imageError && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 8h14v7H5z" />
                            <path d="M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm11.78 4.54l-1.3 6.22H9.44l-1.4-5.2-1.32 4.2-1.1-6.5h10.86l.12.8z" />
                        </svg>
                    </div>
                )}
                <img 
                    src={tour.imageUrl} 
                    id={`tour-img-${tour.id}`}
                    alt={tour.name} 
                    className={`w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${imageError ? 'hidden' : 'block'}`}
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    aria-describedby={`tour-desc-${tour.id}`}
                />
                {imageError && (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm11.78 4.54l-1.3 6.22H9.44l-1.4-5.2-1.32 4.2-1.1-6.5h10.86l.12.8z" />
                        </svg>
                    </div>
                )}
                <div className="absolute top-4 left-4 bg-[#83bf48] text-white text-xs font-semibold px-3 py-1.5 rounded-full opacity-90 group-hover:opacity-100 transition-opacity">
                    {tour.category}
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <div className="p-5 flex flex-col grow">
                <h3 id={`tour-title-${tour.id}`} className="text-xl font-bold text-[#1a2336] mb-2.5 line-clamp-2 group-hover:text-[#83bf48] transition-colors">{tour.name}</h3>
                <p id={`tour-desc-${tour.id}`} className="text-gray-600 mb-4 text-sm grow line-clamp-3">{tour.shortDescription}</p>
                <div className="mt-auto pt-3">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-[#1a2336] group-hover:text-[#83bf48] transition-colors">${tour.price.toLocaleString()}</span>
                        <div className="flex items-center text-amber-500" aria-label="4.9 star rating">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <span className="ml-1 text-sm font-medium sr-only">4.9 rating</span>
                            <span aria-hidden="true">4.9</span>
                        </div>
                    </div>
                    <button 
                        className="w-full bg-[#83bf48] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#7ab440] transition-colors duration-200 flex items-center justify-center group/btn"
                        aria-describedby={`tour-title-${tour.id}`}
                    >
                        <span className="group-hover/btn:mr-1 transition-all">View Details</span>
                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    );
};

export default FeaturedTourCard;