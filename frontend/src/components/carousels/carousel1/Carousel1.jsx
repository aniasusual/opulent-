import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './carousel1.scss';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useSelector, useDispatch } from "react-redux"
import { useAlert } from 'react-alert';



import images from "../../../data/imagesCarousel1.json"

export default function App() {

    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products, productsCount } = useSelector((state) => state.products);

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


                {/* {
                    images.map((image) => {
                        return (
                            <SwiperSlide>
                                <img src={image.url} alt=""/>
                                <button>Buy item</button>
                            </SwiperSlide>
                        )
                    })
                } */}

                {products.map(product => {
                    return (
                        <SwiperSlide>
                            <img src={product.images[0].url} alt={product.category} className='imageCarousel2' />
                            <Link to={`/product/${product._id}`}><button>Buy item</button></Link>


                            {/* <div>
                                <h2>{product.category}</h2>
                                <Link><span>Shop now &gt;</span></Link>
                            </div> */}
                        </SwiperSlide>
                    )
                })}

                <div id='drag-slide'>Drag/slide</div>
            </Swiper>
        </div>
    );
}
