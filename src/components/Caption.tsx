import { Box, Chip, Typography } from '@mui/material';
import React from 'react';
import { AuthorHeader } from './AuthorHeader';
interface CaptionProps {
    caption: string
}

export const Caption: React.FC<CaptionProps> = ({ caption }) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const onClick = () => {
        setIsOpen(!isOpen);
    }
    const textStyles = {
        display: '-webkit-box',
        textShadow: '0 0 2px #000',
        ['-webkit-line-clamp']: isOpen ? undefined : '2',
        ['-webkit-box-orient']: 'vertical',
        overflow: 'hidden',
        ml: 1,
        mr: 1,
        // mb:1,


    }
    const textContainerStyles = {
        height: 'fit-content',
        maxHeight: '40%',
        overflowY: 'scroll',
        ['scrollbar-width']: 'none',
        transition: 'height 0.1s',
        display: 'flex',
        mr:1,
        width: '100%'

    }
    
    return (
            <Box onClick={onClick} sx={textContainerStyles}>
    
                <Typography
                    sx={textStyles}
                    variant='body2'
                    fontWeight={'500'}
                    >
                    {caption}
                </Typography>

            </Box>
    )
}


