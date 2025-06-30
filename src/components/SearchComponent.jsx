import React, { useState } from 'react';
import './products.css';

export default function SearchComponent({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery); 
  };

  return(
    <section className="search">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="submit" className="searchButton">search</button>
      </form>
    </section>
  );
}





