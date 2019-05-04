import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TabelaStudenti from '../TabelaStudenti/TabelaStudenti';


class StranicaPredmeta extends Component {
  render() {
    return (
      <div className="StranicaPredmeta">
        <Header isPocetna={false}/>
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
