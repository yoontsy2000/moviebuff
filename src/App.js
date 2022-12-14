import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

function App() {
  const [searchResult, setSearchResult] = useState([]);

  // use the useEffect hook to fetch the data when the component is mounted
  useEffect(() => {}, [searchResult]);

  return (
    <div className="App">
      <SearchBar
        setSearchResult={setSearchResult}
      />
      {searchResult ? (
        searchResult.map(result => (
          <div key={result.id}>
            <h1>{result.title}</h1>
            <p>{result.overview}</p>
            <p>Release Date: {result.release_date}</p>
            <img src={"https://image.tmdb.org/t/p/w185/" + result.poster_path} alt={result.title} />
          </div>
          )
        )
      ) : (
        <div>Search!</div>
      )}
    </div>
  );
}

export default App;
