import React, { Component } from 'react';
import './App.css';
import ListaZadataka from './prikazListeZadataka.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListaZadataka />
      </div>
    );
  }
}

export default App;
