import { AppBar, Avatar, Box, TextField, Toolbar, Typography, IconButton, Input, InputAdornment, Button } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
interface CommentsProps {
    postId: string
}
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
export const Comments: React.FC<CommentsProps> = ({ postId }) => {
    return (
        <Box sx={{ postion: 'relative' }}>
            <AppBar color='primary' enableColorOnDark position='absolute'>
                <Toolbar>
                    <Typography>Comments</Typography>
                    <IconButton sx={{ ml: 'auto' }}><KeyboardArrowDownIcon /></IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Box sx={{ p: 1 }}>

                <Typography>No comments</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>

                    <Avatar></Avatar>
                    <TextField size='small'  InputProps={{
                        endAdornment: <InputAdornment position='end'><Button sx={{borderRadius:5}} variant='contained' size='small' color='primary'><ArrowDropUpIcon /></Button ></InputAdornment>
                    }} sx={{ ml: 1 }} fullWidth />

                </Box>
            </Box>
        </Box>
    )
}