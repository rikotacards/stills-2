import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';
export const TopAppBarProfile: React.FC = () => {
    const nav = useNavigate();
    const onSettings = () => {
        nav('/account')
    }
    return (
        <Box sx={{display: 'flex', alignItems: 'center', width: '100%'}}>
            <Typography fontWeight={'bold'}>Max</Typography>
            <Box sx={{ml: 'auto'}}>
            <IconButton onClick={onSettings}><MenuIcon/></IconButton>
            </Box>
        </Box>
    )
}