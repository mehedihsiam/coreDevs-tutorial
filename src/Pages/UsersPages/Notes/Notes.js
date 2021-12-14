import { Grid, Container, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Note from './Note/Note';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../../../hooks/useAuth';


const Notes = () => {
    const { currentUser } = useAuth();
    const [notes, setNotes] = useState([])
    useEffect(() => {
        fetch(`https://vast-stream-90795.herokuapp.com/notes?email=${currentUser}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])
    return (
        <>
            <Container>

                <Grid container spacing={2} sx={{ justifyContent: 'space-around', my: 4 }}>
                    {
                        notes.map(note => <Note
                            key={note._id}
                            noteBody={note}
                            notes={notes}
                            setNotes={setNotes}
                        ></Note>)
                    }
                </Grid>
                <Button variant="outlined">
                    <Link to='/addNote' className='link'>Add Note <FontAwesomeIcon icon={faPlus} /></Link>
                </Button>
            </Container >
        </>
    );
};

export default Notes;