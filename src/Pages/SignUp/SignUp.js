import { Box, Button, Input, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('password', data.password)
        formData.append('image', data.image[0])
        console.log(data.image[0])

        fetch('https://vast-stream-90795.herokuapp.com/userReg', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Registered Successful')
                    reset();
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    return (
        <Box sx={{ width: { xs: '100%', md: '30%' }, mx: 'auto', py: 4, textAlign: 'center' }}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <TextField required label="Name" variant="outlined" {...register("name")} sx={{ width: '100%' }} />
                <br /><br />
                <TextField required label="Email" variant="outlined" type="email" {...register("email")} sx={{ width: '100%' }} />
                <br /><br />
                <TextField required label="Password" variant="outlined" type="password" {...register("password")} sx={{ width: '100%' }} />
                <br /><br />
                <Input accept="image/*" id="contained-button-file" type="file" {...register("image")} />
                <br /><br />
                <Button type='submit' variant='contained'>Register</Button>
            </form>
            <Typography>
                Already have an account?
                <Link to="/Login"> Please Log In</Link>
            </Typography>
        </Box>
    );
};

export default SignUp;