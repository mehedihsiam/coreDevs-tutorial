import React from 'react';
import Header from '../../Shared/Header/Header';
import AboutUs from './AboutUs/AboutUs';
import HomeSubs from './HomeSubs/HomeSubs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <HomeSubs></HomeSubs>
        </div>
    );
};

export default Home;