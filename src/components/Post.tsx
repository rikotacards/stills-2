import { Avatar, Box, Button, Chip, Typography } from '@mui/material';
import React from 'react';
import { addReaction, removeReaction } from '../firebase/reactions';
import { UID } from '../firebase/firebaseConfig';
import { Reactions } from './Reactions';
import { deletePost } from '../firebase/post';
import { Slides } from './Slides';
import { useDrawerContext } from '../providers/DrawerProvider';
import { EditPost } from './EditPost';

interface PostProps {
    slides: { imagePath: string; caption: string }[];
    authorId: string;
    postId: string;
}

const postContainerStyles = {
    mb: 1,
    maxWidth: 470,
    //without this, image will overflow
    width: '100%',
    // height is determined by the max width
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    // border: '1px solid white',
}
export const Post: React.FC<PostProps> = ({ postId, slides, authorId }) => {
    const drawerContext = useDrawerContext();
    const onAddReaction = async () => {
        addReaction({
            postAuthorId: UID,
            postId,
            emojiId: 'heart',
            emoji: '<3',
            reactionAuthorId: UID,
        })
    }
    const onRemoveReaction = async () => {
        removeReaction({
            reactionAuthorId: UID,
            postId,
            emojiId: 'heart',
        })
    }
    
    return (
        <Box sx={postContainerStyles}>
            
            <Slides postId={postId} slides={slides} />
     
            {/* <Button size='small' variant='contained'>comments</Button>
            <Button size='small' onClick={onAddReaction} variant='contained'>Heart</Button>
            <Button size='small' variant='contained'>fire</Button>
            <Button size='small' variant='contained'>Add comment</Button>
            <Button size='small' onClick={onRemoveReaction} variant='contained'>Remove Heart</Button> */}
            <Reactions postId={postId} />
            <Box>

           
            </Box>



        </Box>
    )
}