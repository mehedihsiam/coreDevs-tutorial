import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Progress from '../../Progress/Progress';

const EditProfile = () => {
    const history = useHistory();
    const location = useLocation()
    const url = location.state?.from || '/myProfile';
    const { id } = useParams();
    const [loadedUser, setLoadedUser] = useState();

    useEffect(() => {
        fetch(`https://vast-stream-90795.herokuapp.com/users/${id}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setLoadedUser(data))
    }, [])
    console.log(loadedUser)



    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch(`https://vast-stream-90795.herokuapp.com/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Updated")
                    history.push(url);
                }
            })

    };
    return (
        <Box sx={{ width: { xs: '100%', md: '30%' }, mx: 'auto', py: 4, textAlign: 'center' }}>
            {
                loadedUser ? <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register("name")}
                        sx={{ width: '100%' }}
                        label="Name"
                        variant="outlined"
                        defaultValue={loadedUser?.name}
                    />
                    <br /><br />
                    <TextField
                        {...register("email")}
                        sx={{ width: '100%' }}
                        label="Email"
                        variant="outlined"
                        defaultValue={loadedUser?.email}
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

export default EditProfile;