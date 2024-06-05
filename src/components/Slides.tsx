
import { Box, Chip, IconButton, Typography } from '@mui/material';
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
    authorId?: string;
    isDraft: boolean;
}

import { EditPost } from './EditPost';
import { useDrawerContext } from '../providers/DrawerProvider';
import { AuthorHeader } from './AuthorHeader';
import { Reactions } from './Reactions';
import { ImageWithLoading } from './ImageWithLoading';
const swiperContainer = { display: 'flex', flexDirection: 'row' }
export const Slides: React.FC<SlidesProps> = ({isDraft, authorId, slides, postId }) => {
    const [firstSwiper, setFirstSwiper] = React.useState(null);
    const [secondSwiper, setSecondSwiper] = React.useState(null);
    const drawerContext = useDrawerContext();
    const boxStyle = {
        pt: 4,
        pb: 2,
        pl:1,
        pr:1,
        background: `linear-gradient(
            to bottom,
            hsla(0, 0%, 0%, 0) 0%,
          hsla(0, 0%, 0%, 0.01) 4.1%,
          hsla(0, 0%, 0%, 0.036) 7.8%,
          hsla(0, 0%, 0%, 0.078) 11.2%,
          hsla(0, 0%, 0%, 0.132) 14.5%,
          hsla(0, 0%, 0%, 0.195) 17.9%,
          hsla(0, 0%, 0%, 0.266) 21.7%,
          hsla(0, 0%, 0%, 0.34) 25.9%,
          hsla(0, 0%, 0%, 0.417) 30.8%,
          hsla(0, 0%, 0%, 0.492) 36.6%,
          hsla(0, 0%, 0%, 0.564) 43.4%,
          hsla(0, 0%, 0%, 0.63) 51.5%,
          hsla(0, 0%, 0%, 0.687) 61%,
          hsla(0, 0%, 0%, 0.733) 72.1%,
          hsla(0, 0%, 0%, 0.765) 85.1%,
          hsla(0, 0%, 0%, 0.78) 100%
          )`



    }


    // .forNow {
    //     linear-gradient(
    //       to bottom,
    //       hsla(0, 0%, 0%, 0) 0%,
    //       hsla(0, 0%, 0%, 0.008) 5.4%,
    //       hsla(0, 0%, 0%, 0.03) 9.6%,
    //       hsla(0, 0%, 0%, 0.065) 12.7%,
    //       hsla(0, 0%, 0%, 0.111) 15.2%,
    //       hsla(0, 0%, 0%, 0.165) 17.5%,
    //       hsla(0, 0%, 0%, 0.228) 19.8%,
    //       hsla(0, 0%, 0%, 0.295) 22.5%,
    //       hsla(0, 0%, 0%, 0.367) 26%,
    //       hsla(0, 0%, 0%, 0.441) 30.5%,
    //       hsla(0, 0%, 0%, 0.515) 36.5%,
    //       hsla(0, 0%, 0%, 0.588) 44.3%,
    //       hsla(0, 0%, 0%, 0.658) 54.2%,
    //       hsla(0, 0%, 0%, 0.722) 66.5%,
    //       hsla(0, 0%, 0%, 0.78) 81.7%,
    //       hsla(0, 0%, 0%, 0.83) 100%
    //     );
    //   };

    const [page, setPage] = React.useState(1);
    // from docs

    const displayedImages = slides.map((s, i) =>
        <SwiperSlide
            key={i}
        >

            <ImageWithLoading imagePath={s.imagePath}/>

        </SwiperSlide>
    )
    const displayedCaptions = slides.map((s, i) =>
        <Box

            key={s.caption + i}
        >


            <Caption caption={s.caption} pages={slides.length} currIndex={page}/>


        </Box>
    )
    const onMoreClick = () => {
        drawerContext.setComponent(<EditPost
             isDraft={isDraft} postId={postId} />)
        drawerContext.onOpen();
    }
   

    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            //  width: '100%', 
            flexDirection: 'column',

        }}>
            <Box sx={{mt:1, pr:1, width: '100%', position: 'absolute', top: 0, zIndex: 2, display: 'flex', alignItems: 'center' }}>
              
                <IconButton  sx={{ml:'auto'}} onClick={onMoreClick} ><MoreVert /></IconButton>
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
                <Box sx={ boxStyle } >

                    <AuthorHeader postId={postId} authorId={authorId || ''} />
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb:1 }}>
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