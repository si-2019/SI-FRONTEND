import React, { Component } from 'react';
import "./App.css";

import ListaTrenutnihPredmeta from './listaTrenutnihPredmeta';

import ListaOdslusanihPredmeta from './listaOdslusanihPredmeta';


class App extends Component {
  render() {
    return (

      <div>
        <h1>SIERA</h1>
      <div className="App">
        <h1>SIERA</h1>

        <ListaTrenutnihPredmeta/>

        <ListaOdslusanihPredmeta/>

      </div>
    );
  }
}

export default App;
