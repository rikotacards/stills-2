import { AppBar, Box, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { AddNewPostSteps } from './AddNewPostSteps';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDrawerContext } from '../providers/DrawerProvider';

export const AddNewPostNarrow: React.FC = () => {
    const drawerContext = useDrawerContext();

    return (
        <Box>
            <AppBar position='relative'>

                <Toolbar sx={{ textAlign: 'center' }}>
                    <Typography fontWeight={'bold'}>
                        Create
                    </Typography>
                    <IconButton onClick={drawerContext.onClose} sx={{ ml: 'auto' }}><KeyboardArrowDownIcon /></IconButton>

                </Toolbar>
            </AppBar>
            <Box sx={{ p: 1 }}>

                <AddNewPostSteps />
            </Box>
        </Box>
    )
}