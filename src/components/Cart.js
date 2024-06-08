import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({ cart, setCart, changePage }) => {
  console.log('Cart props:', { cart, setCart, changePage });

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const removeFromCart = (id) => {
    console.log('Removing item with id:', id);
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <span>{item.name}</span>
                  <span>{item.quantity} x ₹{item.price}</span>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
              </li>
            ))}
          </ul>
          <p className="total">Total Quantity: {totalQuantity}</p>
          <p className="total">Total Price: ₹{totalPrice.toFixed(2)}</p>
          <button onClick={() => changePage('checkout')}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default Cart;
