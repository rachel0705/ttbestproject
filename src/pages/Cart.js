import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [showThanksMessage, setShowThanksMessage] = useState(false);

  // Calculate total price
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle checkout
  const handleCheckout = () => {
    setShowThanksMessage(true);
    setTimeout(() => {
      clearCart(); 
    }, 500); 
  };

  return (
    <div className="cart-page">
      <div
        className={`cart-content ${
          showThanksMessage ? 'cart-fade-out' : 'cart-fade-in'
        }`}
      >
        {!showThanksMessage && (
          <>
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <div className="cart-container">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="item-info">
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                      <button
                        className="remove-item-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-total">
                  <h2>Total: ${calculateTotal()}</h2>
                  <button className="checkout-button" onClick={handleCheckout}>
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
      {showThanksMessage && (
        <div className="thanks-message thanks-fade-in">
          <h2>Thanks for choosing us!</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;