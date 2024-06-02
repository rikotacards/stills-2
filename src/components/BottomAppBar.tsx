import { AppBar, Box,IconButton } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router';
import { useDrawerContext } from '../providers/DrawerProvider';
import { AddNewPostSteps } from './AddNewPostSteps';

export const BottomAppBar: React.FC = () => {
    const nav = useNavigate();
    const drawerContext = useDrawerContext();
    const onCreate = () => {
        nav('/create')
    }
    const onCreateDrawer = () => {
        drawerContext.setComponent(<AddNewPostSteps/>)
        drawerContext.onOpen()
    }
    return (
        <AppBar position='fixed' sx={{ background: 'black', top: 'auto', bottom: 0, backdropFilter: 'blur(20px)', }}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', mb: 0.5, mt: 0.5 }}>
                <IconButton onClick={onCreateDrawer}><AddIcon/></IconButton>
            </Box>
        </AppBar>


    )
}