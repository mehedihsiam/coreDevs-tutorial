import { Button, TableCell, TableRow } from '@mui/material';
import React from 'react';

const SingleUser = ({ user, users, setUsers }) => {

    const userDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete thib user?')
        if (proceed) {
            fetch(`http://localhost:5000/allUsers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted this user')
                        const remainingUsers = users.filter(singleUser => singleUser._id !== id)
                        setUsers(remainingUsers);
                    }
                })
        }
    }
    const { name, email, _id } = user;
    return (
        <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell align="right">
                <Button sx={{ m: 1 }}>Edit</Button>
                <Button sx={{ m: 1 }} onClick={() => userDelete(_id)}>Delete</Button>
            </TableCell>
        </TableRow>
    );
};

export default SingleUser;