import { Button, CircularProgress, Toolbar } from '@mui/material';
import React from 'react';
import { PostResponse } from '../firebase/drafts';
import { getPosts } from '../firebase/post';
import { UID } from '../firebase/firebaseConfig';
import { Post } from '../components/Post';
import { useTopAppBarContext } from '../providers/useTopAppBarContext';

export const MainFeed: React.FC = () => {
    const [posts, setPosts] = React.useState<PostResponse[]>([])
    const [isFetching, setFetching] = React.useState(false)
    const topAppBarContext = useTopAppBarContext();
    React.useEffect(() => {
        topAppBarContext.setComponent(null)
    }, [topAppBarContext])
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
        <Toolbar/>
            {isFetching && <CircularProgress/>}

            {posts?.map((d) => <Post createdAt={d.createdAt} postId={d.id} key={d.id} authorId={d.authorID} slides={d.slides} />)}
            <Toolbar/>
        </>
    )
}