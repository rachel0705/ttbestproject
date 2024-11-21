import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">TTBest</div>
      <nav>
        <ul>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#featured-products">Products</a></li>
          <li><a href="#store-info">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
