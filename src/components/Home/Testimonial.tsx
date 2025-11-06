import { useState } from 'react';
import { Link } from 'react-router-dom';

const Testimonial: React.FC = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            quote: "An absolutely unforgettable journey. The attention to detail, the expertise of our guide, and the breathtaking scenery surpassed all expectations. This wasn't just a trip; it was a life-changing experience.",
            author: "Alexander Hamilton",
            location: "USA",
            rating: 5,
            trip: "Everest Base Camp Trek"
        },
        {
            id: 2,
            quote: "The team at Everest Miracle made our Annapurna Circuit trek seamless and magical. Their local knowledge and commitment to safety gave us complete peace of mind throughout the adventure.",
            author: "Sarah Chen",
            location: "Canada",
            rating: 5,
            trip: "Annapurna Circuit"
        },
        {
            id: 3,
            quote: "As a solo female traveler, I felt incredibly safe and well-cared for. The guides were professional, the accommodations were comfortable, and the views were absolutely worth every step!",
            author: "Maria Rodriguez",
            location: "Spain",
            rating: 5,
            trip: "Langtang Valley Trek"
        },
        {
            id: 4,
            quote: "Our family trek with Everest Miracle was perfectly organized. They accommodated our children's pace and made the experience educational and fun for everyone. Highly recommended!",
            author: "The Johnson Family",
            location: "Australia",
            rating: 5,
            trip: "Family Trek to Poon Hill"
        },
        {
            id: 5,
            quote: "The cultural immersion and responsible tourism practices set Everest Miracle apart. We felt we were genuinely contributing to the local communities while having the adventure of a lifetime.",
            author: "James Wilson",
            location: "UK",
            rating: 5,
            trip: "Manaslu Circuit Trek"
        }
    ];

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index: number) => {
        setActiveTestimonial(index);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section className="relative py-20 bg-primary-900 text-white overflow-hidden">
            {/* Background with reduced opacity */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
                style={{ backgroundImage: "url('/assets/home/heroSlider2.webp')" }}
            ></div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80"></div>

            <div className="relative container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-logo-green/20 text-logo-green rounded-full text-sm font-medium mb-4 border border-logo-green/30">
                        Testimonials
                    </span>
                    <h2 className="text-4xl font-bold mb-4">What Our Adventurers Say</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Don't just take our word for it. Read about the experiences of travelers who have explored Nepal with us.
                    </p>
                </div>

                {/* Main Testimonial Carousel */}
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/10 shadow-2xl">
                        <div className="text-center mb-8">
                            <div className="flex justify-center mb-4">
                                {renderStars(testimonials[activeTestimonial].rating)}
                            </div>
                            <span className="inline-block px-3 py-1 bg-logo-green/20 text-logo-green text-sm rounded-full">
                                {testimonials[activeTestimonial].trip}
                            </span>
                        </div>
                        
                        <blockquote className="text-center mb-8">
                            <p className="text-2xl sm:text-3xl italic leading-relaxed text-white font-light">
                                "{testimonials[activeTestimonial].quote}"
                            </p>
                        </blockquote>

                        <footer className="text-center">
                            <p className="text-xl font-semibold text-white mb-1">
                                {testimonials[activeTestimonial].author}
                            </p>
                            <p className="text-gray-300">
                                {testimonials[activeTestimonial].location}
                            </p>
                        </footer>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex justify-center mt-8 space-x-4">
                        <button
                            onClick={prevTestimonial}
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        {/* Dots Indicator */}
                        <div className="flex items-center space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === activeTestimonial 
                                        ? 'bg-logo-green scale-125' 
                                        : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Additional Testimonials Grid */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-center mb-12">More Happy Travelers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.slice(0, 3).map((testimonial, index) => (
                            <div 
                                key={testimonial.id} 
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-logo-green/30 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer"
                                onClick={() => goToTestimonial(index)}
                            >
                                <div className="flex mb-4">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <p className="text-gray-300 italic mb-4 line-clamp-4">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold text-white">{testimonial.author}</p>
                                        <p className="text-sm text-gray-400">{testimonial.location}</p>
                                    </div>
                                    <span className="px-2 py-1 bg-logo-green/20 text-logo-green text-xs rounded-full">
                                        {testimonial.trip}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-linear-to-r from-logo-green/10 to-transparent p-8 rounded-2xl border border-logo-green/20 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">Ready to Create Your Own Story?</h3>
                        <p className="text-gray-300 mb-6">
                            Join thousands of satisfied travelers and experience the adventure of a lifetime.
                        </p>
                        <Link to="/tours" className="px-8 py-3 bg-logo-green text-white font-semibold rounded-lg hover:bg-logo-green-dark transition-all duration-300 transform hover:scale-105">
                            Start Your Journey Today
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;