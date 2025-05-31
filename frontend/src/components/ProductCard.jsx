import React from 'react';
import './ProductCard.css'; 

function ProductCard({ image, title, description, onContact }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <button className="product-button" onClick={() => onContact(title)}>
        Contáctanos
      </button>
    </div>
  );
}

export default ProductCard;
