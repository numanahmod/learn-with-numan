import React from 'react';
import Hero from '../components/homepage/hero/Hero';
import Features from '../components/homepage/features/Features';
import PopularCourses from '../components/homepage/popularCourses/PopularCourses';
import Testimonials from '../components/homepage/testimonial/Testimonials';
import Newsletter from '../components/homepage/newsletter/Newsletter';

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <Features/>
            <PopularCourses/>
            <Testimonials/>
            <Newsletter/>
            
        </div>
    );
};

export default HomePage;