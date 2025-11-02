
import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturedJourneys from '../components/Home/FeaturedJourneys';
import ResponsibleTravel from '../components/Home/ResponsibleTravel';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Testimonial from '../components/Home/Testimonial';
import Memberships from '../components/Home/Memberships';

const HomePage: React.FC = () => {
    return (
        <div>
            <Hero />
            <FeaturedJourneys />
            <WhyChooseUs />
            <ResponsibleTravel />
            <Testimonial />
            <Memberships />
        </div>
    );
};

export default HomePage;