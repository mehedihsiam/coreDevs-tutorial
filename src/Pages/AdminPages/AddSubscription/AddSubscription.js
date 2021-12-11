import React from 'react';
import { Button, Link, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddSubscription = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://vast-stream-90795.herokuapp.com/subscriptions', data)
            .then(res => {
                if (res.status === 200) {
                    alert('Subscription Added Succesfully')
                    reset()
                }
            })
    };



    return (
        <Box sx={{ width: { xs: '100%', md: '30%' }, mx: 'auto', py: 4, textAlign: 'center' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register("subscriptionTitle")} sx={{ width: '100%' }} label="Name" variant="outlined" />
                <br /><br />
                <TextField type='number' {...register("subscriptionFee")} sx={{ width: '100%' }} label="Price" variant="outlined" />
                <br /><br />
                <TextField
                    label="Details"
                    multiline
                    rows={4}
                    sx={{ width: '100%' }}
                    {...register("subscriptionDetail")}
                />
                <br /><br />
                <Button type="submit" variant="contained">Create</Button>
            </form>
            <Button sx={{ m: 1 }} variant="outlined">
                <Link className="link" to="/Dashboard/notes">Back</Link>
            </Button>
        </Box>
    );
};

export default AddSubscription;