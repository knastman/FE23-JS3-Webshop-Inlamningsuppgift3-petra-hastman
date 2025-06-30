
// import React from 'react';
import React, { useState } from 'react';


function ProductCardComponent({ product, onAddToCart, showButton }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };


  return (
    <article className="product" id={product.productId}>
      <div className="product-info-left">
        <div>
          <img src={product.imgUrl} width="100px"/>
        </div>
        <div>
          <h2>{product.name}</h2>
          <p onClick={toggleModal} className="info-link">More information</p>
        </div>

        {isVisible && (
          <div className="modalpopup" id="productModal" onClick={toggleModal}>
            <p>{product.description}</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        )}

      </div>

      <div className="product-info-right">
        <p className="price">{product.price} SEK</p>

        {showButton && (
          <button onClick={() => onAddToCart(product.productId, product)}>
            Add to cart
          </button>
        )}

      </div>
    </article>
  );
}

export default ProductCardComponent;






