import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';

const Note = ({ noteBody }) => {
    const { noteTitle, note, noteDate } = noteBody;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={noteTitle}
                subheader={noteDate}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {note}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Note;