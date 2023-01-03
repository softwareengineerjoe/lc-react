import { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Another from './Another';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
  
  }
  
  function decrement() {
    setCount(prevCount => prevCount - 1);
  
  }
  

  const someStyle = {
    background: 'blue',
    color: 'white',
    fontSize: '28',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <header className="App-header">
        <Another name="Joe"/>
        <div>
          <span>{count}</span>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style = {someStyle}>{3+2}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
