import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Predmet from './Predmet';
import DanDatum from './danDatum';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header isPocetna={true}/>
        <h1>Početna stranica</h1>
        <DanDatum/>
        <Predmet/>  
        <Footer/>
      </div>
    );
  }
}

export default App;
