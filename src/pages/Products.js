// pages/Products.js
import React, { useState } from 'react';
import { Card, Button, Dropdown, DropdownButton } from 'react-bootstrap';

function Products({ setTotalPrice }) {
  const products = [
    { id: 1, title: 'Men Rose Embroidery Baseball Cap', desc: 'Description 1', price: 20, image: '/Cap01.jpeg' },
    { id: 2, title: 'Men Sports Vest', desc: 'Description 2', price: 30, image: '/Vest01.jpeg' },
    { id: 3, title: 'Men Woven Track Pants', desc: 'Description 3', price: 25, image: '/menPants01.jpeg' },
    { id: 4, title: 'Men Casual Distressed Jeans', desc: 'Description 4', price: 50, image: '/Jeans01.jpeg' },
    { id: 5, title: 'Women Front Button Pocket Denim', desc: 'Description 5', price: 10, image: '/womenDenim01.jpeg' },
    { id: 6, title: 'Elastic Printed Casual Jogger Pants', desc: 'Description 6', price: 15, image: '/Pants01.jpeg' },
    { id: 7, title: 'Women Knitted Short Sleeve Shirt', desc: 'Description 7', price: 45, image: '/womenShirt01.jpeg' },
    { id: 8, title: 'Essence Mesh Print Long Skirt', desc: 'Description 8', price: 35, image: '/Skirt01.jpeg' },
    { id: 9, title: 'Manimalist Crocodile Leather Texture Travel Bag', desc: 'Description 9', price: 40, image: '/Bag01.jpeg' },
    { id: 10, title: 'Men Premium Retro Square Frame Fashion GLasses', desc: 'Description 10', price: 60, image: '/Glasses01.jpeg' },
  ];

  const colors = ['Red', 'Blue', 'Green'];
  const [dropdownTitles, setDropdownTitles] = useState(
    Array(products.length).fill('Select Colour')
  );

  const handleBuy = (price) => {
    setTotalPrice(prev => prev + price);
  };

  const handleColorSelect = (color, index) => {
    const newTitles = [...dropdownTitles];
    newTitles[index] = color;
    setDropdownTitles(newTitles);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.desc}</Card.Text>
                <Card.Text><strong>Price: ${product.price}</strong></Card.Text>

                {/* Color selection dropdown */}
                <DropdownButton 
                  id={`dropdown-${product.id}`} 
                  title={dropdownTitles[index]} 
                  variant="secondary" 
                  className="mb-2"
                >
                  {colors.map(color => (
                    <Dropdown.Item 
                      key={color} 
                      onClick={() => handleColorSelect(color, index)}
                    >
                      {color}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>

                {/* Buy button */}
                <Button variant="primary" onClick={() => handleBuy(product.price)}>
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;