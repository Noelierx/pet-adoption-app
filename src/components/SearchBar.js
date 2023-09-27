// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="search-bar">
      <input 
        type="text"
        placeholder="Search by Name"
        value={searchText}
        onChange={handleInputChange}
      />
      <button className="search-bar button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;