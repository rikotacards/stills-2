import { Box, CircularProgress } from '@mui/material';
import React from 'react';
interface ImageWithLoadingProps {
    imagePath: string;
}
// image conforms to parent div

export const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({ imagePath }) => {
   
    const [isLoading, setLoading] = React.useState(true);
    return (
        <>
        <Box sx={{
            height: '600px',
            width: '100%',
            display: 'flex',
            visibility: isLoading ? 'hidden' :'visible',
            marginLeft: 'auto',
            objectFit: 'cover',
            position: 'relative',

            
        }} 
        onLoad={() => { console.log('LOD'); setLoading(false) }}
        component='img'
        src={imagePath} />
        
        {isLoading && <Box sx={{width: '100%', height: '100%',top: 0, position: 'absolute', zIndex: 5000, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

            <CircularProgress/>
            </Box>
            }
        </>

    )
}