import React from 'react';
import './Cart.css';

function Cart() {
  const cartItems = [
    { id: 1, name: 'Table Tennis Racket', price: '$50', quantity: 1 },
    { id: 2, name: 'Tournament Balls', price: '$10', quantity: 2 },
    { id: 3, name: 'Training Net', price: '$25', quantity: 1 },
  ];

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-container">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: $100</h2> {/* Static total for now */}
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;