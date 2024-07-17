import React from "react";
import "./DescriptionBox.css";
import shipping from "../Assets/shipping.png";
import warranty from "../Assets/warranty.png";
import easyreturn from "../Assets/easyreturn.png";
import pay from "../Assets/pay.png"

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-description">
        <p>
         <img className="shipping" src={shipping} alt=""/>
         <p>Free Delivery </p>
        </p>
        <p>
         <img className="shipping" src={warranty} alt=""/>
         <p>1 year warranty</p>
        </p>
        <p>
         <img className="shipping" src={ easyreturn} alt=""/>
         <p> Easy Return</p>
        </p>
        <p>
         <img className="shipping" src={pay} alt=""/>
         <p> pay on Delivery</p>
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
