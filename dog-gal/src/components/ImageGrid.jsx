import React from 'react';

function ImageGrid({ images, onImageClick }) {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-item" onClick={() => onImageClick(image)}>
          <img src={image} alt={`Dog ${index}`} />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;