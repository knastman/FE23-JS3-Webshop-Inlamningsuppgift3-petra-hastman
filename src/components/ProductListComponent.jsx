
import { useState } from 'react';
import React from 'react';
import './products.css';
import products from '../data/products.json';
import ProductCardComponent from "./ProductCardComponent";
// import ShoppingCartComponent from './ShoppingCartComponent.jsx';


function ProductListComponent({ onAddToCart }) {
  return (
    <section className="product-list">
      <h2>Products</h2>
      {products.map(product => (
        <ProductCardComponent key={product.productId} product={product} onAddToCart={onAddToCart} showButton={true}/>
      ))}
    </section>
  );
}

export default ProductListComponent;




// //Orginal
// export default function ProductListComponent({ onAddToCart }) {
//   return (
//     <section className="productList">
//       <h2>Products</h2>

//       {products.map((product) => (
//         <article key={product.productId} className="productWithButton product">
//             <ProductCardComponent product={product} /> 
//             <button onClick={() => onAddToCart(product.productId, product)}>
//               Add to cart
//             </button>
//         </article>
//       ))}
//     </section>
//   );
// }

