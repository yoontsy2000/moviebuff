import React, { useState } from 'react';
import './SearchBar.css'
const API_KEY = process.env.REACT_APP_API_KEY;

function SearchBar({ setSearchResult }) {
  // Declare a new state variable for the search term
  const [searchTerm, setSearchTerm] = useState("");

  // This function is called when the user clicks the search button
  const handleSearch = async () => {
    // Make an API call to search for the specified term here
    try {
      const query = encodeURIComponent(searchTerm)
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
      const data = await response.json();
      setSearchResult(data.results);
    }
    catch(error) {
      console.error(error);
    }
  };

  return (
    <div class="SearchBar">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
      />
      <button onClick={handleSearch}>
        <svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
          <path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;