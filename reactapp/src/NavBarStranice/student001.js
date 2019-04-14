import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TabelaStudenti from '../TabelaStudenti';
import Navbar001 from '../Navbar001';

class student001 extends Component {
  render() {
    return (
      <div className="student001">
        <Header/>
        <br></br>
        <h1>Stranica predmeta</h1>
        <br></br>
        <Navbar001/>
        <TabelaStudenti/>
        <Footer/>
      </div>
    );
  }
}

export default student001;
