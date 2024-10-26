import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js';
import styles from './CheckoutButton.module.css';

const CheckoutButton = ({ cartItems }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Function to calculate the total cart amount
  useEffect(() => {
    const calculateCartTotal = () => {
      const total = cartItems.reduce((total, item) => {
        if (typeof item.price !== 'number' || typeof item.quantity !== 'number') {
          console.error(`Invalid item: ${JSON.stringify(item)}`);
          return total; // Skip invalid items
        }
        return total + (item.price * item.quantity);
      }, 0);
      return Math.round(total * 100);
    };
  
    const cartTotal = calculateCartTotal();

    // Ensure amount is valid
    if (cartTotal <= 0) {
      console.error('Invalid total amount: ', cartTotal);
      setError('Total amount must be greater than zero.');
      return;
    }

    fetch('http://localhost:3000/create-payment-intent', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: cartTotal }) // Send total amount (in cents)
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
  }, [cartItems]); // Use cartItems as the dependency

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
