import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/userLogin', data)
            .then(result => {
                const idToken = result.data.accessToken;
                localStorage.setItem('idToken', idToken)
                console.log(result);
                if (result.status === 200) {
                    fetch(`http://localhost:5000/users?email=${data.email}`)
                        .then(res => res.json())
                        .then(data => setUser(data))
                    alert('Login Successful')
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

                <TextField required label="Email" variant="outlined" type="email" {...register("email")} sx={{ width: '100%' }} />
                <br /><br />
                <TextField required label="Password" variant="outlined" type="password" {...register("password")} sx={{ width: '100%' }} />
                <br /><br />
                <Button type='submit' variant='contained'>Login</Button>
            </form>
            <Typography>
                New to CoreDevs Tuitorial?
                <Link to="/SignUp">Sign Up</Link>
                <p>{user[0]?.name}</p>
            </Typography>

        </Box>
    );
};

export default Login;