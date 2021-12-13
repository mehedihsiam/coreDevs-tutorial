import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import './BannerText.css'

const BannerText = () => {
    return (
        <Box>
            <Typography
                variant='h4' sx={{ display: 'inline' }} className='color-a'
            >Welcome to</Typography>
            <Typography className='color-b' variant='h4' sx={{ display: 'inline' }}>
                <Typewriter
                    options={{
                        strings: [
                            'CoreDevs Tutorial',
                            'The Most Trusted Partner'
                        ],
                        autoStart: true,
                        loop: true,
                    }}

                />
            </Typography>
            <Typography sx={{ my: 2 }}>
                CoreDevs Tutorial is a to do Application. You may take some notes by using our application.
            </Typography>
            <Button variant='outlined'><Link className='link' to="/addNote">Create a Note</Link></Button>
        </Box>
    );
};

export default BannerText;