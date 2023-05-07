import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShowImage from './ShowImage';

function ShowList() {
  const [shows, setShows] = useState([]);  
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.log(error));
  }, []);

  
  return (
    <div>
      <h1>Show List</h1>
      <table border={1} className="center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Language</th>
            <th>Image</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {shows.map(show => (
            <tr key={show.show.id}>
              <td>{show.show.name}</td>
              <td>{show.show.type}</td>
              <td>{show.show.language}</td>
              <td>{show.show.image && show.show.image.medium && <img src={show.show.image.medium} alt={show.show.name} style={{ width: '100px', height: '100px' }} />}</td>
              <td><Link to={`/show-summary/${show.show.id}`}>View Summary</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowList;
