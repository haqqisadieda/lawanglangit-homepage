/* eslint-disable react/prop-types */
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children, navlist }) {
    return (
        <div className='flex flex-col h-[100vh]'>
            <Navbar navlist={navlist} />
            <div className='flex-grow'>{children}</div>
            <Footer />
        </div>
    );
}
