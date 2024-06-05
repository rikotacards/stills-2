import React from 'react';
import { PostResponse } from '../firebase/drafts';
import { UID } from '../firebase/firebaseConfig';
import { Button, CircularProgress } from '@mui/material';
import { Post } from '../components/Post';
import { getPosts } from '../firebase/post';

export const DraftsPage: React.FC = () => {
    const [drafts, setDrafts] = React.useState<PostResponse[]>([])
    const [isFetching, setFetching] = React.useState(false)
    React.useEffect(() => {
        setFetching(true)
        getPosts(true, UID).then((res) => {
            console.log(res)
            if (res) {
                setDrafts(res)
                setFetching(false)
            }
        }).catch((e) => {
            setFetching(false)
        })
    }, [])
    return (
        <>
            <h1>Drafts</h1>
            {isFetching && <CircularProgress/>}
            {drafts?.map((d) => 
            <><Post isDraft={true} postId={d.id} authorId={d.authorID} slides={d.slides}  key={d.id}/>
          
            </>
            )}
        </>
    )
}