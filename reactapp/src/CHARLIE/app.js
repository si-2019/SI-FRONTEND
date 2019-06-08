import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import InformacijeOIspitu from "./components/InformacijeOIspitu";
import KreirajIspit from "./components/KreirajIspit";
import KreirajIspitDetalji from "./components/KreirajIspitDetalji";
import KreiraniIspiti from "./components/KreiraniIspiti";
import PregledStudenata from "./components/PregledStudenata";
import PrijavaIspita from "./components/PrijavaIspita";
import PrijavljeniIspiti from "./components/PrijavljeniIspiti";
import UrediIspit from "./components/UrediIspit";

import LeftMenu from "./LeftMenu";
import "./appCharlie.css";
class App extends Component {

  constructor() {
    super();
    this.state = {
      activeContentId: 0,
      menuButtonTitles: [, "Ispiti"],
      menuButtonsProfesor: [{
        btnText: "Kreiraj ispit",
        component: <KreirajIspit />
      }, {
        btnText: "Kreirani ispiti",
        component: <KreiraniIspiti />
      }],
      menuComponentsProfesor: [{
        naziv: "Profil",
        changeId: 0,
        component: <KreirajIspit />
      }],
      menuButtonsStudent: [{
        btnText: "Prijava ispita",
        component: <PrijavaIspita />
      }, {
        btnText: "Prijavljeni ispiti",
        component: <PrijavljeniIspiti />
      }],
      menuComponentsStudent: [{
        naziv: "Profil",
        changeId: 0,
        component: <PrijavaIspita />
      }],
    }
    this.onChangeActiveId = this.onChangeActiveId.bind(this);
  }
  componentDidMount() {
    var help = [];
    var i = 0;
    var helps = [];
    var j = 0;
    this.state.menuButtonsProfesor.forEach(x => {
      help.push({
        naziv: x.btnText,
        changeId: i,
        component: x.component
      });
      i++;
    });
    this.setState({
      menuComponentsProfesor: help
    });

    this.state.menuButtonsStudent.forEach(x => {
      helps.push({
        naziv: x.btnText,
        changeId: j,
        component: x.component
      });
      j++;
    });
    this.setState({
      menuComponentsStudent: helps
    });

  }
  onChangeActiveId = (id) => {
    this.setState({
      activeContentId: id,
    })
  };
  render() {
    return (
      <>
      
        <div className="App">

          <div className="containter-fluid">
            <div className="row" style={{ margin: "0px", padding: "0px"}}>
              <div className="col-lg-2 col-md-3 col-sm-12" style={{
                backgroundColor: "#2C3E50",
                minHeight: "100%",
                padding: "0px",
                margin: "0px"
              }}>
                <LeftMenu
                  triggerChangeActiveId={this.onChangeActiveId}
                  btnList={this.state.menuComponentsProfesor}
                />
              </div>
              <div className="col-lg flex-grow-1 col-sm-12 col-md" style={{
                backgroundColor: "white",
                minHeight: "calc(100vh - 80px)",
                margin: "0px",
                padding: "0px"
              }}>

                {this.state.menuComponentsProfesor[this.state.activeContentId].component}


              </div>
            </div>
          </div>
        
        <BrowserRouter>
          <Route
            path="/charlie/info-o-ispitu"
            exact
            component={InformacijeOIspitu}
          />
          <Route
            path="/charlie/kreiraj-ispit-detalji"
            exact
            component={KreirajIspitDetalji}
          />
          <Route
            path="/charlie/kreirani-ispiti"
            exact
            component={KreiraniIspiti}
          />
          <Route
            path="/charlie/pregled-studenata"
            exact
            component={PregledStudenata}
          />
          <Route
            path="/charlie/prijava-ispita"
            exact
            component={PrijavaIspita}
          />
          <Route
            path="/charlie/prijavljeni-ispiti"
            exact
            component={PrijavljeniIspiti}
          />
          <Route path="/charlie/uredi-ispit" exact component={UrediIspit} />
          <Route path="/charlie/kreiraj-ispit" exact component={KreirajIspit} />
        </BrowserRouter>
        </div>
        </>
    );
  }
}

export default App;
