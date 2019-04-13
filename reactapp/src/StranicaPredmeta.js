import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import TabelaStudenti from './TabelaStudenti';

class StranicaPredmeta extends Component {
  render() {
    return (
      <div className="StranicaPredmeta">
        <Header/>
        <br></br>
        <h1>Stranica predmeta</h1>
        <br></br>
        <TabelaStudenti/>
        <Footer/>
      </div>
    );
  }
}

export default StranicaPredmeta;
