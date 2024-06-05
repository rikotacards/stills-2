import { Box, Button } from '@mui/material';
import React from 'react';
import { deletePost } from '../firebase/post';

interface EditPostProps {
    postId: string
    isDraft: boolean;
}
export const EditPost:React.FC<EditPostProps> = ({postId, isDraft}) => {
    
    return (
        <Box>
            <Button fullWidth onClick={() => deletePost(isDraft, postId)} variant='outlined' color='error'>Delete</Button>
        </Box>
    )
}