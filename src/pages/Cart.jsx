import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';


function Cart() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', address: '' });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowSuccess(true);
    // Optionally, clear cart or send data
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} width="100" />
          <div>
            <h4>{item.title}</h4>
            <p>Rs. {item.price} x {item.quantity}</p>
            <div className="quantity-controls">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      {/* Buttons */}
      <div className="cart-buttons">
        <button onClick={() => window.location.href = "/"}>Continue Shopping</button>
        <button onClick={() => setShowForm(true)}>Checkout</button>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="modal">
          <form onSubmit={handleCheckout}>
            <h3>Checkout</h3>
            <input type="text" name="name" placeholder="Your Name" required onChange={handleInput} />
            <input type="text" name="address" placeholder="Your Address" required onChange={handleInput} />
            <button type="submit">Submit Order</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="success-message">
          <h3>✅ Order Confirmed!</h3>
          <p>Thank you for shopping with us.</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
