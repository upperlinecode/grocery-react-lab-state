import React from 'react'

const Product = (props) => {
  return (
    <div className="Product" key={props.name} >
      <h2>NAME</h2>
      <h3>$$PRICE</h3>
      <div className="buttons">
        <button onClick={()=>{console.log("add button test")}}>Add</button>
        <button>Remove</button>
      </div>
    </div>
  )
}

export default Product;
