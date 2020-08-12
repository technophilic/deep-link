import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [link, setLink] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {link}
          <br/>
          <input value={link} onChange={(event)=>{setLink(event.target.value)}}></input>
        </p>
        <a
          className="App-link"
          href={link}
        >
          Launch link
        </a>
      </header>
    </div>
  );
}

export default App;
