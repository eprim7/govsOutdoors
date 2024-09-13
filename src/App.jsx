import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Schedule from './pages/Schedule/Schedule';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />} />
      <Route path="schedule" element={<Schedule />}/>
      </Routes>
    </Router>
  );
}

export default App;
