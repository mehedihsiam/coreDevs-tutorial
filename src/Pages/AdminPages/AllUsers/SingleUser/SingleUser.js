import { Button, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SingleUser = ({ user, users, setUsers }) => {

    const userDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete thib user?')
        if (proceed) {
            fetch(`https://vast-stream-90795.herokuapp.com/allUsers/${id}`, {
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
                <Button sx={{ m: 1 }}>
                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                </Button>
                <Button sx={{ m: 1 }} onClick={() => userDelete(_id)}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </Button>
            </TableCell>
        </TableRow>
    );
};

export default SingleUser;