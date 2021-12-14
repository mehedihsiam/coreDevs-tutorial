import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const EditNotes = () => {
    const history = useHistory();
    const location = useLocation()
    const url = location.state?.from || '/Dashboard/myNotes';
    const { id } = useParams();
    const [loadedNote, setLoadedNote] = useState();

    useEffect(() => {
        fetch(`https://vast-stream-90795.herokuapp.com/notes/${id}`)
            .then(res => res.json())
            .then(data => setLoadedNote(data))
    }, [])
    console.log(loadedNote)



    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch(`https://vast-stream-90795.herokuapp.com/notes/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Updated this note")
                    history.push(url);
                }
            })

    };
    return (
        <Box sx={{ width: { xs: '100%', md: '30%' }, mx: 'auto', py: 4, textAlign: 'center' }}>
            {
                loadedNote ? <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register("noteTitle")}
                        sx={{ width: '100%' }}
                        label="Title"
                        variant="outlined"
                        defaultValue={loadedNote?.noteTitle}
                    />
                    <br /><br />
                    <TextField
                        label="Your note"
                        multiline
                        rows={4}
                        sx={{ width: '100%' }}
                        defaultValue={loadedNote?.note}
                        {...register("note")}
                    />
                    <br /><br />
                    <Button type="submit" variant="contained">Update</Button>
                </form>
                    :
                    <p>Loading.....</p>
            }
        </Box>
    );
};

export default EditNotes;