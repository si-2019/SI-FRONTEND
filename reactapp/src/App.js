import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/PregledZadatakaProjekta/PregledZadatakaProjekta'
import PregledZadatakaProjekta from './components/PregledZadatakaProjekta/PregledZadatakaProjekta';
import { sviProjektiTrenutnogUsera } from './api/projekti_zadaci';

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
        </header>
        <PregledZadatakaProjekta projekti={sviProjektiTrenutnogUsera().projekti}></PregledZadatakaProjekta>
      </div>
    );
  }
}

export default App;
