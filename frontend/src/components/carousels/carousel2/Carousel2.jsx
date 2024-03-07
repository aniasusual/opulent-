import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './carousel2.scss';

// import required modules
import { Pagination } from 'swiper/modules';
import images from "../../../data/imagesCarousel2.json"

export default function App() {
  return (
    <div className='carousel2'>




      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {images.map((image) => {
          return (
            <SwiperSlide>
              <img src={image.url} alt={images.heading} className='imageCarousel2' />
              <div>
                <h2>{image.heading}</h2>
                <Link><span>Shop now &gt;</span></Link>
              </div>
            </SwiperSlide>
          )
        })}



        {/* <SwiperSlide>
          <img src="https://source.unsplash.com/random/900×700/?rings" className='imageCarousel2' />
          <div>
            <h2>Engagement Rings</h2>
            <span>Shop now &gt;</span>
          </div>
        </SwiperSlide> */}

        {/* <SwiperSlide>
          <img src="https://source.unsplash.com/random/900×700/?jewels" className='imageCarousel2' />
          <div>
            <h2>Engagement Rings</h2>
            <span>Shop now &gt;</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/900×700/?weddingbands" className='imageCarousel2' />
          <div>
            <h2>Engagement Rings</h2>
            <span>Shop now &gt;</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/900×700/?necklace" className='imageCarousel2' />
          <div>
            <h2>Engagement Rings</h2>
            <span>Shop now &gt;</span>
          </div>
        </SwiperSlide> */}

      </Swiper>
    </div>
  );
}
