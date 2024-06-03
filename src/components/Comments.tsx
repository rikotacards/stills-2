import { AppBar, Avatar, Box, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react';
interface CommentsProps {
    postId:string
}
export const Comments: React.FC<CommentsProps> = ({postId}) => {
    return (
        <Box sx={{postion: 'relative'}}>
            <AppBar position='absolute'>
                <Toolbar>
                    <Typography>Comments</Typography>
                </Toolbar>
                </AppBar>
                <Toolbar/>
            comments
            <Box sx={{display:'flex', alignItems: 'center'}}>

            <Avatar></Avatar>
            <TextField fullWidth/>
            </Box>
        </Box>
    )
}