import { Button } from '@mui/material';
import React from 'react';
import { AddPostInput } from './AddPostInput';
import { useNewPostContext } from '../providers/useNewPostContext';

interface AddPostInputContainerProps {
    onNext: () => void;
}
export const AddPostInputContainer: React.FC<AddPostInputContainerProps> = ({onNext}) => {
    const newPostContext = useNewPostContext();

    return (
        <>
       {newPostContext.slides.map((slide, i) => <AddPostInput id={slide.id} moveSlide={slide.moveSlide} key={slide.id} index={i}/>)}
        <Button onClick={newPostContext.addInput}>add</Button>
        <Button onClick={onNext}>Preview</Button>

        </>
    )
}