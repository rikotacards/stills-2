import { AppBar, Avatar, Box, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface CommentsProps {
    postId: string
}
const emojis = [
    '❤️',
    '😊',
    '🔥',
    '😂',
    '😭',

]
export const QuickReactions: React.FC<CommentsProps> = ({ postId }) => {
    return (
        <Box sx={{ postion: 'relative' }}>
            <AppBar position='absolute'>
                <Toolbar>
                    <Typography fontWeight={'bold'}>Reactions</Typography>
                    <IconButton sx={{ ml: 'auto' }}><KeyboardArrowDownIcon /></IconButton>

                </Toolbar>
            </AppBar>
            <Toolbar />
            <Box sx={{ p: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>

                    {emojis.map((e) => <IconButton sx={{ height: 50, width: 50 }}>{e}</IconButton>)}
                </Box>
                <Button>More</Button>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>

                    <Avatar sx={{ mr: 1 }}></Avatar>
                    <TextField fullWidth />
                </Box>
            </Box>
        </Box>
    )
}