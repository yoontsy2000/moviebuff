import React, { useState } from 'react';

function SearchBar(props) {
  // Declare a new state variable for the search term
  const [searchTerm, setSearchTerm] = useState(props.searchTerm);

  // This function is called when the user clicks the search button
  const handleSearch = () => {
    // Make an API call to search for the specified term here
    console.log(this.searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value);
          props.onSearchTermChange(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;