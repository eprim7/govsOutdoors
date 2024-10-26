require('dotenv').config();
const express = require('express');
const cors = require('cors');  // Import cors
const Stripe = require('stripe');

// Initialize express app
const app = express();

// Enable CORS
app.use(cors());  // Use cors middleware

// Middleware to parse JSON requests
app.use(express.json());

// Initialize Stripe with the secret key from your environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Define the payment intent route
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body; // Expecting amount in request body

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});