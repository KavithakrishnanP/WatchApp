import React from 'react';
import './Offers.css';
import hero from '../Assets/hero.png';
import { useNavigate } from 'react-router-dom';

const Offers = () => {
  const navigate = useNavigate();

  const handleNavigateToMensPage = () => {
    navigate('/mens');
  };
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Best Collections </h1>
        <h1> For Mens</h1>
        <button onClick={handleNavigateToMensPage}>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Offers
