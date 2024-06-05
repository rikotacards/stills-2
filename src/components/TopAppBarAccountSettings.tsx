import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router';
export const TopAppBarAccountSettings: React.FC = () => {
    const nav = useNavigate()
    const back = () => nav(-1)
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <IconButton onClick={back} sx={{ mr: 1 }}><ArrowBackIosNewIcon /></IconButton>
            <Typography fontWeight={'bold'}>Settings</Typography>
        </Box>
    )
}