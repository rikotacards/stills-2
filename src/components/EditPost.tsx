import { Box, Button } from '@mui/material';
import React from 'react';
import { deletePost } from '../firebase/post';

interface EditPostProps {
    postId: string
}
export const EditPost:React.FC<EditPostProps> = ({postId}) => {
    
    return (
        <Box>
            <Button fullWidth onClick={() => deletePost(false, postId)} variant='outlined' color='error'>Delete</Button>
        </Box>
    )
}