import { AppBar, Avatar, Box, TextField, Toolbar, Typography, IconButton, Input, InputAdornment, Button, Card } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
interface CommentsProps {
    postId: string
    postAuthorId: string
}
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { UID } from '../firebase/firebaseConfig';
import { addComment } from '../firebase/comments';
import { AllComments } from './AllComments';
import { useDrawerContext } from '../providers/DrawerProvider';
export const Comments: React.FC<CommentsProps> = ({ postId, postAuthorId }) => {
    const [comment, setComment] = React.useState('')
    const d = useDrawerContext();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value)
    }
    const onAddComment = async() => {
       await addComment( {comment, 
        postAuthorId,
        postId, 
        commentAuthorId: UID})
    }
    return (
        <Box sx={{ postion: 'relative' }}>
            <AppBar position='absolute'>
                <Toolbar>
                    <Typography>Comments</Typography>
                    <IconButton onClick={d.onClose} sx={{ ml: 'auto' }}><KeyboardArrowDownIcon /></IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Box sx={{ p: 1 }}>
                <Card variant='outlined' sx={{p:1, mb:1, textAlign: 'center'}}>
                <AllComments postId={postId} postAuthorId={postAuthorId}/>
                </Card>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>

                    <Avatar></Avatar>
                    <TextField
                    onChange={onChange}
                    value={comment}
                        size='small'

                        InputProps={{
                            endAdornment:
                                <InputAdornment
                                    position='end'><IconButton  onClick={onAddComment} size='small' sx={{ border: '1px solid' }}
                                        color='primary'>
                                        <ArrowDropUpIcon fontSize='small' />
                                    </IconButton ></InputAdornment>
                        }}
                        sx={{ ml: 1, pr: 0 }}
                        fullWidth />

                </Box>
            </Box>
        </Box>
    )
}