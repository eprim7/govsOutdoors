import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Schedule from './pages/Schedule/Schedule';
import Trips from './pages/Trips/Trips';
import Profile from './pages/Profile/Profile';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />} />
      <Route path="schedule" element={<Schedule />}/>
      <Route path="trips" element={<Trips />}/> 
      <Route path="profile" element={<Profile />}/>
      </Routes>
    </Router>
  );
}

export default App;
