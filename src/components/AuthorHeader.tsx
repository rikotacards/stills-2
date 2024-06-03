import { Box, Avatar, Typography, Chip, IconButton } from '@mui/material';
import React from 'react';
import image from '../assets/michael.png'
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useDrawerContext } from '../providers/DrawerProvider';
import { Comments } from './Comments';
import { QuickReactions } from './QuickReactions';

interface AuthorHeaderProps {
    authorId: string;
    postId
}
export const AuthorHeader: React.FC<AuthorHeaderProps> = ({ postId, authorId }) => {
    const drawerContext = useDrawerContext();

    const onCommentsClick = () => {
        drawerContext.setComponent(<Comments postId={postId} />)
        drawerContext.onOpen();
    }
    const onReactionClick = () => {
        drawerContext.setComponent(<QuickReactions postId={postId} />)
        drawerContext.onOpen();
    }
    return (
        <Box sx={{ ml: 1, mr:1, display: 'flex', flexDirection: 'row', alignItems: 'center', mb:0.5 }}>
            <Avatar src={image} sx={{ 
                height: 30,
                 width: 30, mr: 1,
                 boxShadow: '0 0 2px #000',

                  }} />
            <Typography variant='body2' sx={{ textTransform: 'lowercase', 
            fontWeight: 600, 
            textShadow: '0 0 9px #000'
             }}>
                {authorId || 'maxwelldhsu'}
            </Typography>

            <IconButton 
            onClick={onReactionClick}
            sx={{ml: 'auto', 
            mr:1, 
            backdropFilter: 'blur(10px)', 
            border: '0px solid grey',
            // boxShadow: '0 0 1px #000',

        }}
             size='small'><AddReactionIcon fontSize='small'/></IconButton>
            <IconButton 
            onClick={onCommentsClick}
            sx={{ backdropFilter: 'blur(11px)', 
            // boxShadow: '0 0 1px #000',
            border: '0px solid grey'}} size='small'><ChatBubbleOutlineIcon fontSize='small' /></IconButton>
        </Box>
    )
}