import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './AboutUs.css'


const AboutUs = () => {
    return (
        <Box sx={{ my: 4 }}>
            <Typography
                className='color-b'
                sx={{ textAlign: 'center' }}
                variant='h4'
                my={2}
            >About Us</Typography>
            <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ m: 2, width: '45%' }}>
                    <img className='aboutUsImg' src="https://i.ibb.co/y4d4kgq/aboutUs.png" alt="" />
                </Box>
                <Box sx={{ m: 2, width: '45%', alignItems: 'center', display: 'flex' }}>
                    <Typography>
                        CoreDevs Tutorial is a product of CoreDevs Ltd. The main goal of us is make easy the of learning for everybody. That's why we made the product to take notes for mostly students. Anybody can use this service, but it's made for specially students.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default AboutUs;