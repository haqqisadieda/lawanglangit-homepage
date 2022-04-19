import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='flex mx-auto text-blue-400 py-5 px-20 border-4 border-blue-300 rounded-3xl'>
                <div className='w-1/2 '>
                    <Link href='/'>
                        <a className='text-2xl tracking-widest font-semibold hover:drop-shadow-sm'>
                            Lawang Langit
                        </a>
                    </Link>
                    <p className='text-sm'>
                        Copyright &copy; 2022 Pandega Haqqi Sadieda
                    </p>
                </div>
                <div className='w-1/2 text-right'>
                    <p className='font-semibold mb-4'>Kontak</p>
                    <p>
                        <Link href='https://www.instagram.com/aggeegga/'>
                            <a>
                                aggeegga <FaInstagram className='inline' />
                            </a>
                        </Link>
                    </p>
                    <p>
                        <Link href='https://github.com/haqqisadieda'>
                            <a>
                                haqqisadieda <FaGithub className='inline' />
                            </a>
                        </Link>
                    </p>
                    <p>
                        <Link href='https://www.linkedin.com/in/pandegahaqqisadieda/'>
                            <a>
                                Pandega Haqqi Sadieda{' '}
                                <FaLinkedin className='inline' />
                            </a>
                        </Link>
                    </p>
                    <p>
                        haqqisadiedapandega@gmail.com{' '}
                        <FaEnvelope className='inline' />
                    </p>
                </div>
            </div>
        </div>
    );
}
