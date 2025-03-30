import React, { useState } from 'react';
import "./Searchbar.css"
function SearchBar() {
  // State to hold the search input value
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle input changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update the state with the input value
  };

  // Function to handle form submission (optional)
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    alert(`Search for: ${searchTerm}`);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
