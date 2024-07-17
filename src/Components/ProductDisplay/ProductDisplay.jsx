import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import { ShopContext } from '../../Context/ShopContext';



const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <p>{product.rating}</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-new">₹ {product.new_price}</div>
            <p>Inclusive of all taxes*</p>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Brand :</span> {product.brand}</p>
        <p className='productdisplay-right-category'><span>Suitable for :</span> {product.suitable}</p>
        <p className='productdisplay-right-category'><span>Strap Material :</span> {product.strap_material}</p>
        <p className='productdisplay-right-category'><span>Function :</span> {product.function}</p>
      </div>
    </div>
  )
}

export default ProductDisplay;
