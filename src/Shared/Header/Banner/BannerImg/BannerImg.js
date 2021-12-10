import { Box } from '@mui/material';
import React from 'react';
import './BannerImg.css'
const BannerImg = () => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <img className='banner' src="https://i.ibb.co/z5X5fVF/banner.png" alt="" />
        </Box>
    );
};

export default BannerImg;