import React, { useState } from 'react';
import './products.css';
import ProductListComponent from './ProductListComponent.jsx';
import ProductCardComponent from "./ProductCardComponent.jsx";
import products from '../data/products.json';


function CartComponent({ cart, onRemove, totalSum }) {
  return (
    <section className="shoppingCart">
      <h2>Shopping Cart</h2>

      {/* {console.log('this is cart in totalSum: '+totalSum)}
      {console.log('this is cart in cartcomponent: ')}
      {console.log(cart)}
      {console.log('this is object.entries in cartcomponent: ')}
      {console.log(Object.entries(cart))} */}
      
      <div className='cart-info'>
        {Object.keys(cart).length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="extra"> 
            {/* Se nedan för en "vanlig" map */}
            {/* .entries(cart) returns an array of [key, value] pairs → [productId, item] */}
            {Object.entries(cart).map(([productId, item]) => (
              <li key={productId} className="cartObject">
                
                <div className="cart-item">
                  <div> 
                    <img src={item.product.imgUrl} width="100px"/>
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





// Jämför ven vanlig map
{/* <ul>
  {data.items.map(item => (
    <li key={item.id}>
    Name:  {item.name} and Price: ${item.price}
    </li>
  ))}
</ul>  */}




function ShoppingCartComponent() {
  // const [sum] = useState();
  // const sum = 10;
  // const [sum, setSum] = useState(sum);
  return(
    <section id="shoppingCart">
              
      <h2>shopping Cart</h2>
      <article className="cartproduct">

          <div className="cartProductImg">
            <img src="https://placehold.co/50x50?text=Hello+World" />
          </div>

          <div>
            <h5>Prod name</h5>
            <p>qty Price Total</p>

            {/* <h2>Name: {product.name}</h2>
            <p>Quantity: {product.quantity}</p> */}
            <h2>Name: </h2>
            <p>Quantity:</p>
            {/* <ProductCardComponent product={product} showButton={false}/> */}

          </div>

        <div className="product-price-button">
          icon
        </div>
      </article>            
    </section>    

  );

}



