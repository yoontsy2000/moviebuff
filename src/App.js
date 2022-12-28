import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Movie from './Movie';

function App() {
  const [searchResult, setSearchResult] = useState({});

  useEffect(() => {console.log(searchResult)}, [searchResult]);

  return (
    <div className="App">
      <SearchBar
        setSearchResult={setSearchResult}
      />
      <div className="Movies">
        {searchResult ? (
            <Movie
              key={searchResult.id}
              title={searchResult.title}
              overview={searchResult.overview}
              release_date={searchResult.release_date}
              poster_path={searchResult.poster_path}
            />
            )
        : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
