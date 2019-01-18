import React, { Component } from 'react';
import './App.css';

import Title from './Title';
import Timer from './Timer';
import Footer from './Footer';

const App = () => {
  return(
    <div className="App">
      <Title/>
      <Timer/>
      <Footer/>
    </div>
  );
};

export default App;
