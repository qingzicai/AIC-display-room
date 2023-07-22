import { useState, useEffect } from 'react';

function ArtGallery() {

  const [artWork, setArtWork] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtWork = async () => {
      try {
        const response = await fetch('https://api.artic.edu/api/v1/artworks');
        const data = await response.json();

        if(response.ok) {
          setArtWork(data);
        } else {
          setError('Error fetching Artwork');
        }
      } catch (error) {
        setError(error.message);
      }
    }

    fetchArtWork();
  }, []);

  if(error) {
    return <marquee>{error}</marquee>;
  }

  return (
    <>
      <img src="" alt="" />

      <div className="container">
        {artWork.map(artWork => (
          <div className="card" key={movie.id}>
            <h1>{artWork.title?}</h1>
            <p>{artWork.artist_display.substring(0, 300)}...</p>
          </div>
        ))}
      </div>
    </>
  )

}

export default ArtGallery;


