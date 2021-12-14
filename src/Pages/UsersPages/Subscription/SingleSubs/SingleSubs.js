import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleSubs = ({ subscription }) => {
    const { subscriptionTitle, subscriptionFee, subscriptionDetail, _id } = subscription;
    return (
        <>
            <Card sx={{ maxWidth: 345, my: 2, textAlign: 'center' }}>
                <CardHeader
                    title={subscriptionTitle}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {subscriptionDetail}
                    </Typography>
                    <Typography variant="h5" className='color-a'>
                        Fee: $ {subscriptionFee}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='contained' sx={{ width: '100%' }}>
                        <Link to={`/Subscriptions/${_id}`} className='link-b'>Buy</Link>
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default SingleSubs;