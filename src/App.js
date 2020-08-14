import React, {Component} from 'react';
import './App.css';
import ShoppingCart from './components/shoppingcart';
import ProductList from './components/productList';
import Hero from './components/hero';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      total: 0
    }
  }

  // Inventory - we might normally prefer to use a database, but this is a good placeholder.
  foods = ["Apple", "Loaf of Bread", "Milk"]
  priceList = {
    "Apple": 1.99,
    "Loaf of Bread": 1.50,
    "Milk": 2.50,
  }



  // The add and remove functions should update the state's cart and the total.
  // The add function has been built already. The remove function has not.
  addToShoppingCart = (item) => {
    let updatedState = {...component.state}
    updatedState.cart.push(item)
    updatedState.total += priceList[item]
    component.setState(updatedState)
  }

  render() {
    console.log(addToShoppingCart)
    return (
      <div className="App">
        <Hero/>
        <ShoppingCart />
        <div className="main">
          <ProductList foods={foods}/>
        </div>
      </div>
    );
  }
}

export default App;
