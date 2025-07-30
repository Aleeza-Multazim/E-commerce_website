// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Product Details</h2>
      <p>This will show details for product ID: {id}</p>
    </div>
  );
}

export default ProductDetails;
