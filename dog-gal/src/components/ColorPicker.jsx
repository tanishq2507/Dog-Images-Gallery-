import React from 'react';

function ColorPicker({ onColorChange }) {
  return (
    <div className="color-picker">
      <label htmlFor="bg-color">Background Color: </label>
      <input
        type="color"
        id="bg-color"
        onChange={e => onColorChange(e.target.value)}
      />
    </div>
  );
}

export default ColorPicker;