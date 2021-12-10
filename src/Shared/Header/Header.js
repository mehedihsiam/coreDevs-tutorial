import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <header>
            <Navbar></Navbar>
            <Banner></Banner>
        </header>
    );
};

export default Header;