import React, { Component } from 'react';
import Potvrda from "./Potvrda";
import PopUp from "./PopUp"
import "./App.css";

import ListaTrenutnihPredmeta from './listaTrenutnihPredmeta';

import ListaOdslusanihPredmeta from './listaOdslusanihPredmeta';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SIERA</h1>

        <ListaTrenutnihPredmeta/>

        <ListaOdslusanihPredmeta/>

      </div>
    );
  }
}

export default App;
