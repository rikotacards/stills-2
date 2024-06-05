import { useAuth0 } from '@auth0/auth0-react';
import { Button, Typography } from '@mui/material'
import React from 'react'

export const TopAppBarMain: React.FC = () => {
    const {  isAuthenticated, loginWithRedirect} = useAuth0();

    return (
        <>
        <Typography fontWeight={'bold'}>Stills</Typography>
        {isAuthenticated ? null : <Button sx={{ml: 'auto'}} size='small' onClick={() => loginWithRedirect()}>Login</Button>}
        </>
    )
}