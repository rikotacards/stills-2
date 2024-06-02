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

const swiperContainer = { display: 'flex', flexDirection: 'row' }
export const Slides: React.FC<SlidesProps> = ({ slides, postId }) => {
    const [firstSwiper, setFirstSwiper] = React.useState(null);
    const [secondSwiper, setSecondSwiper] = React.useState(null);
    const drawerContext = useDrawerContext();

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
        <SwiperSlide
        
            key={s.caption + i}
            style={{ display: 'flex', flexDirection: 'column' }}
        >


            <Caption caption={s.caption} />


        </SwiperSlide>
    )
    const onMoreClick = () => {
        drawerContext.setComponent(<EditPost postId={postId}/>)
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
                <Chip size='small' sx={{ ml: 'auto', backdropFilter: 'blur(2px)' }} label={`${page}/${slides.length}`} />
                <IconButton onClick={onMoreClick} ><MoreVert /></IconButton>
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
                           <AuthorHeader authorId='max' />

                {displayedCaptions[page-1]}
            </Box>
        </Box>
    )
}