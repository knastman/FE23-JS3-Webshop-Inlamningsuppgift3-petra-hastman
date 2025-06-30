import React, { useEffect, useState } from 'react';
import './products.css';
// import ProductComponent from './ProductComponent.jsx';


export default function SearchComponent() {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return(
    <>    
      <section className="search">
        <input type="text" />
        <button type="submit" className="searchButton">search</button>
      </section>
      <section className="resultList">
        <h2>Search result</h2>
        {/* <ProductComponent /> */}
      </section>
      <section>
        <h2>Search result list</h2>
        <List input={inputText} />
      </section>
    </>

  );

}

