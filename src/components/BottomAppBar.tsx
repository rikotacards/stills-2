import { AppBar, Box,Collapse,IconButton } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router';
import { useDrawerContext } from '../providers/DrawerProvider';
import { AddNewPostSteps } from './AddNewPostSteps';
import { AddNewPostNarrow } from './AddNewPostNarrow';
import { useScrollDirection } from '../utils/useScrollDirection';

export const BottomAppBar: React.FC = () => {
    const drawerContext = useDrawerContext();
    const sd = useScrollDirection();

    const onCreateDrawer = () => {
        drawerContext.setComponent(<AddNewPostNarrow/>)
        drawerContext.onOpen()
    }
    return (
        <AppBar position='fixed' sx={{ background: 'black', top: 'auto', bottom: 0, backdropFilter: 'blur(20px)', }}>
            <Collapse in={sd ==='up'}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', mb: 0.5, mt: 0.5 }}>
                <IconButton onClick={onCreateDrawer}><AddIcon/></IconButton>
            </Box>
            </Collapse>
        </AppBar>


    )
}