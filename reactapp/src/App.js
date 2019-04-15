import React, { Component } from 'react';
import './App.css';
import PrikazListeZadataka from './components/PrikazListeZadataka';
import './components/PregledZadatakaProjekta/PregledZadatakaProjekta';
import PregledZadatakaProjekta from './components/PregledZadatakaProjekta/PregledZadatakaProjekta';
import { sviProjektiTrenutnogUsera } from './api/projekti_zadaci';
import PregledListeProjekata from './components/PregledListeProjekata/PregledListeProjekata';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PrikazListeZadataka/>
        </header>
        <PregledZadatakaProjekta projekti={sviProjektiTrenutnogUsera().projekti}></PregledZadatakaProjekta>;
         
      </div>
    );
  }
}

export default App;
