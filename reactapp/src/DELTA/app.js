import React, { Component } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Predmet from './components/Predmet';

class App extends Component {
  render() {
    return (
      <div>
        <h1>DELTA</h1>
        <Header/>
        <Predmet/>
        <Footer/>
      </div>
    );
  }
}

export default App;
