
import React from 'react';
import type { Page } from '../types';
import Hero from '../components/Home/Hero';
import FeaturedJourneys from '../components/Home/FeaturedJourneys';
import ResponsibleTravel from '../components/Home/ResponsibleTravel';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Testimonial from '../components/Home/Testimonial';
import Memberships from '../components/Home/Memberships';

interface HomePageProps {
    setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
    return (
        <div>
            <Hero />
            <FeaturedJourneys setCurrentPage={setCurrentPage} />
            <WhyChooseUs />
            <ResponsibleTravel />
            <Testimonial />
            <Memberships />
        </div>
    );
};

export default HomePage;