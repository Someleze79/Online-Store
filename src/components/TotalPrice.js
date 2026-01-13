// components/TotalPrice.js
import React from 'react';

// Only display total price after buying something
function TotalPrice({ total }) {
  if (total === 0) return null;

  return (
    <div style={{ position: 'absolute', top: '20px', right: '30px' }}>
      <h2>Total Price: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default TotalPrice;