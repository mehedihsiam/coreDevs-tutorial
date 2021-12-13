import React from 'react';
import { Button, TableCell, TableRow } from '@mui/material';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const SingleSubsList = ({ singleSubs, subs, setSubs }) => {
    const subsDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete this subscription?')
        if (proceed) {
            fetch(`https://vast-stream-90795.herokuapp.com/subscriptions/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('Deleted this subscription')
                        const remainingSubs = subs.filter(singleSubscription => singleSubscription._id !== id)
                        setSubs(remainingSubs);
                    }
                })
        }
    }

    const { subscriptionTitle, subscriptionFee, subscriptionDetail, _id } = singleSubs;
    return (
        <TableRow>
            <TableCell>{subscriptionTitle}</TableCell>
            <TableCell>{subscriptionDetail.slice(0, 70)}...</TableCell>
            <TableCell>$ {subscriptionFee}</TableCell>
            <TableCell align="right">
                <Button sx={{ m: 1 }}>
                    <Link className='link' to={`/subscriptions/edit/${_id}`}>
                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                    </Link>
                </Button>
                <Button sx={{ m: 1, color: 'red' }} onClick={() => subsDelete(_id)}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </Button>
            </TableCell>
        </TableRow>
    );
};

export default SingleSubsList;