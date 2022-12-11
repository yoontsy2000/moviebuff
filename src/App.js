import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // This function is called when the search term is updated
  const handleSearchTermChange = newSearchTerm => {
    setSearchTerm(newSearchTerm);
  };

  // use the useEffect hook to fetch the data when the component is mounted
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`);
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
      />
      {data ? (
        <div>
          {/* display the data here */}
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
          <p>Release Date: {data.release_date}</p>
          <img src={data.poster_path} alt={data.title} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
