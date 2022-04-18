import { Swiper } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css/bundle';

export default function SliderTestimoni({ children }) {
    return (
        <Swiper
            id='swiper-testimoni'
            tag='section'
            modules={[Pagination, Autoplay]}
            slidesPerView={'3'}
            spaceBetween={40}
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
            }}>
            {children}
        </Swiper>
    );
}
