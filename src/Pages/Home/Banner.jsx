import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <>
            <Carousel>

                <div>
                  
                    <img src="https://i.ibb.co/jHNzwBD/a.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/qmVSB8h/b.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/jRhdX21/iii.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/CbmJVdv/k.jpg" />
                </div>
            </Carousel>
        </>
    );
};

export default Banner;