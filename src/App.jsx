import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
