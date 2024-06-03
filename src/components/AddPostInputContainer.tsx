import { Box, Button, IconButton } from '@mui/material';
import React from 'react';
import { AddPostInput } from './AddPostInput';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNewPostContext } from '../providers/useNewPostContext';
import AddCircleIcon from '@mui/icons-material/AddCircle';
interface AddPostInputContainerProps {
    onNext: () => void;
}
export const AddPostInputContainer: React.FC<AddPostInputContainerProps> = ({ onNext }) => {
    const newPostContext = useNewPostContext();

    return (
        <>
            {newPostContext.slides.map((slide, i) => <AddPostInput id={slide.id} moveSlide={slide.moveSlide} key={slide.id} index={i} />)}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <Button
                    variant='outlined'
                    sx={{ flex: 3, mb: 1 }}
                    fullWidth
                    startIcon={<AddCircleIcon />} onClick={newPostContext.addInput}>Add Part</Button>
                <Button
                    sx={{ flex: 1 }}
                    endIcon={<ArrowForwardIcon />}
                    variant='contained'
                    fullWidth
                    onClick={onNext}>Preview</Button>
                    
            </Box>

        </>
    )
}