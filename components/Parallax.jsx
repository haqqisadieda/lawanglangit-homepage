/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';

export default function ParallaxHandler({ children, image }) {
    return (
        <Parallax
            className='parallax-container w-full h-full rounded-3xl bg-blue-400'
            bgImage={image}
            strength={800}>
            <div className='content'>{children}</div>
        </Parallax>
    );
}
