// pages/Home.js
import React, { useState } from 'react';

function Home() {
  const [name, setName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // Logout
      setIsLoggedIn(false);
      setName('');
    } else {
      // Login
      if (name.trim() !== '') {
        setIsLoggedIn(true);
      } else {
        alert('Please enter your name.');
      }
    }
  };

  return (
    <div className="container mt-5 text-center">
      {isLoggedIn ? (
        <>
          <h1>Welcome {name}</h1>
          <button onClick={handleLoginLogout}>Logout</button>
        </>
      ) : (
        <>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleLoginLogout}>Login</button>
        </>
      )}
    </div>
  );
}

export default Home;