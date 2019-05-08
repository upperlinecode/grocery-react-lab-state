import React from 'react';

const product = (name, data, addToCart, removeFromCart) => {
  return (
    <div key={name}>
      <h2>{name}</h2>
      <ol>
        <li>{data.price}</li>
      </ol>
      <button onClick={()=>addToCart(name)}>Add</button>
      <button onClick={()=>removeFromCart(name)}>Remove</button>
    </div>
  )
}

const Products = (props) => {
  return (
    <div>
      {Object.entries(props.selection).map(([name, data]) =>
        product(name, data, props.plusCallback, props.minusCallback))
      }
    </div>
  );
}

export default Products;
