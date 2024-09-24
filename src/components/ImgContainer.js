import React from 'react';
import { totalImagesLength } from '../constant';

function ImgContainer({ customPart, imagePath, handleClick, selectedImage }) {
  const imgArray = [];

  const createImages = () => {
    for (let i = 1; i <= totalImagesLength[customPart]; i++) {
      imgArray.push(`${imagePath}${i}.png`);
    }
  };

  createImages();

  return (
    <div className="button_container">
      <h2 className="h2">{customPart.toUpperCase()}</h2>
      <div className={`${customPart}-wrapper buttons_wrapper`}>
        {imgArray.map((img, index) => (
          <button
            key={`${customPart}${index}`}
            onClick={() => handleClick(img)}
            className={`style_buttons ${selectedImage === img ? 'active' : ''}`}
          >
            <img
              key={`${customPart}${index}`}
              src={img}
              alt={`${customPart}${index}`}
              className="button_img"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImgContainer;
