import React from 'react'
import "./home.scss"
import Carousel1 from '../../components/carousels/carousel1/Carousel1'
import Carousel2 from '../../components/carousels/carousel2/Carousel2'
import ConsultExpert from '../../components/consultExperts/ConsultExpert'
import Speciality from '../../components/speciality/Speciality'
import { Link } from 'react-router-dom'
import Metadata from "../../components/layout/metadata/Metadata"
import ShopFeatured from "../ShopFeatured/ShopFeatured"

const Home = () => {
  return (
    <div>

      <Metadata title="Opulent Ornaments" />

      <div className="homeSection1">
        <img src="https://source.unsplash.com/random/900×700/?couples" alt="" />
        <div>
          <h3>Your journey begins now</h3>
          <h1>Fall in love</h1>
          <Link to="/shop"><button className='buttonOverImage'>Shop</button></Link>
        </div>
      </div>

      <ShopFeatured/>

      <div className="homeSection2">

        <div className="carousel2Home">
          <h1>Our Selections</h1>
        </div>
        <Carousel2 />


        <ConsultExpert />


        <div className="descCarousel2">
          <h1>Shop by style</h1>
          <span id='description'>Discover diverse engagement ring styles, each embodying a distinct symbol of love and devotion</span>
        </div>
        <Carousel1 />


        <Speciality />

        <div className="descCarousel2">
          <h1>Shop by shape</h1>
          <span id='description'>Explore our curated selection, categorized by diamond shape, to find your perfect expression of elegance. </span>
        </div>
        <Carousel1 />
      </div>


      <div className="carousel2Home">
        <h1>Our Best Sellers</h1>
      </div>
      <Carousel2 />
    </div>
  )
}

export default Home;
