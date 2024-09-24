import React from 'react';
import Heading from './components/Heading';
import './App.css';
import RandomizeChar from './components/RandomizeChar';

function App() {
  return (
    <>
      <div className="container">
        <Heading />
        <RandomizeChar />
      </div>
    </>
  );
}

export default App;
