import { AppBar, Avatar, Box, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react';
interface CommentsProps {
    postId:string
}
const emojis = [
    '❤️',
    '😊',
    '🔥',
    '😂',
    '😭',

]
export const QuickReactions: React.FC<CommentsProps> = ({postId}) => {
    return (
        <Box sx={{postion: 'relative'}}>
            <AppBar position='absolute'>
                <Toolbar>
                    <Typography>Reactions</Typography>
                </Toolbar>
                </AppBar>
                <Toolbar/>
            {emojis.map((e) => <IconButton>{e}</IconButton>)}
            <Box sx={{display:'flex', alignItems: 'center'}}>

            <Avatar></Avatar>
            <TextField fullWidth/>
            </Box>
        </Box>
    )
}