import React from 'react';
import { getReactions } from '../firebase/reactions';
import { Box, Chip } from '@mui/material';
import './Reactions.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
interface ReactionsProps {
    postId: string
}
const reactionsSx = {

    // ['scrollbar-width']: 'none',
    display: 'flex', mr: 1, overflowX: 'scroll',

    background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));`

}
export const Reactions: React.FC<ReactionsProps> = ({ postId }) => {

    React.useEffect(() => {
        getReactions({ postId }).then((res) => {
            console.log(res)
        })
    }, [])
    return (
        <>
   
                <Box className='div-container'>
                <Chip sx={{ mr: 1 }} size='small' label='❤️' />
                <Chip sx={{ mr: 1 }} size='small' label='🔥 4' />
                <Chip sx={{ mr: 1 }} size='small' label='❤️ 4' />
                <Chip sx={{ mr: 1 }} size='small' label='🔥 4' />
                <Chip sx={{ mr: 1 }} size='small' label='❤️ 4' />
                <Chip sx={{ mr: 1 }} size='small' label='🔥 4' />
                <Chip sx={{ mr: 1 }} size='small' label='❤️ 4' />
                <Chip sx={{ mr: 1 }} size='small' label='🔥 4' />
                <Chip sx={{ mr: 1 }} size='small' label='❤️ 4' />
                <Chip sx={{ mr: 1 }} size='small' label='🔥 4' />
            </Box>
        </>
    )
}