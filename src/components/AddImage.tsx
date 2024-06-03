import React from 'react';
import { Box, IconButton } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useNewPostContext } from '../providers/useNewPostContext';

interface AddImageProps {
    slideId: string
}
export const AddImage: React.FC<AddImageProps> = ({ slideId }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const { onImagePathChange, imagePaths } = useNewPostContext();

    const onUploadIconClick = () => {
        if (inputRef.current !== null) {
            inputRef.current.click();
        }
    }
    const onImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length === 0) {
            // if you cancel when choosing photos
            return
        } else {
            onImagePathChange(e, slideId)
        }
    }
    const previewUrl = imagePaths[slideId]?.[0] ? URL?.createObjectURL(imagePaths[slideId][0]) : ''
    return (
        <>
            {!imagePaths[slideId]?.length && <IconButton
                onClick={onUploadIconClick}><AddPhotoAlternateIcon /></IconButton>}
            {imagePaths[slideId]?.length && <Box
                sx={{
                    width: 100,
                    height: 100,
                    mr: 1,
                    objectFit: 'cover'
                }}
                component='img'
                onClick={onUploadIconClick}
                src={previewUrl}
            />}
            <input type="file"
                style={{ display: "none" }}
                ref={inputRef}
                accept="image/*"
                onChange={onImageFileChange} />
        </>
    )
}