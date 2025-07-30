import React from 'react';

function CartPopup({ cartItems, onClose }) {
  return (
    <div className="popup">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.title} - {item.price} PKR</li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
      <button onClick={() => alert('Order Confirmed!')}>Checkout</button>
    </div>
  );
}

export default CartPopup;
