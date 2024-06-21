import React from 'react';
import './ProductItem.css';

function ProductItem({ item, index }) {
  return (
    <li key={index} className="product">
      <div className="poduct__img-container">
        <img src={item.image} alt="product photo" className="product__img" />
      </div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </li>
  );
}
export default ProductItem;
