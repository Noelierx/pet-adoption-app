import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Trigger search when Enter key is pressed
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <label htmlFor="searchInput" className="visually-hidden">
        Search by Name
      </label>
      <input
        type="text"
        id="searchInput"
        placeholder="Search by Name"
        value={searchText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // Handle Enter key press
      />
      <button
        className="search-bar button"
        onClick={handleSearch}
        aria-label="Search"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
