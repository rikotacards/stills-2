
import { Box, Chip, IconButton } from '@mui/material';
import React from 'react';
import { Caption } from './Caption';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, EffectFade, Pagination } from 'swiper/modules';
import { MoreVert } from '@mui/icons-material';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './Slides.css'
import 'swiper/css/controller';
interface SlidesProps {
    slides: { imagePath: string, caption: string }[]
    postId: string;
    children?: React.ReactNode
}
// image conforms to parent div
const imageStyles = {
    height: '600px',
    width: '100%',
    display: 'flex',
    marginLeft: 'auto',
   
    objectFit: 'cover',
    position: 'relative'

}
import { EditPost } from './EditPost';
import { useDrawerContext } from '../providers/DrawerProvider';
import { AuthorHeader } from './AuthorHeader';
import { Reactions } from './Reactions';
const swiperContainer = { display: 'flex', flexDirection: 'row' }
export const Slides: React.FC<SlidesProps> = ({ children, slides, postId }) => {
    const [firstSwiper, setFirstSwiper] = React.useState(null);
    const [secondSwiper, setSecondSwiper] = React.useState(null);
    const drawerContext = useDrawerContext();
    const boxStyle = {
        pt: 1,
        pb: 1,



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
            flexDirection: 'column',

        }}>
            <Box sx={{pr:1, width: '100%', position: 'absolute', top: 0, zIndex: 2, display: 'flex', alignItems: 'center' }}>
                <IconButton sx={{ ml: 'auto' }} onClick={onMoreClick} ><MoreVert /></IconButton>
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
                <Box sx={{ boxStyle }} className={slides?.[page-1]?.caption?.length === 0 ? undefined : 'bottom'}>

                    <AuthorHeader postId={postId} authorId='max' />
                    <Box sx={{ display: 'flex', alignItems: 'center', mb:1 }}>
                        <Box>

                            {displayedCaptions[page - 1]}
                        </Box>
                        {/* <IconButton sx={{ml: 'auto', mr:1}} onClick={onCommentsClick} size='small'><ChatBubbleOutlineIcon fontSize='small' /></IconButton> */}
                    </Box>


                    <Box sx={{ ml: 1, pb:1, display: 'flex', mr: 1, alignItems: 'center' }}>
{false &&                        <Reactions postId={postId} />}
                        <Box sx={{ ml: 'auto', display: 'flex' }}>

                            {/* <IconButton onClick={onReactionClick} size='small'><AddReactionIcon fontSize='small' /></IconButton>
                            <IconButton onClick={onCommentsClick} size='small'><ChatBubbleIcon fontSize='small' /></IconButton> */}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}