import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import KontaktPod from "./kontaktPod";
import Stranice from "./stranice";
import Fotografija from "./fotografija";
import LicniPod from "./licniPod.jsx";
import axios from "axios";
import Potvrda from "./Potvrda";
import PopUp from "./PopUp";
import "./App.css";

import ListaTrenutnihPredmeta from "./listaTrenutnihPredmeta";

import ListaOdslusanihPredmeta from "./listaOdslusanihPredmeta";
import UgovorOUcenju from "./ugovorOUcenju";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="/Siera">
            Početna
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/Siera/podaci-o-studentu">
                  Podaci <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Siera/lista-predmeta">
                  Lista predmeta
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Siera/ugovor-o-ucenju">
                  Ugovor o učenju
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <BrowserRouter>
          <Route
            exact
            path="/Siera/lista-predmeta"
            render={() => (
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm">
                    <ListaTrenutnihPredmeta />
                    <ListaOdslusanihPredmeta />
                  </div>
                </div>
              </div>
            )}
          />
          <Route
            exact
            path="/Siera/podaci-o-studentu"
            render={() => (
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
            )}
          />
          <Route
            exact
            path="/Siera/ugovor-o-ucenju"
            render={() => (
              <div class="container-fluid">
                <div class="row">
                  <div className="col-sm">
                    <UgovorOUcenju />
                  </div>
                </div>
              </div>
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
