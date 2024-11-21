import React from 'react';
import './StoreInfo.css';

function StoreInfo() {
  return (
    <section id="store-info" className="store-info">
      <div className="store-info-content">
        <img
          src="https://rp-online.de/imgs/32/2/1/2/1/8/1/5/5/tok_0b48631e337a0e59d24819d87fe5802b/w1900_h1178_x1024_y635_ddb086fd23a97a3b.jpg"
          alt="Table tennis"
          className="store-info-image"
        />
        <div className="store-info-text">
          <h2>About Our Store</h2>
          <p>
            At TableTennisStore, we provide top-quality products and accessories
            for players of all levels. Whether you're a beginner or a
            professional, we've got everything you need to excel in your game.
          </p>
          <p>Join our community and enjoy fast shipping worldwide!</p>
        </div>
      </div>
    </section>
  );
}

export default StoreInfo;