import React, { Component } from 'react';
import Labele from './components/Labele/Labele'
import BodoviNaIspitima from './components/BodoviNaIspitima/BodoviNaIspitima'

class App extends Component {
  render() {
    return (
      <div>
        <h1>DELTA</h1>
        <Labele/><br/>
        <BodoviNaIspitima/>
      </div>
    );
  }
}

export default App;
