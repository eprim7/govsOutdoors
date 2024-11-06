import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (!isLoggedIn) {
            alert('You must be logged in to add items to your cart.');
            return;
        }
        setCartItems((prevCartItems) => {
            const existingItemIndex = prevCartItems.findIndex(item => item.id === product.id);
            if (existingItemIndex >= 0) {
                const updatedItems = [...prevCartItems];
                updatedItems[existingItemIndex].quantity += 1;
                return updatedItems;
            }
            return [...prevCartItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
        setCartItems(prevCartItems => 
            prevCartItems.map(item => 
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};


