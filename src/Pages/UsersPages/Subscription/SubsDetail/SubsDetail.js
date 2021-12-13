import { Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Progress from '../../../../Progress/Progress';
import Navbar from '../../../../Shared/Header/Navbar/Navbar';
import Payment from '../../Payment/Payment';

const SubsDetail = () => {
    const { id } = useParams();
    const [loadedSubs, setLoadedSubs] = useState();

    useEffect(() => {
        fetch(`https://vast-stream-90795.herokuapp.com/subscriptions/${id}`)
            .then(res => res.json())
            .then(data => setLoadedSubs(data))
    }, [])
    return (
        <>
            <Navbar></Navbar>
            {
                loadedSubs ?
                    <Box minHeight={500} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Card sx={{ maxWidth: 345, my: 2 }}>
                            <CardHeader
                                title={loadedSubs.subscriptionTitle}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {loadedSubs.subscriptionDetail}
                                </Typography>
                                <Typography className='color-a' variant="h5" sx={{ fontWeight: 'bold' }}>
                                    Fee: $ {loadedSubs.subscriptionFee}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                Pay with
                                <Button>
                                    <Payment
                                        key={loadedSubs._id}
                                        fee={loadedSubs.subscriptionFee}
                                    ></Payment>
                                </Button>
                            </CardActions>
                        </Card>
                    </Box >
                    :
                    <Progress></Progress>
            }
        </>
    );
};

export default SubsDetail;