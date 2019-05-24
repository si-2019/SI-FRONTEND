import React, { Component} from 'react';
import Col from 'react-bootstrap/Col';
import TabelaUnosa from '../TabelaUnosa/TabelaUnosa';
import Form from 'react-bootstrap/Form';
import ReturnButton from '../ReturnButton/ReturnButton';
import Header from '../Header/Header';
import Nav from 'react-bootstrap/Nav';
import Footer from '../Footer/Footer';
import {BootstrapTable,  TableHeaderColumn} from 'react-bootstrap-table';
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






