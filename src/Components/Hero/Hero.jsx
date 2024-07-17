import React from 'react'
import './Hero.css';
import banner1 from "../Assets/banner1.jpg";

const Hero = () => {
  return (
    
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100" alt="..." />
    </div>
  </div>

  )
}

export default Hero;
