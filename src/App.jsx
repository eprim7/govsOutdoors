import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Schedule from './pages/Schedule/Schedule';
import Trips from './pages/Trips/Trips';
import Login from './pages/Login/Login';
import Gear from './pages/Gear/Gear';
import PageNotFound from './pages/404/404';
import Events from './pages/Events/Events';
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51Q6f7ZRv1tQ0nVDom2lIrAi2CiN4zWutSoTlHFsjN6m11GRCXW93HfFzFmyhen3MSam66Hq88CehK36p2AKeZfNv004yIOmSMR');

function App() {
  return (
    <CartProvider>
      <Elements stripe={stripePromise}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="trips" element={<Trips />} />
            <Route path="login" element={<Login />} />
            <Route path="events" element={<Events />} />
            <Route path="gear" element={<Gear />} />
            <Route path="register" element={<Register />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </Elements>
    </CartProvider>
  );
}

export default App;