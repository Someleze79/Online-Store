// App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import TotalPrice from './components/TotalPrice';
import './App.css';

function App() {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      {/* Only show TotalPrice on Products and About pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<><TotalPrice total={totalPrice} /><Products setTotalPrice={setTotalPrice} /></>} />
        <Route path="/about" element={<><TotalPrice total={totalPrice} /><About /></>} />
      </Routes>
    </div>
  );
}

export default App;