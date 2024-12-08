import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  interface f {
    f(): void
  }

  class A implements f {
    f() {
      alert("Hi")
    }
  }

  const alimirza: A = new A()

  return (
    <div className="App" onClick={alimirza.f}>
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
          Learn React7
        </a>
      </header>
    </div>
  );
}

export default App;
