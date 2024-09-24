import React from 'react';

function RandomButton({ handleClick }) {
  return (
    <button className="randomize-button" onClick={handleClick}>
      RANDOMIZE!
    </button>
  );
}

export default RandomButton;
