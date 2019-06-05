import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import KontaktPod from "./kontaktPod";
import Stranice from "./stranice";
import Fotografija from "./fotografija";
import LicniPod from "./licniPod.jsx";
import Profil from "./ProfilStudenta";
import axios from "axios";
import Potvrda from "./Potvrda";
import PopUp from "./PopUp";
import DropDownZavrsni from "./DropDownZavrsni.jsx";
import PrikaziStatus from "./PrikaziStatus.jsx";
import Prosjek from "./Prosjek.jsx";
import "./App.css";
import LeftMenuStudent from "./LeftMenuStudent"
import ListaTrenutnihPredmeta from "./listaTrenutnihPredmeta";

import ListaOdslusanihPredmeta from "./listaOdslusanihPredmeta";
import UgovorOUcenju from "./ugovorOUcenju";
import IspitiTabela from "./ispitiTabela";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeContentId: 1,
      menuButtonTitles: ["Profil", "Ugovor o učenju", "Završni rad", "Predmeti", "Ocjene", "Zadaće"],
      startId: 0
    }
    this.onChangeActiveId = this.onChangeActiveId.bind(this);
  }
  onChangeActiveId = (id) => {
    this.setState({
      activeContentId: id,
    })
  };
  render() {
    var menuButtons = [];
    var i = 1;
    this.state.menuButtonTitles.forEach(x => {
      menuButtons.push({
        naziv: x,
        changeId: i
      });
      i++;
    })
    return (
      <div className="App">
       
          <div id="left">
            <LeftMenuStudent
              triggerChangeActiveId={this.onChangeActiveId}
              btnList={menuButtons}
            />
          </div>
          <div id="right">
            <h1>Ovdje ide content :D</h1>
          </div>
        
      </div>
    );
  }
}

export default App;
