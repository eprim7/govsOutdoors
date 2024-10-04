import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Schedule from './pages/Schedule/Schedule';
import Trips from './pages/Trips/Trips';
import Login from './pages/Login/Login';
import Gear from './pages/Gear/Gear';
import PageNotFound from './pages/404/404';
import Events from './pages/Events/Events';
import Register from './pages/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />} />
      <Route path="schedule" element={<Schedule />}/>
      <Route path="trips" element={<Trips />}/> 
      <Route path="login" element={<Login />}/>
      <Route path="events" element={<Events />}/>
      <Route path="gear" element={<Gear />}/>
      <Route path="register" element={Register}/>
      <Route path="*" element={<PageNotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;
