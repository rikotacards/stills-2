import { Box, Avatar, Typography, Chip } from '@mui/material';
import React from 'react';
import image from '../assets/michael.png'
interface AuthorHeaderProps {
    authorId: string
}
export const AuthorHeader: React.FC<AuthorHeaderProps> = ({ authorId }) => {
    return (
        <Box sx={{ ml: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', mb:0.5 }}>
            <Avatar src={image} sx={{ height: 30, width: 30, mr: 1 }} />
            <Typography variant='body2' sx={{ textTransform: 'lowercase', fontWeight: 600, textShadow: '0 0 0px #000' }}>
                {authorId || 'maxwelldhsu'}
            </Typography>
        </Box>
    )
}