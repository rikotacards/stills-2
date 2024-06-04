import { AppBar, Avatar, Box, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { emojis } from '../config/defaultEmojis';
import { useDrawerContext } from '../providers/DrawerProvider';

interface CommentsProps {
    postId: string
}

export const QuickReactions: React.FC<CommentsProps> = ({ postId }) => {
    const drawerContext = useDrawerContext();

    return (
        <Box sx={{ postion: 'relative' }}>
            <Box sx={{ display: 'flex', p: 0 }}>
                <Box sx={{ ml: 'auto' }}>

                    <IconButton onClick={drawerContext.onClose} sx={{m:1}}><KeyboardArrowDownIcon /></IconButton>
                </Box>


            </Box>
            <Box sx={{ p: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>

                    {emojis.map((e) => <IconButton sx={{ height: 50, width: 50 }}>{e}</IconButton>)}
                </Box>
                <Button variant='contained' fullWidth>More</Button>

            </Box>
        </Box>
    )
}