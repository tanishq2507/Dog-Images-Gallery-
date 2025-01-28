import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

function ImageModal({ image, onClose }) {
  const [bgColor, setBgColor] = useState('#ffffff');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ backgroundColor: bgColor }} onClick={e => e.stopPropagation()}>
        <img src={image} alt="Selected Dog" />
        <ColorPicker onColorChange={setBgColor} />
      </div>
    </div>
  );
}

export default ImageModal;