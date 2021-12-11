import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleUser from './SingleUser/SingleUser';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allUsers')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
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
                    {
                        users.map(user => <SingleUser
                            key={user._id}
                            user={user}
                            users={users}
                            setUsers={setUsers}
                        ></SingleUser>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AllUsers;