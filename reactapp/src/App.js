import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PregledZadatakaProjekta from './components/PregledZadatakaProjekta';
import PregledListeProjekata from './components/PregledListeProjekata';
import PrikazListeZadataka from './components/PrikazListeZadataka';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PrikazListeZadataka/>
        </header>
      </div>
    );
  }
}

export default App;
