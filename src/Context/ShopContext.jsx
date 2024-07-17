import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

// Initialize cart with default values
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Add an item to the cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1
        }));
    };

    // Remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newQuantity = prev[itemId] - 1;
            return {
                ...prev,
                [itemId]: newQuantity > 0 ? newQuantity : 0 // Prevent negative quantities
            };
        });
    };

    // Clear the cart
    const clearCart = () => {
        setCartItems(getDefaultCart());
    };

    // Calculate total amount of items in the cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += cartItems[item] * itemInfo.new_price;
                }
            }
        }
        return totalAmount;
    };

    // Calculate total number of items in the cart
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    // Provide context values
    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart // Added clearCart function
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
