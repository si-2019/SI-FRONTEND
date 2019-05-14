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
          } />
        </BrowserRouter>
        <div class="alert alert-dismissible alert-warning">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#" class="alert-link">vel scelerisque nisl consectetur et</a>.</p>
        </div>
      </div>
    );
  }
}

export default App;
