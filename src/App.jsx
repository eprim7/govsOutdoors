import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Home from './pages/Home/Home';
import About from './pages/About/About';
// import Schedule from './pages/Schedule/Schedule';
import Trips from './pages/Trips/Trips';
import Login from './pages/Login/Login';
import Gear from './pages/Gear/Gear';
import Profile from './pages/Profile/Profile';
import PageNotFound from './pages/404/404';
import Events from './pages/Events/Events';
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart';
import SuccessfulPayment from './pages/SuccessfulPayment/SuccessfulPayment';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51P18RM06lLtHBv9azSjTMbVMp6VWjPfkEu1e6nfyeXrFwcssEwZUNz2tEz3EdVAmsJBULkm2Mr7q8g3skineBueH003OJDbvYF');

function App() {

  return (
    <CartProvider>
      <Elements stripe={stripePromise}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="trips" element={<Trips />} />
            <Route path="events" element={<Events />} />
            <Route path="gear" element={<Gear />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />
            {/*<Route path="schedule" element={<Schedule />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="successful" element={<SuccessfulPayment />}/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </Elements>
    </CartProvider>
  );
}

export default App;