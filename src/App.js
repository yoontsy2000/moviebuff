import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  // use the useEffect hook to fetch the data when the component is mounted
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=863ac529838f0acd2cc9a88d6f58a5ef');
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
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
