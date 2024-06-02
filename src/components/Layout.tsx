import React from 'react';
import { useIsNarrow } from '../utils/useIsNarrow';
import { Box, Collapse } from '@mui/material';
import { BottomAppBar } from './BottomAppBar';
import { Outlet } from 'react-router';
import {  SideDrawer } from './SideDrawer';

export const Layout: React.FC = () => {
    const isNarrow = useIsNarrow();
    return (
        <Box sx={{
            marginLeft: isNarrow ? 0 : 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}>
            {!isNarrow && <SideDrawer/>}
            <Outlet />
            <Collapse in={isNarrow}>
                <BottomAppBar />
            </Collapse>
        </Box>
    )
}