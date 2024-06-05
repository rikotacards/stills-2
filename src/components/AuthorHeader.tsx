import { Box, Avatar, Typography, Chip, IconButton, Popover } from '@mui/material';
import React from 'react';
import image from '../assets/michael.png'
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { useDrawerContext } from '../providers/DrawerProvider';
import { Comments } from './Comments';
import { QuickReactions } from './QuickReactions';
import MessageIcon from '@mui/icons-material/Message';
import { PopoverReactions } from './PopoverReactions';
interface AuthorHeaderProps {
    authorId: string;
    postId: string;
}
export const AuthorHeader: React.FC<AuthorHeaderProps> = ({ postId, authorId }) => {
    const drawerContext = useDrawerContext();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const onCommentsClick = () => {
        drawerContext.setComponent(<Comments postAuthorId={authorId} postId={postId} />)
        drawerContext.onOpen();
    }
    const onReactionClick = () => {
        drawerContext.setComponent(<QuickReactions postId={postId} />)
        drawerContext.onOpen();
    }
    return (
        <Box sx={{ ml: 1, mr: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 0.5 }}>
            <Avatar src={image} sx={{
                height: 30,
                width: 30, mr: 1,
                boxShadow: '0 0 2px #000',

            }} />
            <Typography variant='body2' sx={{
                textTransform: 'lowercase',
                fontWeight: 600,
                textShadow: '0 0 9px #000'
            }}>
                {authorId || 'maxwelldhsu'}
            </Typography>


            <Box sx={{ ml: 'auto' }}>


                {/* <Chip
                    onClick={onCommentsClick}
                    label={<Box sx={{ alignItems: 'center', display: 'flex' }}>
                        <MessageIcon sx={{ mr: 0.5 }} fontSize='small' /></Box>}
                    sx={{
                        backdropFilter: 'blur(11px)',
                        background: 'transparent',
                        // boxShadow: '0 0 1px #000',
                        border: '0px solid grey',
                        alignItems: 'center',
                        mr: 1

                    }} size='small'></Chip> */}
                    <IconButton sx={{mr:1}} size='small'>
                        <MessageIcon fontSize='small'/>
                    </IconButton>
                <IconButton
                
                    onClick={handleClick}
                    sx={{
                        ml: 'auto',
                        mr: 1,
                        backdropFilter: 'blur(10px)',
                        border: '0px solid grey',
                        // boxShadow: '0 0 1px #000',

                    }}
                    size='small'>
                    <AddReactionIcon fontSize='small' /></IconButton>

            </Box>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}

            >
                <PopoverReactions handleClose={handleClose}/>
                </Popover>
        </Box>
    )
}