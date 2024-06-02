import { Drawer } from '@mui/material';
import React from 'react';
interface DrawerContextProps {
    onOpen: () => void;
    onClose: () => void;
    setComponent: (arg: React.ReactNode) => void
}
const DrawerContext = React.createContext({} as DrawerContextProps)
export const useDrawerContext = () => React.useContext(DrawerContext);

interface DrawerProviderProps {
    children: React.ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({children}) => {
    const [render, setRender] = React.useState<React.ReactNode | null>(null)
    const [open, setOpen] = React.useState(false);
    const onOpen = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }
    const setComponent = (arg: React.ReactNode) => {
        setRender(arg)
    }
    const value = {
        onOpen, 
        onClose,
        setComponent
    }
    return (
        <DrawerContext.Provider value={value}>
            {children}
            <Drawer anchor='bottom' onClose={onClose} open={open}>
                {render}
            </Drawer>
        </DrawerContext.Provider>
    )
}