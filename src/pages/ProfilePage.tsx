import { Button, CircularProgress, Toolbar } from '@mui/material';
import React from 'react';
import { PostResponse } from '../firebase/drafts';
import { getPosts } from '../firebase/post';
import { UID } from '../firebase/firebaseConfig';
import { Post } from '../components/Post';
import { useAuth0 } from "@auth0/auth0-react";

export const ProfilePage: React.FC = () => {
    const [posts, setPosts] = React.useState<PostResponse[]>([])
    const [isFetching, setFetching] = React.useState(false)
    const { loginWithRedirect, logout } = useAuth0();
    const { user, isAuthenticated, isLoading} = useAuth0();

    React.useEffect(() => {
        setFetching(true)
        getPosts(false, UID).then((res) => {
            console.log(res)
            if (res) {
                setPosts(res)
                setFetching(false)
            }
        })
    }, [])

    return (
        <>
        {user?.name}
        {console.log(user)}
        <Button onClick={() => loginWithRedirect()}>Login</Button>
        <Button onClick={() => logout()}>Logout</Button>
            {isFetching && <CircularProgress/>}

            {posts?.map((d) => <Post createdAt={d.createdAt} postId={d.id} key={d.id} authorId={d.authorID} slides={d.slides} />)}
            <Toolbar/>
        </>
    )
}