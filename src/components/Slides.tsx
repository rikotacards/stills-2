import { Box, Chip, IconButton } from '@mui/material';
import React from 'react';
import { Caption } from './Caption';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, EffectFade, Pagination } from 'swiper/modules';
import { MoreVert } from '@mui/icons-material';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import 'swiper/css/controller';
interface SlidesProps {
    slides: { imagePath: string, caption: string }[]
    postId: string;
}
// image conforms to parent div
const imageStyles = {
    height: '600px',
    width: '100%',
    display: 'flex',
    objectFit: 'cover',
    position: 'relative'

}
import { EditPost } from './EditPost';
import { useDrawerContext } from '../providers/DrawerProvider';
import { AuthorHeader } from './AuthorHeader';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
const swiperContainer = { display: 'flex', flexDirection: 'row' }
export const Slides: React.FC<SlidesProps> = ({ slides, postId }) => {
    const [firstSwiper, setFirstSwiper] = React.useState(null);
    const [secondSwiper, setSecondSwiper] = React.useState(null);
    const drawerContext = useDrawerContext();
    const boxStyle = {
        pt: 1,
        pb:1,
        background: `linear-gradient(
            to bottom,
            hsla(0, 0%, 0%, 0) 0%,
            hsla(0, 0%, 0%, 0.009) 6.8%,
            hsla(0, 0%, 0%, 0.035) 13.4%,
            hsla(0, 0%, 0%, 0.076) 19.8%,
            hsla(0, 0%, 0%, 0.128) 26%,
            hsla(0, 0%, 0%, 0.189) 32.1%,
            hsla(0, 0%, 0%, 0.257) 38.2%,
            hsla(0, 0%, 0%, 0.329) 44.3%,
            hsla(0, 0%, 0%, 0.401) 50.5%,
            hsla(0, 0%, 0%, 0.473) 56.7%,
            hsla(0, 0%, 0%, 0.541) 63.2%,
            hsla(0, 0%, 0%, 0.602) 69.9%,
            hsla(0, 0%, 0%, 0.654) 76.8%,
            hsla(0, 0%, 0%, 0.695) 84.1%,
            hsla(0, 0%, 0%, 0.721) 91.8%,
            hsla(0, 0%, 0%, 0.73) 100%
          );`


    }


    const [page, setPage] = React.useState(1);
    // from docs

    const displayedImages = slides.map((s, i) =>
        <SwiperSlide
            key={i}
        >

            <Box onLoadedData={() => { console.log('STARTL') }}
                onLoad={() => { console.log('LOD') }}
                component='img'
                sx={imageStyles}
                src={s.imagePath} />

        </SwiperSlide>
    )
    const displayedCaptions = slides.map((s, i) =>
        <Box

            key={s.caption + i}
        // style={{ display: 'flex', flexDirection: 'column' }}
        >


            <Caption caption={s.caption} />


        </Box>
    )
    const onMoreClick = () => {
        drawerContext.setComponent(<EditPost postId={postId} />)
        drawerContext.onOpen();
    }
    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            //  width: '100%', 
            flexDirection: 'column'
        }}>
            <Box sx={{ width: '100%', position: 'absolute', top: 0, zIndex: 2, display: 'flex', alignItems: 'center' }}>
                <IconButton sx={{ml:'auto'}} onClick={onMoreClick} ><MoreVert /></IconButton>
                <Chip size='small' sx={{ backdropFilter: 'blur(2px)' }} label={`${page}/${slides.length}`} />
            </Box>
            <Box sx={swiperContainer}>
                <Swiper
                    onActiveIndexChange={(swiper) => setPage(swiper.activeIndex + 1)}
                    pagination={{ clickable: true }}
                    modules={[Controller]}
                    onSwiper={(s) => setFirstSwiper(s)}
                    controller={{ control: secondSwiper }}
                >

                    {displayedImages}
                </Swiper>
            </Box>
            <Box sx={{ zIndex: 10, position: 'absolute', bottom: 0, textAlign: 'left', width: '100%' }}>
                {/* <Swiper
                  modules={[Controller, EffectFade]}
                  onSwiper={(s) =>setSecondSwiper(s)}
                  effect='fade'
                  fadeEffect={{crossFade: true}}
                  controller={{ control: firstSwiper }}
               >

               </Swiper> */}
                <Box sx={boxStyle}>

                    <AuthorHeader authorId='max' />

                    {displayedCaptions[page - 1]}
                <Box sx={{ml:1, mb:1}}>
                    <Chip sx={{mr:1}} size='small' label='good'/>
                    <Chip sx={{mr:1}} size='small' label='Bad'/>
                    <Chip sx={{mr:1}} size='small' label='Lol'/>
                    <Chip sx={{mr:1}} size='small' icon={<AddReactionIcon fontSize='small'/>} />
                    <IconButton size='small'><AddReactionIcon fontSize='small'/></IconButton>
                    <IconButton size='small'><ChatBubbleIcon fontSize='small'/></IconButton>
                </Box>
                </Box>
            </Box>
        </Box>
    )
}