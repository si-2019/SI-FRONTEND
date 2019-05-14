import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import KontaktPod from "./components/kontaktPod";
import Stranice from "./components/stranice";
import Fotografija from "./components/fotografija";
import LicniPod from "./components/licniPod";
import axios from "axios";
import Potvrda from "./Potvrda";
import PopUp from "./PopUp";
import "./App.css";

import ListaTrenutnihPredmeta from "./listaTrenutnihPredmeta";

import ListaOdslusanihPredmeta from "./listaOdslusanihPredmeta";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/Siera/lista-predmeta' render={() =>
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm">
                  <ListaTrenutnihPredmeta />
                  <ListaOdslusanihPredmeta />
                </div>
              </div>
            </div>
          } />
          <Route exact path="/Siera/podaci-o-studentu" render={() =>
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm">
                  <Fotografija />
                  <KontaktPod />
                  <Stranice />
                </div>
                <div class="col-sm">
                  <LicniPod />
                </div>
              </div>
            </div>
          }/>
        </BrowserRouter>
          
      </div>
        );
      }
    }
    
    export default App;
