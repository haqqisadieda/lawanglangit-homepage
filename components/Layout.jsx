/* eslint-disable react/prop-types */
import Footer from './Footer';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';

export default function Layout({ children, navlist }) {
    const menuHandler = (e) => {
        const wrapper = document.querySelector('.wrapper');
        const layout = document.querySelector('.layout');

        if (wrapper.classList.contains('-right-full')) {
            wrapper.classList.remove('-right-full');
            layout.classList.add('overflow-hidden');
            wrapper.classList.add('right-0');
        }
    };

    const closeHandler = (e) => {
        console.log('close clicked');
        const wrapper = document.querySelector('.wrapper');
        const layout = document.querySelector('.layout');

        if (wrapper.classList.contains('right-0')) {
            wrapper.classList.remove('right-0');
            layout.classList.remove('overflow-hidden');
            wrapper.classList.add('-right-full');
        }
    };
    return (
        <div className='flex flex-col h-[100vh] layout'>
            <Navbar navlist={navlist} />
            <MobileNavbar
                navlist={navlist}
                menuHandler={menuHandler}
                closeHandler={closeHandler}
            />
            <div className='flex-grow'>{children}</div>
            <Footer />
        </div>
    );
}
