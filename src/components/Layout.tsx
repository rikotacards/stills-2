import React from 'react';
import { useIsNarrow } from '../utils/useIsNarrow';
import { AppBar, Box, Collapse, Toolbar, Typography } from '@mui/material';
import { BottomAppBar } from './BottomAppBar';
import { Outlet } from 'react-router';
import { SideDrawer } from './SideDrawer';
import { TopAppBarProvider } from '../providers/TopAppBarProvider';

export const Layout: React.FC = () => {
    const isNarrow = useIsNarrow();
    return (
        <Box sx={{
            marginLeft: isNarrow ? 0 : 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <TopAppBarProvider>

                {!isNarrow && <SideDrawer />}
                <Outlet />
                <Collapse in={isNarrow}>
                    <BottomAppBar />
                </Collapse>
            </TopAppBarProvider>
        </Box>
    )
}