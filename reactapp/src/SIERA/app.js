import React, { Component } from 'react';
import "./App.css";
import ListaTrenutnihPredmeta from './listaTrenutnihPredmeta';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SIERA</h1>
        <ListaTrenutnihPredmeta/>
      </div>
    );
  }
}

export default App;
