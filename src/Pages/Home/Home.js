import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutUs from './AboutUs/AboutUs';
import HomeSubs from './HomeSubs/HomeSubs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <HomeSubs></HomeSubs>
            <Footer></Footer>
        </div>
    );
};

export default Home;