import React from 'react'
import './productList.css'
// Be sure to uncomment this line before trying to use the Product component!
import Product from './product'

function ProductList(props) {
  return (
    <div className="ProductList">
      {props.inventory.map(item => <Product key={item.name} item={item} add={props.add} remove={props.remove}/>)}
    </div>
  );
}

export default ProductList;
