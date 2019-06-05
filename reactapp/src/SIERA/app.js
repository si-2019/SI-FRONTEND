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
import "./AppSiera.css";
import LeftMenuStudentSiera from "./LeftMenuStudentSiera"
import ListaTrenutnihPredmeta from "./listaTrenutnihPredmeta";

import ListaOdslusanihPredmeta from "./listaOdslusanihPredmeta";
import UgovorOUcenju from "./ugovorOUcenju";
import IspitiTabela from "./ispitiTabela";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeContentId: 0,
      menuButtonTitles: [ , "Ispiti"],
      komponente: [<ListaTrenutnihPredmeta />],
      menuButtons: [{
        btnText: "Profil",
        component: <LicniPod />
      },{
        btnText: "Ugovor o učenju",
        component:  <UgovorOUcenju />
      },{
        btnText: "Završni rad",
        component: <DropDownZavrsni />
      },{
        btnText:"Predmeti",
        component: <ListaTrenutnihPredmeta />
      },{
        btnText:"Ispiti",
        component: <IspitiTabela />
      }],
      menuComponents:[{
        naziv: "Profil",
        changeId: 0,
        component: <LicniPod />
      }]
    }
    this.onChangeActiveId = this.onChangeActiveId.bind(this);
  }
  componentDidMount(){
    var help = [];
    var i = 0;
    this.state.menuButtons.forEach(x => {
      help.push({
        naziv: x.btnText,
        changeId: i,
        component: x.component
      });
      i++;
    });
    this.setState({
      menuComponents: help
    });

  }
  onChangeActiveId = (id) => {
    this.setState({
      activeContentId: id,
    })
  };
  render() {
   
    return (
      <div className="App">

        <div id="leftSiera">
          <LeftMenuStudentSiera
            triggerChangeActiveId={this.onChangeActiveId}
            btnList={this.state.menuComponents}
          />
        </div>
        <div id="rightSiera">
            {this.state.menuComponents[this.state.activeContentId].component}
          
        </div>

      </div>
    );
  }
}

export default App;
