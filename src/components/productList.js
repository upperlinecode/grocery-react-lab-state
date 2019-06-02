import React from 'react'
import './productList.css'
import Product from './product'

const ProductList = (props) => {
  // console.log(props.foods.map(food => ))
  return (
    <div className="ProductList">
      {props.foods.map(food =>
        <Product key={food}
          name={food}
          price={props.priceList[food]}
          addToShoppingCart={props.addToShoppingCart}
          removeFromShoppingCart={props.removeFromShoppingCart}
        />
      )}
    </div>
  );
}

export default ProductList;
