import React from 'react';

function ImgElement({ name, src }) {
  return <img className={`image ${name}`} src={src} alt={name} />;
}

export default ImgElement;
