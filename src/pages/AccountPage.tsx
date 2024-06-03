import { Box, CircularProgress, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';

export const AccountPage: React.FC = () => {
    return (
        <Box>
            <Typography>set username</Typography>
            <TextField placeholder='Username' InputProps={{
                endAdornment: <InputAdornment position='end'><CircularProgress size={'2rem'}/></InputAdornment>
            }}/>
        </Box>
    )
}