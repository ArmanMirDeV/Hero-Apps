import React from 'react';
import HeroSection from '../Components/HeroSection';
import TrustedBy from '../Components/TrustedBy';
import AppCard from '../Components/AppCard';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <TrustedBy />
            <AppCard></AppCard>     
        </div>
    );
};

export default Home;