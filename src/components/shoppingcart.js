import React from 'react';
import './shoppingcart.css'

const ShoppingCart = (props) => {
  const roundToTwoDigits = (price) => {
    return (Math.floor(price * 100 + 0.5))/100
  }

  return (
    <div className="ShoppingCart">
      {props.cart.map(item =>
        <div className={"cartItem"}>
          <h3>{item}</h3>
          <h5>$ {props.prices[item]}</h5>
        </div>
      )}
      <h2>Total: ${roundToTwoDigits(props.total)}</h2>
    </div>
  );
}

export default ShoppingCart;
