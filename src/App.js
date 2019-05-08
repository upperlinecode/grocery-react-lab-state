import React from 'react';
import './App.css';
import ShoppingCart from './components/shoppingcart'
import Products from './components/products'

const productSelection = {
  "Apple": {
    price: 1.99,
  },
  "Loaf of Bread": {
    price: 1.50,
  },
  "Milk": {
    price: 2.50,
  },
}

const modifyCart = (cart, item, n) => {
  cart[item] = (cart[item] || 0) + n
  return cart
}

const App = () => {
  const component = new React.Component()

  component.state = {
    cart: {}
  }

  const addToShoppingCart = item => {
    component.setState(prevState => {
      modifyCart(prevState.cart, item, 1)
      return prevState
    })
  }

  const removeFromShoppingCart = item => {
    component.setState(prevState => {
      modifyCart(prevState.cart, item, -1)
      return prevState
    })
  }

  component.render = () => {
    return (
      <div className="App">
        <ShoppingCart cart={component.state.cart}/>
        <Products
          minusCallback={removeFromShoppingCart}
          plusCallback={addToShoppingCart}
          selection={productSelection}
        />
      </div>
  )}
  return component
}

export default App;
