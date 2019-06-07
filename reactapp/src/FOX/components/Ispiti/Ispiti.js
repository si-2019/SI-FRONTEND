import React, { Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Tabela from './Tabela';

class Ispiti extends  Component {
  constructor(props){
    super(props);
    this.state = {
      test: '',
    }
  }
render() {
    return(
      <div>
      <Header/>
      <Tabela/>
      <Footer/>
      </div>
        );
    }
}

export default Ispiti;






