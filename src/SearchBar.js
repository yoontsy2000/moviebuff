import React from 'react';
import Turnstone from 'turnstone';
import styles from './Turnstone.module.css'
import './SearchBar.css'
const API_KEY = process.env.REACT_APP_API_KEY;

function SearchBar({ setSearchResult }) {

  const Item = ({ item }) => {
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img
          width={45}
          src={"https://image.tmdb.org/t/p/w92/" + item.poster_path}
          alt={item.title}
          style={{marginRight: '1em'}}
        />
        <p>{item.title}</p>
      </div>
    )
  }

  const listbox = {
    displayField: 'original_title',
    data: async (query) => {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`);
      const data = await response.json();
      return data.results;
    },
    searchType: 'startsWith',
  };

  return (
    <div className="SearchBar">
      <Turnstone
        id="search"
        name="search"
        listbox={listbox}
        matchText={true}
        placeholder="Search a movie"
        debounceWait
        styles={styles}
        onSelect={setSearchResult}
        Item={Item}
      />
    </div>
  );
}

export default SearchBar;