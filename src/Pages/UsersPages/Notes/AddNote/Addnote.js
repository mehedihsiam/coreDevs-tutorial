import { Button, Link, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';


const Addnote = () => {
    const date = new Date();
    const stringDate = date.toDateString().split(' ')
    const finalDate = stringDate[1] + ' ' + stringDate[2] + ',' + stringDate[3];
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const noteData = { ...data, noteDate: finalDate }
        axios.post('https://vast-stream-90795.herokuapp.com/notes', noteData)
            .then(res => {
                if (res.status === 200) {
                    alert('Note Added Succesfully')
                    reset()
                }
            })
    };
    return (
        <Box sx={{ width: { xs: '100%', md: '30%' }, mx: 'auto', py: 4, textAlign: 'center' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register("noteTitle")} sx={{ width: '100%' }} label="Title" variant="outlined" />
                <br /><br />
                <TextField
                    label="Your note"
                    multiline
                    rows={4}
                    sx={{ width: '100%' }}
                    {...register("note")}
                />
                <br /><br />
                <Button type="submit" variant="contained">Create</Button>
            </form>
            <Button sx={{ m: 1 }} variant="outlined">
                <Link className="link" to="/notes">Back</Link>
            </Button>
        </Box>
    );
};

export default Addnote;