import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ccomponent from './Ccomponent.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ccomponent/>
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
