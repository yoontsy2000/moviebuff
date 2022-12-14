import React, { useState, useRef } from 'react';

function SearchBar({ setSearchResult }) {
  // Declare a new state variable for the search term
  const [searchTerm, setSearchTerm] = useState("");
  const API_KEY = useRef(process.env.REACT_APP_API_KEY);

  // This function is called when the user clicks the search button
  const handleSearch = async () => {
    // Make an API call to search for the specified term here
    const query = encodeURIComponent(searchTerm)
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
    const data = await response.json();
    setSearchResult(data.results);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;