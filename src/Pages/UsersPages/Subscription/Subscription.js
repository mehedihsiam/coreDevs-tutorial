import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleSubs from './SingleSubs/SingleSubs';
import Navbar from '../../../Shared/Header/Navbar/Navbar'

const Subscription = () => {
    const [subscriptions, setSubscriptions] = useState([])
    useEffect(() => {
        fetch('https://vast-stream-90795.herokuapp.com/subscriptions')
            .then(res => res.json())
            .then(data => setSubscriptions(data))
    }, [])

    return (
        <>
            <Navbar></Navbar>
            <Container>
                <Grid container spacing={2} sx={{ justifyContent: 'space-around', mb: 5 }}>
                    {
                        subscriptions.map(subscription => <SingleSubs
                            key={subscription._id}
                            subscription={subscription}
                        ></SingleSubs>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default Subscription;