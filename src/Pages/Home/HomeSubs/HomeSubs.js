import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import HomeSingleSubs from './HomeSingleSubs/HomeSingleSubs';



const HomeSubs = () => {
    const [subscriptions, setSubscriptions] = useState([])
    useEffect(() => {
        fetch('https://vast-stream-90795.herokuapp.com/subscriptions')
            .then(res => res.json())
            .then(data => setSubscriptions(data))
    }, [])

    const homeSubs = subscriptions.slice(0, 3)

    return (
        <Box sx={{ my: 4 }}>
            <Typography
                className='color-b'
                sx={{ textAlign: 'center' }}
                variant='h4'
                my={4}
            >Subscriptions</Typography>
            <Container>
                <Grid container spacing={2} sx={{ justifyContent: 'space-around', mb: 5 }}>
                    {
                        homeSubs.map(subscription => <HomeSingleSubs
                            key={subscription._id}
                            subscription={subscription}
                        ></HomeSingleSubs>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeSubs;