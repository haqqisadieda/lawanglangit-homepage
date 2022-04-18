/* eslint-disable react/prop-types */
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children, navlist }) {
    return (
        <div>
            <Navbar navlist={navlist} />
            {children}
            <Footer />
        </div>
    );
}
