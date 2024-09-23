import React from 'react';
import Heading from './components/Heading';
import MainCard from './components/MainCard';
import './App.css';
import MainButtonsCard from './components/MainButtonsCard';

function App() {
  return (
    <>
      <div className="container">
        <Heading />
        <MainCard />
        <MainButtonsCard />
      </div>
    </>
  );
}

export default App;
