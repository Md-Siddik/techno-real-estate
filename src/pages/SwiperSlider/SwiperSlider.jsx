import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperSlider = () => {
    return (
        <div className='h-[500px]'>
            <Swiper
                // install Swiper modules
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
            >
                <SwiperSlide>
                    <div className='h-[500px] bg-green-500 slide_bg1 bg_properties'>
                        <h1 className='text-4xl'>Slider 1</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] bg-green-500 slide_bg2 bg_properties'>
                        <h1 className='text-4xl'>Slider 2</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] bg-green-500 slide_bg3 bg_properties'>
                        <h1 className='text-4xl'>Slider 3</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] bg-green-500 slide_bg4 bg_properties'>
                        <h1 className='text-4xl'>Slider 4</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperSlider;