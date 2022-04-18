import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper';
import 'swiper/css/bundle';

export default function Slider() {
    const img1 = '/img/home1.JPG';
    const img2 = '/img/home3.jpg';
    const img3 = '/img/home4.JPG';
    const duration = 5000;

    useEffect(() => {
        animatedTagline();
    }, []);

    const animatedTagline = () => {
        const infos = document.querySelectorAll('.slider-info-center');
        for (const info of infos) {
            info.classList.remove('fade-out');
            info.classList.add('fade-in');
            setTimeout(() => {
                info.classList.remove('fade-in');
                info.classList.add('fade-out');
            }, 4000);
        }
    };
    return (
        <Swiper
            id='main'
            tag='section'
            wrapperTag='ul'
            modules={[Pagination, EffectFade, Autoplay]}
            effect={'fade'}
            autoplay={{
                delay: duration,
                disableOnInteraction: false,
            }}
            pagination={true}
            onSlideChange={(swiper) => {
                animatedTagline();
            }}>
            <SwiperSlide>
                <img src={img1} style={{ listStyle: 'none' }} alt={'Gambar1'} />
                <div className='slider-info-center text-blue-100'>
                    <h2>This is our big tagline 1!</h2>
                    <h5>Here&apos;s our small slogan 1.</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} style={{ listStyle: 'none' }} alt={'Gambar1'} />
                <div className='slider-info-center text-blue-100'>
                    <h2>This is our big tagline 2!</h2>
                    <h5>Here&apos;s our small slogan 2.</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} style={{ listStyle: 'none' }} alt={'Gambar1'} />
                <div className='slider-info-center text-blue-100'>
                    <h2>This is our big tagline 3!</h2>
                    <h5>Here&apos;s our small slogan 3.</h5>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
