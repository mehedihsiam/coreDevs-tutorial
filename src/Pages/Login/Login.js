import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const location = useLocation()
    const url = location.state?.from || '/';


    const [user, setUser] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://vast-stream-90795.herokuapp.com/userLogin', data)
            .then(result => {
                const idToken = result.data.accessToken;
                localStorage.setItem('idToken', idToken)
                if (result.status === 200) {
                    fetch(`https://vast-stream-90795.herokuapp.com/users?email=${data.email}`)
                        .then(res => res.json())
                        .then(data => {
                            setUser(data)
                            history.push(url)
                        })
                    alert('Login Successful')
                    reset();
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        sessionStorage.setItem('email', user[0].email)
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