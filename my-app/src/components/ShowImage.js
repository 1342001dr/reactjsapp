import { useState, useEffect } from 'react';

function ShowImage() {
  const [image, setImage] = useState('');

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows/1') // replace 1 with the ID of the show you want to display the image for
      .then(response => response.json())
      .then(data => setImage(data.image.medium))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Show Image</h1>
      <h1>{image}</h1>
      <img src={image} alt="Show" />
    </div>
  );
}

export default ShowImage;
