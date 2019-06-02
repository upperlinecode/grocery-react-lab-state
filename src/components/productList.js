import React from 'react'
import './productList.css'
import Product from './product'

const ProductList = (props) => {
  return (
    <div className="ProductList">
      <Product name={props.foods[0]}
        price={props.priceList["Apple"]}
        addToShoppingCart={props.addToShoppingCart}
        removeFromShoppingCart={props.removeFromShoppingCart}
      />
      <Product/>
    </div>
  );
}

export default ProductList;
