import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Categories.css';

function Categories() {
  const navigate = useNavigate(); // Initialize the navigate function
  const categories = ['Rackets', 'Balls', 'Accessories', 'Tables', 'Clothing'];

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`); // Navigate to Products with a query parameter
  };

  return (
    <section id="categories" className="categories">
      <h2>Product Categories</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-item"
            onClick={() => handleCategoryClick(category)} // Add click handler
            style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
          >
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;