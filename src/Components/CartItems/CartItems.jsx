import React, { useContext, useState } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart, clearCart } = useContext(ShopContext);
    const [address, setAddress] = useState(''); // State to track address input
    const [error, setError] = useState(''); // State to track error messages

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleCheckout = () => {
        if (Object.values(cartItems).every(quantity => quantity === 0)) {
            alert('Your cart is empty. Please add products before proceeding.');
            return;
        }

        if (!address.trim()) { // Check if address is empty or contains only whitespace
            setError('Address is required*');
            return; // Do not proceed with checkout
        }
        
        setError(''); // Clear error message if address is provided
        clearCart(); // Clear the cart
        alert("Order successfully placed!");
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <React.Fragment key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt={`${e.name}`} className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>₹{e.new_price}</p>
                                <p>{cartItems[e.id]}</p>
                                <p>₹{e.new_price * cartItems[e.id]}</p>
                                <img
                                    className='cartitems-remove-icon'
                                    src={remove_icon}
                                    onClick={() => removeFromCart(e.id)}
                                    alt="Remove item from cart"
                                />
                            </div>
                            <hr />
                        </React.Fragment>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-promocode">
                    <p>Enter Your Address</p>
                    <div className="cartitems-promobox">
                        <textarea
                            placeholder='Ex: 6, Green Garden, Towncity'
                            rows="5"
                            cols="35"
                            className="cartitems-address-input"
                            value={address}
                            onChange={handleAddressChange}
                            required
                        />
                    </div>
               
                    {error && <p className="cartitems-error">{error}</p>} 
                </div>
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>₹{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
