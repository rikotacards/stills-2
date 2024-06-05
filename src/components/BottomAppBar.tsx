import { AppBar, Avatar, Box,Collapse,IconButton } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useDrawerContext } from '../providers/DrawerProvider';
import { AddNewPostNarrow } from './AddNewPostNarrow';
import { useScrollDirection } from '../utils/useScrollDirection';
import { useNavigate } from 'react-router';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
export const BottomAppBar: React.FC = () => {
    const drawerContext = useDrawerContext();
    const sd = useScrollDirection();
    const nav = useNavigate();
    const onCreateDrawer = () => {
        drawerContext.setComponent(<AddNewPostNarrow/>)
        drawerContext.onOpen()
    }
    return (
        <AppBar position='fixed' sx={{ background: 'black', top: 'auto', bottom: 0, backdropFilter: 'blur(20px)', }}>
            <Collapse in={sd ==='up'}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', mb: 0.5, mt: 0.5 }}>
            <IconButton onClick={() => nav('/')}><HomeRoundedIcon/></IconButton>

                <IconButton onClick={onCreateDrawer}><AddIcon/></IconButton>
                <IconButton onClick={() => nav('/profile')}><Avatar sx={{height: 30, width:30}}/></IconButton>

            </Box>
            </Collapse>
        </AppBar>


    )
}