import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [item, setItem] = useState(false);
  function handleClick() {
    setItem(!item);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {item && <div id="saludo">hola</div>}
        <button onClick={handleClick}>I'm a button</button>
      </header>
    </div>
  );
}

export default App;
