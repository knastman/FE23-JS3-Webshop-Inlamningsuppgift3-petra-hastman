import React from 'react';
import './products.css';

function CartComponent({ cart, onRemove, totalSum }) {
  return (
    <section className="shoppingCart">
      <h2>Shopping Cart</h2>
      
      <div className='cart-info'>
        {Object.keys(cart).length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="extra"> 
            {Object.entries(cart).map(([productId, item]) => (
              <li key={productId} className="cartObject">
                
                <div className="cart-item">
                  <div> 
                    <img src={item.product.imgUrl} width="100px" alt="Product"/>
                  </div>
                  <div>
                  <h3>{item.product.name}</h3>
                    <p>Price: {item.product.price} SEK</p>
                    <p>Quantity: {item.count}</p>
                    <p>Total: {item.sum} SEK</p> 
                  </div>
                  <div>
                    <button onClick={() => onRemove(productId)}>X</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart-total">
        <strong>Total:</strong> {totalSum} SEK
      </div>
    </section>
  );
}

export default CartComponent;






