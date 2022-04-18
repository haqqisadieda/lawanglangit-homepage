import Layout from '../components/Layout';
import Head from 'next/head';
import ParallaxHandler from '../components/Parallax';
import SliderHero from '../components/SliderHero';
import Strategies from '../components/Strategies';
import StrategiesLists from '../components/StrategiesLists';
import { SwiperSlide } from 'swiper/react';
import {
    FcComboChart,
    FcGraduationCap,
    FcLibrary,
    FcBusinessman,
    FcBusinesswoman,
} from 'react-icons/fc';
import Quotes from '../components/Quotes';
import SliderTestimoni from '../components/SliderTestimoni';

export default function Index() {
    const navlist = 0;
    const img = '/img/home3.jpg';
    return (
        <Layout navlist={navlist}>
            <Head>
                <title>Home</title>
            </Head>
            <SliderHero />
            <div className='mx-auto text-center text-slate-700 p-20'>
                <h1 className='font-light text-5xl mb-10'>Our Strategies</h1>
                <hr className='horizontal-line' />
                <p className='font-light text-2xl mb-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur cupiditate eius facere perferendis sit, itaque
                    est, odit, omnis in sapiente corporis quod quisquam
                    praesentium quaerat? Possimus quos esse ea est!
                </p>
                <Strategies>
                    <StrategiesLists>
                        <FcLibrary className='mx-auto text-9xl' />
                        <h5 className='text-gray-900 text-xl leading-tight font-medium mb-4'>
                            1. Fasilitasi
                        </h5>
                        <p className='text-gray-700 text-base mb-4'>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </StrategiesLists>
                    <StrategiesLists>
                        <FcGraduationCap className='mx-auto text-9xl' />
                        <h5 className='text-gray-900 text-xl leading-tight font-medium mb-4'>
                            2. Beasiswa
                        </h5>
                        <p className='text-gray-700 text-base mb-4'>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </StrategiesLists>
                    <StrategiesLists>
                        <FcComboChart className='mx-auto text-9xl' />
                        <h5 className='text-gray-900 text-xl leading-tight font-medium mb-4'>
                            3. Pemberdayaan
                        </h5>
                        <p className='text-gray-700 text-base mb-4'>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </StrategiesLists>
                </Strategies>
            </div>
            <div className='w-full'>
                <Quotes>
                    <div className='text-slate-200 text-2xl text-shadow text-center'>
                        <span className='text-4xl'>&ldquo;</span>Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Rem a ad
                        facere numquam nesciunt nisi blanditiis culpa libero
                        reprehenderit. Perspiciatis unde provident ad, itaque
                        alias accusamus minus nostrum perferendis at.
                        <span className='text-4xl'>&rdquo;</span>
                    </div>
                </Quotes>
            </div>
            <div className='mx-auto text-center text-slate-700 p-20'>
                <h1 className='font-light text-5xl mb-10'>Donate Now</h1>
                <hr className='horizontal-line' />
                <p className='font-light text-2xl mb-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur cupiditate eius facere perferendis sit, itaque
                    est, odit, omnis in sapiente corporis quod quisquam
                    praesentium quaerat? Possimus quos esse ea est!
                </p>
                <Strategies>
                    <StrategiesLists>
                        <FcBusinessman className='mx-auto text-9xl' />
                        <h5 className='text-gray-900 text-xl leading-tight font-medium mb-4'>
                            Nama Adik
                        </h5>
                        <p className='text-gray-700 text-base mb-4'>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                        <button
                            type='button'
                            className=' inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                            Donate Now!
                        </button>
                    </StrategiesLists>
                    <StrategiesLists>
                        <FcBusinesswoman className='mx-auto text-9xl' />
                        <h5 className='text-gray-900 text-xl leading-tight font-medium mb-4'>
                            Nama Adik
                        </h5>
                        <p className='text-gray-700 text-base mb-4'>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                        <button
                            type='button'
                            className=' inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                            Donate Now!
                        </button>
                    </StrategiesLists>
                    <StrategiesLists>
                        <FcBusinessman className='mx-auto text-9xl' />
                        <h5 className='text-gray-900 text-xl leading-tight font-medium mb-4'>
                            Nama Adik
                        </h5>
                        <p className='text-gray-700 text-base mb-4'>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                        <button
                            type='button'
                            className=' inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                            Donate Now!
                        </button>
                    </StrategiesLists>
                </Strategies>
            </div>
            <ParallaxHandler image={img}>
                <div className='mx-auto text-center text-slate-700 p-20'>
                    <h1 className='font-light text-slate-100 text-5xl text-shadow mb-10'>
                        Testimonials
                    </h1>
                    <hr className='horizontal-line-white text-shadow' />
                    <SliderTestimoni>
                        <SwiperSlide>
                            <div className='mx-auto'>
                                <p className='text-slate-300 text-shadow text-lg px-4 mb-4'>
                                    <span className='text-2xl'>&ldquo;</span>{' '}
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Asperiores cupiditate,
                                    tempora perspiciatis doloremque aliquam
                                    neque aut voluptatibus quidem est
                                    accusantium laudantium. Aperiam impedit
                                    exercitationem quae aliquid ipsam incidunt
                                    corporis? Quidem?{' '}
                                    <span className='text-2xl'>&rdquo;</span>
                                </p>
                                <p className='text-slate-300 text-shadow'>
                                    &mdash; Nama
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='mx-auto'>
                                <p className='text-slate-300 text-shadow text-lg px-4 mb-4'>
                                    <span className='text-2xl'>&ldquo;</span>{' '}
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Asperiores cupiditate,
                                    tempora perspiciatis doloremque aliquam
                                    neque aut voluptatibus quidem est
                                    accusantium laudantium. Aperiam impedit
                                    exercitationem quae aliquid ipsam incidunt
                                    corporis? Quidem?{' '}
                                    <span className='text-2xl'>&rdquo;</span>
                                </p>
                                <p className='text-slate-300 text-shadow'>
                                    &mdash; Nama
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='mx-auto'>
                                <p className='text-slate-300 text-shadow text-lg px-4 mb-4'>
                                    <span className='text-2xl'>&ldquo;</span>{' '}
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Asperiores cupiditate,
                                    tempora perspiciatis doloremque aliquam
                                    neque aut voluptatibus quidem est
                                    accusantium laudantium. Aperiam impedit
                                    exercitationem quae aliquid ipsam incidunt
                                    corporis? Quidem?{' '}
                                    <span className='text-2xl'>&rdquo;</span>
                                </p>
                                <p className='text-slate-300 text-shadow'>
                                    &mdash; Nama
                                </p>
                            </div>
                        </SwiperSlide>
                    </SliderTestimoni>
                </div>
            </ParallaxHandler>
            <div className='mx-auto text-center text-slate-700 p-20'>
                <h1 className='font-light text-5xl mb-10'>About Us</h1>
                <hr className='horizontal-line' />
                <p className='font-light text-2xl mb-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur cupiditate eius facere perferendis sit, itaque
                    est, odit, omnis in sapiente corporis quod quisquam
                    praesentium quaerat? Possimus quos esse ea est!
                </p>
            </div>
        </Layout>
    );
}
