import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImeProfesora from './imeProfesora';
import OpisPredmeta from './opisPredmeta';
import BrojBodova from './brojEtcsBodova';


class App extends Component {
  render() {
    return (
      <div className="App">
          <ImeProfesora/>

          <OpisPredmeta/>

          <BrojBodova/>

      </div>
    );
  }
}

export default App;
