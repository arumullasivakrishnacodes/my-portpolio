// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Websites from './Components/Websites';
import Navbar from './Components/Navbar';
import Notfound from './Components/Notfound';
import Footer from './Components/Footer';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/websites" element={<Websites />}/>
        <Route path="*" element={<Notfound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
