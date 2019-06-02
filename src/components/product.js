import React from 'react'

const Product = (props) => {
  return (
    <div key={props.name} className="Product">
      <h2>{props.name}</h2>
      <h3>{"$" + props.price}</h3>
      <div className="buttons">
        <button onClick={()=>props.addToShoppingCart(props.name)}>Add</button>
        <button onClick={()=>props.removeFromShoppingCart(props.name)}>Remove</button>
      </div>
    </div>
  )
}

export default Product;
