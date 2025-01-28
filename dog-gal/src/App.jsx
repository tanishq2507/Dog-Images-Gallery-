import React, { useState, useEffect } from 'react';
import ImageGrid from './components/ImageGrid';
import ImageModal from './components/ImageModal';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/9')
      .then(response => response.json())
      .then(data => {
        setImages(data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Dog Image Gallery</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ImageGrid images={images} onImageClick={setSelectedImage} />
          {selectedImage && (
            <ImageModal
              image={selectedImage}
              onClose={() => setSelectedImage(null)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;