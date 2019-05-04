import React, { Component } from 'react';
import "./App.css";
import ListaOdslusanihPredmeta from './listaOdslusanihPredmeta';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SIERA</h1>
        <ListaOdslusanihPredmeta/>
      </div>
    );
  }
}

export default App;
