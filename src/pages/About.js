// pages/About.js
import React from 'react';
import { Figure } from 'react-bootstrap';

function About() {
  return (
    <div className="container mt-4">
      <h1>About Our Store</h1>

      {/* Store Logo */}
      <Figure>
        <Figure.Image
          width={200}
          height={200}
          alt="Store Logo"
          src="/Logo01.jpeg"
        />
        <Figure.Caption>
          The best store for all your needs!
        </Figure.Caption>
      </Figure>

      {/* Store Images */}
      <div className="d-flex gap-3 mt-4">
        <Figure>
          <Figure.Image
            width={200}
            height={200}
            alt="Store Interior 1"
            src="/Interior01.jpeg"
          />
          <Figure.Caption>Inside our beautiful store!</Figure.Caption>
        </Figure>

        <Figure>
          <Figure.Image
            width={200}
            height={200}
            alt="Store Interior 2"
            src="/Interior02.jpeg"
          />
          <Figure.Caption>Visit us anytime!</Figure.Caption>
        </Figure>
      </div>

      {/* Contact info */}
      <div className="mt-4">
        <h4>Contact Us:</h4>
        <p>Email: someleze1738@gmail.com</p>
        <p>Phone: +27 68 296 6812</p>
      </div>
    </div>
  );
}

export default About;