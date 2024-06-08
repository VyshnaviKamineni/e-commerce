import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ changePage, cartSize }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">E-Commerce</div>
      <ul className="navbar-list">
        <li className="navbar-item products" onClick={() => changePage('products')}>
          <FontAwesomeIcon icon={faHome} />
          <span>Products</span>
        </li>
        <li className="navbar-item cart" onClick={() => changePage('cart')}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Cart ({cartSize})</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
