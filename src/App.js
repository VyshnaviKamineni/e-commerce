import React, { useState } from 'react';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products');

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <Navbar changePage={changePage} cartSize={cart.length} />
      {page === 'products' && <ProductListing addToCart={addToCart} />}
      {page === 'cart' && <Cart cart={cart} setCart={setCart} changePage={changePage} />} {}
      {page === 'checkout' && <Checkout cart={cart} />}
    </div>
  );
}

export default App;
