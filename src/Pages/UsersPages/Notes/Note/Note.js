import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Note = ({ noteBody, notes, setNotes }) => {
    const noteDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete this note?')
        if (proceed) {
            fetch(`https://vast-stream-90795.herokuapp.com/notes/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted this note')
                        const remainingNotes = notes.filter(singleNote => singleNote._id !== id)
                        setNotes(remainingNotes);
                    }
                })
        }
    }
    const { noteTitle, note, noteDate, _id } = noteBody;

    return (
        <Card sx={{ maxWidth: 345, my: 2 }}>
            <CardHeader
                title={noteTitle}
                subheader={noteDate}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {note}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <Link to={`/notes/${_id}`} className='link'><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link>
                </Button>
                <Button size="small" onClick={() => noteDelete(_id)}>
                    <Typography sx={{ color: 'red' }}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    );
};

export default Note;