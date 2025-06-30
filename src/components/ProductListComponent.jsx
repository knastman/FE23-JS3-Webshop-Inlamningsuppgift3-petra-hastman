import React from 'react';
import './products.css';
import products from '../data/products.json';
import ProductCardComponent from "./ProductCardComponent";

function ProductListComponent({ onAddToCart, searchQuery }) {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <section className="product-list">
      <h2>Products</h2>
      {/* {products.map(product => ( */}
      {filteredProducts.map(product => (
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

