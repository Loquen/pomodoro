import React, { Component } from 'react';
import './App.css';

import Title from './Title';
import Timer from './Timer';

const App = () => {
  return(
    <div className="App">
      <Title/>
      <Timer/>
    </div>
  );
};

export default App;
