import React from 'react';
import { useState } from 'react';
import SearchComponent from './components/SearchComponent.jsx';
import ProductListComponent from './components/ProductListComponent.jsx';
import CartComponent from './components/CartComponent.jsx';


function Webshop() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState({});
  const totalSum = Object.values(cart).reduce((acc, item) => acc + item.sum, 0);

  function handleAddToCart(productId, productInfo) {
    setCart(prevCart => { 
   
      const existing = prevCart[productId] || 
      {
        count: 0, 
        sum: 0,
        product: productInfo 
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
      <SearchComponent searchQuery={searchQuery} onSearch={setSearchQuery} />
      <div className="wrapper">
        <ProductListComponent onAddToCart={handleAddToCart} searchQuery={searchQuery} />
        <CartComponent cart={cart} onRemove={handleRemoveFromCart} totalSum={totalSum}/>
      </div>
    </main>
  );
}

export default Webshop;
