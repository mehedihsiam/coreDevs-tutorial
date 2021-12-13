import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleSubs = ({ subscription }) => {
    const { subscriptionTitle, subscriptionFee, subscriptionDetail, _id } = subscription;
    return (
        <>
            <Card sx={{ maxWidth: 345, my: 2 }}>
                <CardHeader
                    title={subscriptionTitle}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {subscriptionDetail}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <Link to={`/Subscriptions/${_id}`} className='link'>Buy</Link>
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default SingleSubs;