import { AppBar, Collapse, Drawer, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useIsNarrow } from '../utils/useIsNarrow';
import { useScrollDirection } from '../utils/useScrollDirection';
import { TopAppBarMain } from '../components/TopAppBarMain';
interface TopAppBarContextProps {
    setComponent: (arg: React.ReactNode) => void
}
export const TopAppBarContext = React.createContext({} as TopAppBarContextProps)

interface TopAppBarProviderProps {
    children: React.ReactNode;
}

export const TopAppBarProvider: React.FC<TopAppBarProviderProps> = ({ children }) => {
    const [render, setRender] = React.useState<React.ReactNode | null>(null)
    const [open, setOpen] = React.useState(false);
    const onOpen = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }
    const setComponent = React.useCallback((arg: React.ReactNode) => {
        setRender(arg)
    }, [])
    const value = {
        onOpen,
        onClose,
        setComponent
    }
    const isNarrow = useIsNarrow();
    const sd = useScrollDirection();

    return (
        <TopAppBarContext.Provider value={value}>
            
            {isNarrow && 
            <AppBar
                    position='fixed'
                    sx={{ background: 'black' }}
                >
                    <Collapse in={sd === 'up'}>
                        <Toolbar
                        >
                            {render || <TopAppBarMain/>}
                        </Toolbar>
                    </Collapse>
                </AppBar>
                }
           
            {children}

        </TopAppBarContext.Provider>
    )
}