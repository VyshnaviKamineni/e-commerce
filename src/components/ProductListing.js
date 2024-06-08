import React, { useState } from 'react';
import { motion } from 'framer-motion';
import data from '../data/Data';
import '../App.css';

const ProductListing = ({ addToCart }) => {
  const { productItems } = data;
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, quantity) => {
    setQuantities((prevQuantities) => ({ ...prevQuantities, [id]: quantity }));
  };

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 10);
  };

  return (
    <div>
      <div className="product-list">
        {productItems.slice(0, visibleProducts).map((product) => (
          <motion.div
            key={product.id}
            className="product-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <div className="input-button-container">
              <input
                type="number"
                min="1"
                value={quantities[product.id] || 1}
                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
              />
              <button onClick={() => addToCart({ ...product, quantity: quantities[product.id] || 1 })}>
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      {visibleProducts < productItems.length && (
        <div className="load-more-container">
          <button className="load-more" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
