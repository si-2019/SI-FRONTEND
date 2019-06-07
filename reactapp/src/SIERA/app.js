import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import KontaktPod from "./kontaktPod";
import Stranice from "./stranice";
import Fotografija from "./fotografija";
import LicniPod from "./licniPod.jsx";
import Navigation from "./Navigation";
import DropDownZavrsni from "./DropDownZavrsni.jsx";
import PrikaziStatus from "./PrikaziStatus.jsx";
import Ocjene from "./Ocjene";
import Profil from "./ProfilStudenta";
import axios from "axios";
import Potvrda from "./Potvrda";
import PopUp from "./PopUp";
import Prosjek from "./Prosjek.jsx";
import "./App.css";

import ListaTrenutnihPredmeta from "./listaTrenutnihPredmeta";

import ListaOdslusanihPredmeta from "./listaOdslusanihPredmeta";
import UgovorOUcenju from "./ugovorOUcenju";
import IspitiTabela from "./ispitiTabela";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/Siera/podaci-o-studentu"  render={() => (
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
            )} />
            <Route exact path="/Siera/lista-predmeta" render={() => (
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm">
                    <ListaTrenutnihPredmeta />
                    <ListaOdslusanihPredmeta />
                  </div>
                </div>
              </div>
            )} />
            <Route exact path="/Siera/ugovor-o-ucenju" render={() => (
              <div class="container-fluid">
                <div class="row">
                  <div className="col-sm">
                    <UgovorOUcenju />
                  </div>
                </div>
              </div>
            )}  />
            <Route exact path="/Siera/zavrsni-rad" render={() =>
              <div class="container-fluid">
                <DropDownZavrsni />
                <PrikaziStatus />
              </div>
            } />
            <Route exact path="/Siera/ocjene" render={() =>
              <div class="container-fluid" >
                <Ocjene />
              </div>
            } />
              
          <Route
            exact
            path="/Siera/ispiti"
            render={() => (
              <div class="container-fluid">
                <IspitiTabela />
              </div>
            )}
          />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
