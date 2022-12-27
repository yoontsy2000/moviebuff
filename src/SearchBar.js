import React, { useState } from 'react';
import Turnstone from 'turnstone';
import styles from './Turnstone.module.css'
import './SearchBar.css'
const API_KEY = process.env.REACT_APP_API_KEY;

function SearchBar(props) {
  // Declare a new state variable for the search term
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearchResult } = props;

  // This function is called when the user clicks the search button
  const handleSearch = async () => {
    // Make an API call to search for the specified term here
    try {
      const query = encodeURIComponent(searchTerm);
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
      const data = await response.json();
      setSearchResult(data.results);
    }
    catch(error) {
      console.error(error);
    }
  };

  const listbox = {
    displayField: 'original_title',
    data: async (query) => {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`);
      const data = await response.json();
      return data.results;
    },
    searchType: 'startsWith',
  }

  return (
    <div className="SearchBar">
      <Turnstone
        id="search"
        name="search"
        listbox={listbox}
        matchText={true}
        placeholder="Search a movie"
        styles={styles}
      />
    </div>
  );
}

export default SearchBar;