import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Header/Navbar/Navbar';



const Profile = () => {
    const { currentUser } = useAuth();
    const [profile, setProfile] = useState([])
    useEffect(() => {
        fetch(`https://vast-stream-90795.herokuapp.com/profile?email=${currentUser}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [])


    const userDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete your account?')
        if (proceed) {
            fetch(`https://vast-stream-90795.herokuapp.com/allUsers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('Account Deleted')
                    }
                })
        }
    }
    return (
        <>
            <Navbar></Navbar>
            <Container sx={{ my: 5 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{profile[0]?.name}</TableCell>
                                <TableCell>{profile[0]?.email}</TableCell>
                                <TableCell align="right">
                                    <Button sx={{ m: 1 }}>
                                        <Link className='link' to={`/myProfile/edit/${profile[0]?._id}`}>
                                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        </Link>
                                    </Button>
                                    <Button sx={{ m: 1, color: 'red' }} onClick={() => userDelete(profile[0]?._id)}>
                                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default Profile;