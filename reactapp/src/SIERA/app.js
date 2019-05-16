import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import KontaktPod from "./kontaktPod";
import Stranice from "./stranice";
import Fotografija from "./fotografija";
import LicniPod from "./licniPod.jsx";
import axios from "axios";
import Potvrda from "./Potvrda";
import PopUp from "./PopUp";
import DropDownZavrsni from "./DropDownZavrsni.jsx";
import "./App.css";

import ListaTrenutnihPredmeta from "./listaTrenutnihPredmeta";

import ListaOdslusanihPredmeta from "./listaOdslusanihPredmeta";

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/Siera/lista-predmeta' render={() =>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm">
                  <ListaTrenutnihPredmeta />
                  <ListaOdslusanihPredmeta />
                </div>
              </div>
            </div>
          } />
          <Route exact path="/Siera/podaci-o-studentu" render={() =>
            <div class="container-fluid">
              <div class="row">
                <div className="col-sm">
                  <KontaktPod />
                </div>
                <div class="col-sm">
                  <LicniPod />
                </div>

              </div>
            </div>
          } />
          <Route exact path="/Siera/zavrsni-rad" render={() =>
            <div class="container-fluid">
              <DropDownZavrsni />
            </div>

          } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
