import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const API_KEY = process.env.REACT_APP_API_KEY
let movie_id = 550

function App() {
  const [data, setData] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  // use the useEffect hook to fetch the data when the component is mounted
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`);
      const data = await response.json();
      setData(data);
    }

    fetchData();
    console.log(searchResult);
  }, []);

  return (
    <div className="App">
      <SearchBar
        setSearchResult={setSearchResult}
      />
      {data ? (
        <div>
          {/* display the data here */}
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
          <p>Release Date: {data.release_date}</p>
          <img src={"http://image.tmdb.org/t/p/w200/" + data.poster_path} alt={data.title} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {searchResult.map(result => (
        <div key={result.id}>
          <h1>{result.title}</h1>
          {/* display the rest of the result data here */}
        </div>
      ))}
    </div>
  );
}

export default App;
