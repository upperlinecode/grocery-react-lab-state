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

  // The add and remove functions should update the state's cart and the total
  const addToShoppingCart = (item) => {
    let updatedState = {...component.state}
    updatedState.cart.push(item)
    updatedState.total += priceList[item]
    component.setState(updatedState)
  }
  const removeFromShoppingCart = (item) => {
    let updatedState = {...component.state}
    // Remove the object from the cart
    const itemToRemove = updatedState.cart.indexOf(item)
    // Splice the array together, removing the item to remove
    updatedState.cart.splice(itemToRemove ,1)
    // Decrement the price
    updatedState.total -= priceList[item]
    component.setState(updatedState)
  }

  component.render = () => {
    return (
      <div className="App">
        <Hero/>
        <ShoppingCart cart={component.state.cart} prices={priceList} total={component.state.total}/>
        <div className="main">
          <ProductList
            removeFromShoppingCart={removeFromShoppingCart}
            addToShoppingCart={addToShoppingCart}
            foods={foods}
            priceList={priceList}
          />
        </div>
      </div>
  )}
  return component
}

export default App;
