import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Hero.css';

function Hero() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleShopNowClick = () => {
    navigate('/products'); // Navigate to the Products page
  };

  return (
    <section className="hero">
      <h1>Your Favorite Table Tennis Shop</h1>
      <p>Top-quality products for every player, from beginners to pros!</p>
      <button className="shop-now-btn" onClick={handleShopNowClick}>
        Shop Now
      </button>
    </section>
  );
}

export default Hero;
