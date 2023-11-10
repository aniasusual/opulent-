import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './carousel1.scss';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


import images from "../../../data/imagesCarousel1.json"

export default function App() {
    return (
        <div div className="carousel1">

            
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                >
                    

                {
                    images.map((image) => {
                        return (
                            <SwiperSlide>
                                <img src={image.url} alt=""/>
                                <button>buy item</button>
                            </SwiperSlide>
                        )
                    })
                }

                <div id='drag-slide'>Drag/slide</div>
            </Swiper>
        </div>
    );
}
