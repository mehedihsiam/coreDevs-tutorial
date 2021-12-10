import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Note from './Note/Note';

const Notes = () => {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])
    return (
        <Container>
            {
                notes.map(note => <Note
                    key={note._id}
                    noteBody={note}
                ></Note>)
            }
            <Link to='/addNote'>+</Link>
        </Container>
    );
};

export default Notes;