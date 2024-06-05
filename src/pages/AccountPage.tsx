import { Avatar, Box, Button, CircularProgress, InputAdornment, Switch, TextField, Typography } from '@mui/material';
import React from 'react';
import { updateBio, updatePrivacy } from '../firebase/account';
import { UID } from '../firebase/firebaseConfig';
import { useTopAppBarContext } from '../providers/useTopAppBarContext';
import { TopAppBarAccountSettings } from '../components/TopAppBarAccountSettings';
import { useAuth0 } from '@auth0/auth0-react';

export const AccountPage: React.FC = () => {
    const { setComponent } = useTopAppBarContext();
    const { logout } = useAuth0();

    React.useEffect(() => {
        setComponent(<TopAppBarAccountSettings />)
    }, [setComponent])
    const [bio, setBio] = React.useState('')
    const onBioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBio(e.target.value);

    }
    const onSaveBio = () => {
        updateBio({ myUid: UID, bio })
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Avatar sx={{ mb: 1 }} />
            <Typography>
                <TextField onChange={onBioChange} fullWidth placeholder={'Bio'} />
                <Button onClick={onSaveBio}>save</Button>
            </Typography>
            <Typography>set username</Typography>
            <TextField placeholder='Username' InputProps={{
                endAdornment: <InputAdornment position='end'><CircularProgress size={'2rem'} /></InputAdornment>
            }} />
            <Typography>Privacy</Typography>
            <Switch onChange={(e) => updatePrivacy({ myUid: UID, isPrivate: e.target.checked })} />
            <Button onClick={() => logout()} variant='outlined' color='error'>Log out</Button>
        </Box>
    )
}