import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './MockListaPredmeta.js';
import MockListaPredmeta from './MockListaPredmeta';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
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
          <button onClick={funkcija}>Dugme</button>
        </header>
      </div>
    );
  }
}
function funkcija(){
  ReactDOM.render(<MockListaPredmeta />, document.getElementById('root'));
}

export default App;
