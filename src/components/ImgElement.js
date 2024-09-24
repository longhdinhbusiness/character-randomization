import React from 'react';

function ImgElement(props) {
  return (
    <img className={`image ${props.name}`} src={props.src} alt={props.name} />
  );
}

export default ImgElement;
