import {  Box,  Typography } from '@mui/material';
import React from 'react';
import { addReaction, removeReaction } from '../firebase/reactions';
import { UID } from '../firebase/firebaseConfig';

import { Slides } from './Slides';

import {  Timestamp } from 'firebase/firestore';

interface PostProps {
    slides: { imagePath: string; caption: string }[];
    authorId: string;
    postId: string;
    createdAt?: Timestamp;
    isDraft: boolean;
}

const postContainerStyles = {
    mb: 2,
    maxWidth: 470,
    //without this, image will overflow
    width: '100%',
    // height is determined by the max width
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    // border: '1px solid white',
}
export const Post: React.FC<PostProps> = ({isDraft, createdAt, postId, slides, authorId }) => {
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

            <Slides isDraft={isDraft}
             authorId={authorId} postId={postId} slides={slides}/>

            {/* <Button size='small' onClick={onAddReaction} variant='contained'>Heart</Button>
            <Button size='small' onClick={onRemoveReaction} variant='contained'>Remove Heart</Button>  */}
            <Box sx={{ display: 'flex', ml: 1, mt: 1 }}>
                <Typography variant='caption' color='GrayText'>

                    {createdAt && createdAt.toDate().toLocaleDateString("en-US", {month:'short', day: 'numeric', year: 'numeric'})}


                </Typography>


            </Box>

        </Box>
    )
}