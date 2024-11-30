import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>TTBest</h3>
          <p>Become the best table tennis player with the best products in our shop!</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#featured-products">Products</a></li>
          </ul>
        </div>
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TTBest. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;