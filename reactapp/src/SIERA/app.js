import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import KontaktPod from  './components/kontaktPod';
import Stranice from './components/stranice';
import Fotografija from './components/fotografija';
import LicniPod from './components/licniPod';
import axios from 'axios';




import Potvrda from "./Potvrda";
import PopUp from "./PopUp"
import "./App.css";

import ListaTrenutnihPredmeta from './listaTrenutnihPredmeta';

import ListaOdslusanihPredmeta from './listaOdslusanihPredmeta';


class App extends Component {
  render() {
    return (

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Fotografija/>
            <KontaktPod/>
            <Stranice/>
          </div>
          <div class="col-sm">
          <LicniPod></LicniPod>
          </div>
        </div>

      <div className="App">
        <h1>SIERA</h1>

        <ListaTrenutnihPredmeta/>

        <ListaOdslusanihPredmeta/>


      </div>
    );
  }
}

export default App;

