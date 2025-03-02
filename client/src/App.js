import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import How from './pages/How';
import More from './pages/More';
import Gem from './components/Gem';
import DownloadPage from './pages/DownloadPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/howto" element={<How />} />
            <Route path="/more" element={<More />} />
            <Route path="/download" element={<DownloadPage />} />
          </Routes>
          <Gem/>
        </main>
      </div>
    </Router>
  );
}

export default App;