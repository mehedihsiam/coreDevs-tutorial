import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Progress = () => {
    return (
        <Box minHeight={500} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress disableShrink />
        </Box>
    );
};

export default Progress;