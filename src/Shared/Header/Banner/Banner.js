import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import BannerImg from './BannerImg/BannerImg';
import BannerText from './BannerText/BannerText';

const Banner = () => {
    return (
        <Box>
            <Container>
                <Grid sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
                    <Grid xs={12} md={6} >
                        <BannerText></BannerText>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <BannerImg></BannerImg>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;