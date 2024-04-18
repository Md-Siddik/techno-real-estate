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
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {}}
                onSlideChange={() => {}}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className='h-[500px] slide_bg1 bg_properties flex justify-center items-center'>
                        <div className='text-center'>
                            <h1 className='text-4xl text-black font-bold pb-6'>Dream Home Discoveries</h1>
                            <p className='text-2xl text-black'>Discover expert tips for finding your ideal home</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] slide_bg2 bg_properties flex justify-center items-center'>
                        <div className='text-center'>
                            <h1 className='text-4xl text-black font-bold pb-6'>Home Sweet Home</h1>
                            <p className='text-2xl text-black'>Gain market insights for buying or selling with confidence</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] slide_bg3 bg_properties flex justify-center items-center'>
                        <div className='text-center'>
                            <h1 className='text-4xl text-black font-bold pb-6'>Beyond the Bricks</h1>
                            <p className='text-2xl text-black'>Explore innovative design ideas to create your dream home</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] slide_bg4 bg_properties flex justify-center items-center'>
                        <div className='text-center'>
                            <h1 className='text-4xl text-black font-bold pb-6'>Investing in Residential</h1>
                            <p className='text-2xl text-black'>Learn to build wealth through residential property investment</p>
                            <button className='btn text-xl mt-8'>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperSlider;