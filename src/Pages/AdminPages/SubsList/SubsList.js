import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import SingleSubsList from './SingleSubsList/SingleSubsList';


const SubsList = () => {
    const [subs, setSubs] = useState([])
    useEffect(() => {
        fetch('https://vast-stream-90795.herokuapp.com/subscriptions')
            .then(res => res.json())
            .then(data => setSubs(data))
    }, [])
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Detail</TableCell>
                        <TableCell>Fee</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        subs.map(singleSubs => <SingleSubsList
                            key={subs._id}
                            singleSubs={singleSubs}
                            subs={subs}
                            setSubs={setSubs}
                        ></SingleSubsList>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SubsList;