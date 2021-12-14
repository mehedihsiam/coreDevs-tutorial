import { Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ width: '100%', backgroundColor: 'black', p: 2, textAlign: 'center', color: 'white' }}>
            All righhts recieved &copy; <a href="https://coredevs-tutorial.web.app/">CoreDevs ltd</a> || 2021
        </Box>
    );
};

export default Footer;