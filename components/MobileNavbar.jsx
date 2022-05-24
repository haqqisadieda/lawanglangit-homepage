/* eslint-disable react/prop-types */
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function MobileNavbar({ navlist, menuHandler, closeHandler }) {
    return (
        <div className='inline md:hidden  header min-w-full bg-blue-400'>
            <div className='flex mx-auto px-10 py-4 md:px-10 md:py-4 lg:px-32 lg:py-6'>
                <div className='w-full md:w-3/12 m-auto text-xl lg:text-2xl text-blue-100 tracking-widest font-semibold'>
                    <Link href='/'>
                        <a className='hover:drop-shadow-sm hover:text-white'>
                            Lawang Langit
                        </a>
                    </Link>
                </div>
                <div className='w-9/12 m-auto text-right'>
                    <FaBars
                        className='inline-block fill-white cursor-pointer w-6 h-6'
                        onClick={menuHandler.bind(this)}
                    />
                </div>
                <div className='fixed bg-blue-400 z-10 -right-full top-0 h-full w-full py-10 transition-all ease-in-out wrapper'>
                    <FaTimes
                        className='absolute top-16 left-[50%] translate-x-[-50%] fill-white cursor-pointer close w-8 h-8'
                        onClick={closeHandler.bind(this)}
                    />
                    <div className='flex flex-col text-lg font-semibold tracking-wider text-center p-32 space-y-10'>
                        <Link href='/'>
                            <a
                                className={`hover-underline-animation text-blue-100 font-semibold ${
                                    navlist === 0 ? 'navlist-active' : ''
                                }`}>
                                Home
                            </a>
                        </Link>
                        <Link href='/about'>
                            <a
                                className={`hover-underline-animation text-blue-100 font-semibold ${
                                    navlist === 1 ? 'navlist-active' : ''
                                }`}>
                                About
                            </a>
                        </Link>
                        <Link href='/program'>
                            <a
                                className={`hover-underline-animation text-blue-100 font-semibold ${
                                    navlist === 2 ? 'navlist-active' : ''
                                }`}>
                                Program
                            </a>
                        </Link>
                        <Link href='/donate'>
                            <a className='text-yellow-400 border-2 border-yellow-400 hover:text-blue-500 hover:border-transparent hover:bg-yellow-400 hover:shadow-lg hover:transition-all hover:duration-300 hover:ease-in rounded-full px-8 py-2 inline-block'>
                                Donate Now!
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
