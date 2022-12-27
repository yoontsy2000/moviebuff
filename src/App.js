import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Movie from './Movie';

function App() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {console.log("Ping!")}, [searchResult]);

  return (
    <div className="App">
      <SearchBar
        setSearchResult={setSearchResult}
      />
      <div className="Movies">
        {searchResult && searchResult.length > 0 ? (
          searchResult.map(result => (
            <Movie
              key={result.id}
              title={result.title}
              overview={result.overview}
              release_date={result.release_date}
              poster_path={result.poster_path}
            />
            )
          )
        )
        : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
