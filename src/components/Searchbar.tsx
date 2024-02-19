import React, { useState } from 'react';

const SearchBar = ({ onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar flex justify-center">
      <input
        type="text"
        placeholder="Search by ingredient"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch}>
        <img src="" alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
