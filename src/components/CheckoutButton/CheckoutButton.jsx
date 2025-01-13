import React, { useState, useEffect, useContext } from 'react';
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js';
import styles from './CheckoutButton.module.css';
import { useNavigate } from "react-router-dom";  
import { CartContext } from '../../context/CartContext';


const CheckoutButton = ({ cartItems, submitCartToBackend}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);


  const getCartNames = () => {
    return cartItems.map((item) => item.name);
  };

  const sendEmail = async () => {
    const userEmail = localStorage.getItem("userEmail");
    const items = getCartNames();
    const payload = { userEmail, items };
  
    try {
      const response = await fetch("http://localhost/email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText); // Log raw response
        throw new Error("Failed to send email");
      } else if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("Email sent successfully:", data);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  

  // Function to calculate the total cart amount
  useEffect(() => {
    const calculateCartTotal = () => {
      const total = cartItems.reduce((total, item) => {
        // Convert price to a number before doing the calculation
        const price = parseFloat(item.price);  // Or you could use `Number(item.price)`
        const quantity = item.quantity;
    
        if (isNaN(price) || typeof quantity !== 'number') {
          console.error(`Invalid item: ${JSON.stringify(item)}`);
          return total; // Skip invalid items
        }
    
        return total + (price * quantity);
      }, 0);
    
      return Math.round(total * 100); // Convert to cents
    };

    
    
  
    const cartTotal = calculateCartTotal();
    console.log("Calculated cart total:", cartTotal); // Log the total for debugging
  
    // Ensure amount is valid
    if (cartTotal <= 0) {
      console.error('Invalid total amount: ', cartTotal);
      setError('Total amount must be greater than zero.');
      return;
    }
  
    fetch('http://localhost/create-payment-intent.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: cartTotal }), // Send total amount (in cents)
    })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch client secret');
        return response.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret); // Set client secret from backend
      })
      .catch((error) => {
        console.error('Error fetching client secret:', error);
        setError('Failed to initialize payment.');
      });
  }, [cartItems]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardNumberElement,
      },
    });

    if (result.error) {
      setError(result.error.message);
      setSuccess(false);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        setSuccess(true);
        setError(null);
        console.log('Payment successful!', result.paymentIntent);
        sendEmail();

        submitCartToBackend();
        navigate('/successful');
        clearCart();
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.inputGroup}>
          <label>Card Number</label>
          <CardNumberElement className={styles.checkoutInput} />
        </div>
        <div className={styles.inputGroup}>
          <label>Expiry Date</label>
          <CardExpiryElement className={styles.checkoutInput} />
        </div>
        <div className={styles.inputGroup}>
          <label>CVV</label>
          <CardCvcElement className={styles.checkoutInput} />
        </div>
        <button type="submit" disabled={!stripe || !clientSecret} className={styles.button}>
          Pay
        </button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>Payment Successful!</div>}
    </div>
  );
};

export default CheckoutButton;

