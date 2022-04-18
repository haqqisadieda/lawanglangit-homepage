/* eslint-disable react/prop-types */
import Link from 'next/link';

export default function Navbar({ navlist }) {
    return (
        <div className='container min-w-full bg-blue-400'>
            <div className='flex mx-auto px-32 py-6'>
                <div className='w-3/12 text-2xl text-blue-100 tracking-widest font-semibold'>
                    <Link href='/'>
                        <a className='hover:drop-shadow-sm hover:text-white'>
                            Lawang Langit
                        </a>
                    </Link>
                </div>
                <div className='w-9/12 space-x-10 text-right'>
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
                        <a className=':text-base text-yellow-400 border-2 border-yellow-400 hover:text-blue-500 hover:border-transparent hover:bg-yellow-400 hover:shadow-lg hover:transition-all hover:duration-300 hover:ease-in rounded-full px-8 py-2 inline-block'>
                            Donate Now!
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
