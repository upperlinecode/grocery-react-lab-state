import React from 'react';

const ShoppingCart = (props) => {
  return (
    <div>
      {Object.entries(props.cart).map(([name, amount]) => {
        return <h3 key={name}>{amount}x {name}</h3>
      })}
    </div>
  );
}

export default ShoppingCart;
