import React, { useContext } from 'react';
import styles from './Cart.module.css';
import Header from '../../components/Header/Header';
import CheckoutButton from '../../components/CheckoutButton/CheckoutButton';
import { CartContext } from '../../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  const storedUsername = localStorage.getItem("userEmail");

  const submitCartToBackend = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    cartItems.forEach(item => {
      const cartData = {
        gear_id: item.id,
        username: storedUsername,
        rent_date: new Date().toISOString().slice(0, 10),
        price: item.price * item.quantity,
      };

      fetch('http://localhost/save-purchase.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartData),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Response from backend:', data);
          if (data.status === 'success') {
            // alert(`Item "${item.name}" successfully submitted!`);
          } else {
            // alert(`Error submitting item "${item.name}": ${data.message}`);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert(`Failed to submit item "${item.name}" to the backend.`);
        });
    });
  };

  return (
    <>
      <Header />
      <h1 className={styles.title}>Cart Page</h1>
      {cartItems.length === 0 ? (
        <p className={styles.emptyCart}>Your cart is empty.</p>
      ) : (
        <div className={styles.cartContainer}>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${Number(item.price).toFixed(2)}</td>
                  <td>
                    <input 
                      type="number" 
                      min="1" 
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className={styles.quantityInput}
                    />
                  </td>
                  <td>${Number(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button 
                      className={styles.removeButton} 
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.total}>
            <h2>Total: ${totalAmount}</h2>
          </div>
          <CheckoutButton cartItems={cartItems} submitCartToBackend={submitCartToBackend}/>
          <button className={styles.clearCartButton} onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
}

export default Cart;
