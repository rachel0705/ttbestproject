import React from 'react';
import './Categories.css';

function Categories() {
  const categories = ['Rackets', 'Balls', 'Accessories', 'Tables', 'Clothing'];

  return (
    <section id="categories" className="categories">
      <h2>Product Categories</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <h3>{category}</h3>
            {/* You can add images or links here */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
