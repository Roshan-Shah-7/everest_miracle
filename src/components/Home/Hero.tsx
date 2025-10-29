import React, { useState, useEffect, useCallback, useMemo } from 'react';
import BookingWidget from './BookingWidget'; // Assuming this component exists

const slides = [
    {
        imageUrl: "/assets/home/heroSlider1.webp",
        title: "Exploring The World In Comfort",
        description: "Experience unparalleled comfort and breathtaking scenery on our bespoke journeys.",
    },
    {
        imageUrl: "/assets/home/heroSlider2.webp",
        title: "Reach New Heights With Us",
        description: "Our expert guides will lead you safely through the most majestic landscapes on Earth.",
    },
    {
        imageUrl: "/assets/home/heroSlider3.webp",
        title: "Your Adventure Awaits",
        description: "Discover hidden trails, vibrant cultures, and the adventure of a lifetime.",
    },
];

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

    const nextSlide = useCallback(() => {
        if (isTransitioning) return; // Prevent triggering during transition
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
            setIsTransitioning(false);
        }, 500); // Match the transition duration
    }, [isTransitioning]);

    const goToSlide = (index: number) => {
        if (index === currentSlide || isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide(index);
            setIsTransitioning(false);
        }, 500); // Match the transition duration
    };

    const handleImageLoad = (index: number) => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    // Preload images for better performance
    useEffect(() => {
        slides.forEach((slide, index) => {
            const img = new Image();
            img.onload = () => handleImageLoad(index);
            img.src = slide.imageUrl.trim(); // Trim whitespace
        });
    }, []);

    // Add performance optimization to prevent unnecessary re-renders
    const memoizedSlides = useMemo(() => slides.map((slide, index) => (
        <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            aria-hidden={index !== currentSlide ? "true" : "false"}
        >
            {!loadedImages[index] && (
                <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
            )}
            <img
                src={slide.imageUrl.trim()}
                alt={slide.title}
                className={`w-full h-full object-cover ${loadedImages[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{
                    transform: `scale(${index === currentSlide ? 1 : 1.1})`,
                    transition: 'opacity 1s ease-in-out, transform 8s ease-in-out',
                }}
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
            />
        </div>
    )), [currentSlide, loadedImages]);

    return (
        <section
            className="relative pt-12 pb-16 md:pt-16 md:pb-20 lg:pb-32 min-h-screen flex items-center justify-center"
            role="banner"
            aria-label="Hero section with slideshow"
        >
            {/* Background Slides with Parallax Effect */}
            <div className="absolute inset-0 overflow-hidden">
                {memoizedSlides}

                {/* Corrected Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"
                    aria-hidden="true"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                    {/* Hero Content */}
                    <div className="text-white space-y-4 sm:space-y-6 z-20" aria-live="polite"> {/* Improved spacing */}
                        {/* Animated Text Content */}
                        <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                                        ? 'opacity-100 translate-y-0 z-10'
                                        : 'opacity-0 translate-y-8 pointer-events-none' // Hide non-active slides from interaction
                                        }`}
                                    aria-hidden={index !== currentSlide}
                                >
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-2 sm:mb-4 tracking-tight font-sans text-white drop-shadow-lg">
                                        {slide.title.split(' ').map((word, wordIndex) => (
                                            <span
                                                key={wordIndex}
                                                className="inline-block transition-transform duration-700 ease-out"
                                                style={{
                                                    transitionDelay: `${wordIndex * 100}ms`,
                                                    transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                                                }}
                                            >
                                                {word}&nbsp;
                                            </span>
                                        ))}
                                    </h1>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl font-sans drop-shadow">
                                        {slide.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
                            <button
                                className="bg-[#83bf48] text-[#1a2336] font-bold py-2.5 sm:py-3 px-4 sm:px-6 md:py-4 md:px-8 rounded-lg hover:bg-[#97cc52] transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg font-sans"
                                aria-label="Explore our tour packages"
                            >
                                Explore Tours
                            </button>
                            <button
                                className="border-2 border-white text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 md:py-4 md:px-8 rounded-lg hover:bg-white hover:text-[#1a2336] transform hover:scale-105 transition-all duration-300 cursor-pointer text-sm sm:text-base md:text-lg font-sans"
                                aria-label="Learn more about our services"
                            >
                                Learn More
                            </button>
                        </div>

                        {/* Slider Dots - Enhanced */}
                        <div className="flex space-x-2 sm:space-x-3 pt-3 sm:pt-4" role="tablist">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`relative group cursor-pointer transition-all duration-300 ${currentSlide === index ? 'w-10 sm:w-12' : 'w-6 sm:w-8'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                    aria-current={currentSlide === index ? "true" : "false"}
                                    disabled={isTransitioning}
                                    role="tab"
                                >
                                    <div
                                        className={`h-1 rounded-full transition-all duration-500 ${currentSlide === index
                                            ? 'bg-[#83bf48]'
                                            : 'bg-white/50 group-hover:bg-white/80'
                                            }`}
                                    />
                                    <div className="absolute -top-2 -bottom-2 -left-2 -right-2 rounded-lg group-hover:bg-white/10 transition-colors duration-300" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Booking Widget - Enhanced styling */}
                    <div className="relative z-20 w-full max-w-full sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
                            <BookingWidget />
                        </div>
                    </div>
                </div>

            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:block z-20"> {/* Added z-20 */}
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
                className="absolute left-2 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2.5 sm:p-3 md:p-4 rounded-full transition-all duration-300 cursor-pointer z-20 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label="Previous slide"
                disabled={isTransitioning}
                type="button"
            >
                <svg className="w-4 sm:w-5 h-4 sm:h-5 md:w-6 md:h-6 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2.5 sm:p-3 md:p-4 rounded-full transition-all duration-300 cursor-pointer z-20 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label="Next slide"
                disabled={isTransitioning}
                type="button"
            >
                <svg className="w-4 sm:w-5 h-4 sm:h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </section>
    );
};

export default React.memo(Hero);