import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperSlider = () => {
    return (
        <div className='h-[400px]'>
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
                    <div className='h-[400px] bg-green-500'>
                        <h1 className='text-4xl'>Slider 1</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[400px] bg-green-500'>
                        <h1 className='text-4xl'>Slider 2</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[400px] bg-green-500'>
                        <h1 className='text-4xl'>Slider 3</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[400px] bg-green-500'>
                        <h1 className='text-4xl'>Slider 4</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperSlider;