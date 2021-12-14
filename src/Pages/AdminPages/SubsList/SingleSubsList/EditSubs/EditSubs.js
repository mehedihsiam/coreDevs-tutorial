import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Progress from '../../../../../Progress/Progress';

const EditSubs = () => {
    const { id } = useParams();
    const [loadedSubs, setLoadedSubs] = useState();

    useEffect(() => {
        fetch(`https://vast-stream-90795.herokuapp.com/subscriptions/${id}`)
            .then(res => res.json())
            .then(data => setLoadedSubs(data))
    }, [])



    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch(`https://vast-stream-90795.herokuapp.com/subscriptions/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Updated this note")
                }
            })

    };
    return (
        <Box sx={{ width: { xs: '100%', md: '30%' }, mx: 'auto', py: 4, textAlign: 'center' }}>
            {
                loadedSubs ? <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register("subscriptionTitle")}
                        sx={{ width: '100%' }}
                        label="Title"
                        variant="outlined"
                        defaultValue={loadedSubs?.subscriptionTitle}
                    />
                    <br /><br />
                    <TextField
                        {...register("subscriptionFee")}
                        sx={{ width: '100%' }}
                        label="Fee"
                        variant="outlined"
                        defaultValue={loadedSubs?.subscriptionFee}
                    />
                    <br /><br />
                    <TextField
                        label="Details"
                        multiline
                        rows={4}
                        sx={{ width: '100%' }}
                        defaultValue={loadedSubs?.subscriptionDetail}
                        {...register("subscriptionDetail")}
                    />
                    <br /><br />
                    <Button type="submit" variant="contained">Update</Button>
                </form>
                    :
                    <Progress></Progress>
            }
        </Box>
    );
};

export default EditSubs;