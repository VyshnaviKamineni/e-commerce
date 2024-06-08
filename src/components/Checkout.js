import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ cart }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleConfirmOrder = () => {
    setIsConfirmed(true);
  };

  return (
    <div className="checkout">
      {isConfirmed ? (
        <div className="confirmation">
          <p>Your order is confirmed!! <br />
          <br />Thank You For Shopping😊</p>
        </div>
      ) : (
        <div>
          <h2>Checkout Page</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="checkout-item">
                <img src={item.image} alt={item.name} className="checkout-item-image" />
                <div className="checkout-item-details">
                  <span>{item.name}</span>
                  <br /> <br /><span>{item.quantity} x ₹{item.price}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="total">Total Price: ₹{totalPrice.toFixed(2)}</p>
          <button onClick={handleConfirmOrder}>Confirm Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
