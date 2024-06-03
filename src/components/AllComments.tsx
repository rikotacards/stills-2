import React from 'react';
import { CommentsReponse, getComments } from '../firebase/comments';
import { Avatar, Box } from '@mui/material';
interface AllCommentsProps {
    postAuthorId: string,
    postId: string
}
export const AllComments: React.FC<AllCommentsProps> = ({ postAuthorId, postId }) => {

    const [comments, setComments] = React.useState<CommentsReponse[]>([])
    React.useEffect(() => {
        getComments({ postAuthorId, postId }).then((res) => {
            console.log('COMMENTS', res)
            if (res) {

                setComments(res)
            }
        })
    }, [postAuthorId, postId])
    return (
        <Box>
            {comments.map((c) => <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Avatar
                    sx={{ mr: 1, height: 30, width: 30 }} />
                {c.comment}
            </Box>)}
        </Box>
    )
} 