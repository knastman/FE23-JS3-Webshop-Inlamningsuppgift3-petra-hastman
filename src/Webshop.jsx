// import './App.css';
import React from 'react';
import { useState } from 'react';
import ProductListComponent from './components/ProductListComponent.jsx';
import SearchComponent from './components/SearchComponent.jsx';
import CartComponent from './components/CartComponent.jsx';


function Webshop() {
  const [cart, setCart] = useState({}); //Updates the state (cart using setCart
  const totalSum = Object.values(cart).reduce((acc, item) => acc + item.sum, 0);
 
 
  function handleAddToCart(productId, productInfo) {
    setCart(prevCart => { 
   
      const existing = prevCart[productId] || 
      {
        count: 0, 
        sum: 0,
        product: productInfo 
      };

      const newItem = {
        ...existing,
        count: existing.count + 1,
        sum: existing.sum + productInfo.price,
      };
    
      return {
        ...prevCart, 
        [productId]: {
          ...existing,
          count: existing.count + 1,
          sum: existing.sum + productInfo.price,
        }

      };
    });
  }

  function handleRemoveFromCart(productId) {
    setCart(prevCart => {
      const { [productId]: _, ...rest } = prevCart; 
      return rest;
    
    });
  }

  return (
    <main>
      <h1>Magic store</h1>  
      <SearchComponent />
      <div className="wrapper">
        <ProductListComponent onAddToCart={handleAddToCart} />
        <CartComponent cart={cart} onRemove={handleRemoveFromCart} totalSum={totalSum}/>
      </div>
    </main>
  );
}

export default Webshop;
