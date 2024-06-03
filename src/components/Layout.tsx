import React from 'react';
import { useIsNarrow } from '../utils/useIsNarrow';
import { AppBar, Box, Collapse, Toolbar, Typography } from '@mui/material';
import { BottomAppBar } from './BottomAppBar';
import { Outlet } from 'react-router';
import { SideDrawer } from './SideDrawer';
import { useScrollDirection } from '../utils/useScrollDirection';

export const Layout: React.FC = () => {
    const isNarrow = useIsNarrow();
    const sd = useScrollDirection();
    console.log('sd', sd)
    return (
        <Box sx={{
            marginLeft: isNarrow ? 0 : 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {isNarrow &&

                <AppBar
                    position='fixed'
                sx={{background: 'black'}}
                >
                    <Collapse in={sd === 'up'}>

                        <Toolbar


                        >
                            <Typography fontWeight={'bold'}>Stills</Typography>
                        </Toolbar>
                    </Collapse>
                </AppBar>
            }
            {!isNarrow && <SideDrawer />}
            <Outlet />
            <Collapse in={isNarrow}>
                <BottomAppBar />
            </Collapse>
        </Box>
    )
}