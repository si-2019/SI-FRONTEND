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
          <PrikazListeZadataka/>
        </header>
        <PregledZadatakaProjekta projekti={sviProjektiTrenutnogUsera().projekti}></PregledZadatakaProjekta>
      </div>
    );
  }
}

export default App;
