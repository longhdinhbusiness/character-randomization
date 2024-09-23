import React from 'react';

function ImgContainer({ customPart, images }) {
  return (
    <div className="button_container">
      <h2 className="h2">{customPart.toUpperCase()}</h2>
      <div className={`${customPart}-wrapper buttons_wrapper`}>
        {images.map((img, index) => (
          <button className="style_buttons">
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
