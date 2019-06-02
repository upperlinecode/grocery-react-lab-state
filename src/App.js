import React from 'react'
import './App.css'
import ShoppingCart from './components/shoppingcart'
import ProductList from './components/productList'
import Hero from './components/hero'

const App = () => {
  const component = new React.Component()

  // Inventory - we might normally prefer to use a database, but this is a good placeholder.
  const foods = [  "Apple", "Loaf of Bread", "Milk"]
  const priceList = {
    "Apple": 1.99,
    "Loaf of Bread": 1.50,
    "Milk": 2.50,
  }

  component.state = {
    cart: [],
    total: 0
  }

  // The add and remove functions should update the state's cart and the total.
  // The add function has been built already. The remove function has not.
  const addToShoppingCart = (item) => {
    let updatedState = {...component.state}
    updatedState.cart.push(item)
    updatedState.total += priceList[item]
    component.setState(updatedState)
  }

  component.render = () => {
    return (
      <div className="App">
        <Hero/>
        <ShoppingCart />
        <div className="main">
          <ProductList foods={foods}/>
        </div>
      </div>
  )}
  return component
}

export default App;
