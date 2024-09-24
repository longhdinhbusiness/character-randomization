import React from 'react';

function ImgContainer({ customPart, images, handleClick, selectedImage }) {
  return (
    <div className="button_container">
      <h2 className="h2">{customPart.toUpperCase()}</h2>
      <div className={`${customPart}-wrapper buttons_wrapper`}>
        {images.map((img, index) => (
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
