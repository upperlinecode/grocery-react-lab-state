import React from 'react';
import './products.css';

const product = (name, data, addToCart, removeFromCart) => {
  return (
    <div key={name} className="Product">
      <h2>{name}</h2>
      <ul>
        <li>{"$" + data.price.toFixed(2)}</li>
      </ul>
      <button onClick={()=>addToCart(name)}>Add</button>
      <button onClick={()=>removeFromCart(name)}>Remove</button>
    </div>
  )
}

const Products = (props) => {
  return (
    <div className="Products">
      {Object.entries(props.selection).map(([name, data]) =>
        product(name, data, props.plusCallback, props.minusCallback))
      }
    </div>
  );
}

export default Products;
