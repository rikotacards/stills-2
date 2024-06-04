import React from 'react';
import { emojis } from '../config/defaultEmojis';
import { Box, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { QuickReactions } from './QuickReactions';
import { useDrawerContext } from '../providers/DrawerProvider';
interface PopoverReactionsProps {
    handleClose: () => void;
}
export const PopoverReactions: React.FC<PopoverReactionsProps> = ({handleClose}) => {
    const drawerContext = useDrawerContext();

    const onMore = () => {
        handleClose();
        drawerContext.setComponent(<QuickReactions postId={''} />)
        drawerContext.onOpen();
    }
    return (
        <Box
        sx={{
            display: 'flex',
    
        }}
        >
            {emojis.map((e) => <IconButton sx={{ height: 50, width: 50 }}>{e}</IconButton>)}
            <IconButton onClick={onMore}><AddCircleIcon/></IconButton>
        </Box>
    )
}