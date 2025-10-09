import React from 'react';
import HeroSection from '../Components/HeroSection';
import TrustedBy from '../Components/TrustedBy';
import AppCard from '../Components/AppCard';
import TrendingApp from '../Components/TrendingApp';
import useAppDetails from '../Hooks/useAppDetails';
import Loading from '../Components/Loading';

const Home = () => {

     const {  loading } = useAppDetails();

        if (loading) return <Loading />


    return (
        <div>
            <HeroSection />
            <TrustedBy />
            <TrendingApp />

        </div>
    );
};

export default Home;