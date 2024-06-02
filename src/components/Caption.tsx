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
        ['-webkit-line-clamp']: isOpen ? undefined : '2',
        ['-webkit-box-orient']: 'vertical',
        overflow: 'hidden',
        ml: 1,
        mr: 1,
        mb:1,


    }
    const textContainerStyles = {
        height: 'fit-content',
        maxHeight: '40%',
        overflowY: 'scroll',
        ['scrollbar-width']: 'none',
        transition: 'height 0.1s',
        display: 'flex',
        mr:1,

    }


    
    const boxStyle = {
        background: `linear-gradient(
            to top,
            hsla(0, 0%, 0%, 0.75) 0%,
            hsla(0, 0%, 0%, 0.74) 8.1%,
            hsla(0, 0%, 0%, 0.714) 15.5%,
            hsla(0, 0%, 0%, 0.672) 22.5%,
            hsla(0, 0%, 0%, 0.618) 29%,
            hsla(0, 0%, 0%, 0.556) 35.3%,
            hsla(0, 0%, 0%, 0.486) 41.2%,
            hsla(0, 0%, 0%, 0.412) 47.1%,
            hsla(0, 0%, 0%, 0.338) 52.9%,
            hsla(0, 0%, 0%, 0.264) 58.8%,
            hsla(0, 0%, 0%, 0.194) 64.7%,
            hsla(0, 0%, 0%, 0.132) 71%,
            hsla(0, 0%, 0%, 0.078) 77.5%,
            hsla(0, 0%, 0%, 0.036) 84.5%,
            hsla(0, 0%, 0%, 0.01) 91.9%,
            hsla(0, 0%, 0%, 0) 100%
          );`

    }
    
    return (
            <Box onClick={onClick} sx={textContainerStyles}>
    
                <Typography
                    sx={textStyles}
                    variant='body2'>
                    {caption}
                </Typography>

            </Box>
    )
}


