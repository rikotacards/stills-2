import { Button } from '@mui/material';
import React from 'react';
import { useNewPostContext } from '../providers/useNewPostContext';
import { Post } from '../components/Post';
import { UID } from '../firebase/firebaseConfig';
import { serverTimestamp } from 'firebase/firestore';
interface PreviewPageProps {
    onBack: () => void;
}

export const PreviewPage: React.FC<PreviewPageProps> = ({onBack}) => {
    const {onSaveDraft, slidesWithImageAndCaption, onPost} = useNewPostContext();
    const slidesWithImageURL = slidesWithImageAndCaption.map((slide) => ({...slide, imagePath: slide.imagePath?.length ? URL.createObjectURL(slide.imagePath[0]): ''}))
    console.log(slidesWithImageURL)
    const style = {
        mb:1
    }
    return (
        <>
        <Post postId={'fake'} authorId={UID} slides={slidesWithImageURL}/>
        <Button sx={style} fullWidth onClick={onBack}>Back</Button>
        <Button sx={style} fullWidth>Cancel</Button>
        <Button sx={style} fullWidth onClick={onPost}>Post</Button>
        <Button sx={style} fullWidth onClick={onSaveDraft}>Save as draft</Button>
        </>
    )
}