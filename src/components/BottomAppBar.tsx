import { AppBar, Box,IconButton } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

export const BottomAppBar: React.FC = () => {
    return (
        <AppBar position='fixed' sx={{ background: 'black', top: 'auto', bottom: 0, backdropFilter: 'blur(20px)', }}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', mb: 0.5, mt: 0.5 }}>
                <IconButton><AddIcon/></IconButton>
            </Box>
        </AppBar>


    )
}