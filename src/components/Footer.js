import React from 'react';
import './Footer.css';
import { HashLink } from 'react-router-hash-link'; // Import HashLink

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
            <li>
              <HashLink to="/#categories">Categories</HashLink>
            </li>
            <li>
              <HashLink to="/#featured-products">Products</HashLink>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
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