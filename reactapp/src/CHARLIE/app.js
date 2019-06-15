import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from 'axios'

import InformacijeOIspitu from "./components/InformacijeOIspitu";
import KreirajIspit from "./components/KreirajIspit";
import KreirajIspitDetalji from "./components/KreirajIspitDetalji";
import KreiraniIspiti from "./components/KreiraniIspiti";
import PregledStudenata from "./components/PregledStudenata";
import PrijavaIspita from "./components/PrijavaIspita";
import PrijavljeniIspiti from "./components/PrijavljeniIspiti";
import UrediIspit from "./components/UrediIspit";

import LeftMenuCharlie from "./LeftMenuCharlie";
import "./appCharlie.css";
class App extends Component {

  constructor() {
    super();
    this.state = {
      activeContentId: 0,
      menuButtonTitles: [, "Ispiti"],
      menuButtonsProfesor: [{
        btnText: "Kreiraj ispit",
        component: <KreirajIspit onChangeActiveId={this.onChangeActiveId}/>
        
      }, {
        btnText: "Kreirani ispiti",
        component: <KreiraniIspiti />
      }, {
        btnText: "Kreiraj ispit detalji",
        component: <KreirajIspitDetalji />
      }],
      menuComponentsProfesor: [{
        naziv: "Profil",
        changeId: 0,
        component: <KreirajIspit /> //Prof
      },{
        naziv: "Profil",
        changeId: 1,
        component: <KreiraniIspiti /> //Prof
      },{
        naziv: "Profil",
        changeId: 2,
        component: <KreirajIspitDetalji/> //Prof
      }],
      menuButtonsStudent: [{
        btnText: "Informacije o ispitu",
        component: <InformacijeOIspitu />
      }, {
        btnText: "Prijava ispita",
        component: <PrijavaIspita />
      }, {
        btnText: "Prijavljeni ispiti",
        component: <PrijavljeniIspiti />
      }],
      menuComponentsStudent: [{
        naziv: "Profil",
        changeId: 0,
        component: <PrijavaIspita /> // Stud
      }, {
        naziv: "Profil",
        changeId: 1,
        component: <PrijavljeniIspiti /> //Stud
      },
      {
        naziv: "Profil",
        changeId: 2,
        component: <InformacijeOIspitu /> // Stud
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

  isProfesor = async() =>{
    const id = window.localStorage.getItem("id") || 1;
    const token = window.localStorage.getItem("token");
    const username = window.localStorage.getItem("username");

    // axios.get('https://si2019romeo.herokuapp.com/users/validate', username, {
    //   "Authorization": token
    // })
    const uloga = 'PROFESOR';
    return false
    //Kad oscar rijesi cors, ubaci ovaj dio
    // try {
    //   return false
    //   const {data, status} = await axios.get(`https://si2019oscar.herokuapp.com/pretragaId/imaUlogu/${id}/${uloga}`)
    //   return data  
    // } catch (error) {
    //   console.log(error.message)
    // }
    
  }

  render() {
    return (
      <>
      
        <div className="App" id="appCharlie">
          <div className="containter-fluid">
            <div className="row" id="rowCharlie" style={{ margin: "0px", padding: "0px"}}>
              <div className="col-lg-2 col-md-3 col-sm-12" style={{
                backgroundColor: "#2C3E50",
                minHeight: "100%",
                padding: "0px",
                margin: "0px"
              }}>
                <LeftMenuCharlie
                  triggerChangeActiveId={this.onChangeActiveId}
                  btnList={this.isProfesor() && this.state.menuComponentsProfesor
                    || this.state.menuComponentsStudent}
                />
              </div>
              <div className="col-lg flex-grow-1 col-sm-12 col-md" style={{
                backgroundColor: "white",
                minHeight: "calc(100vh - 80px)",
                margin: "0px",
                padding: "0px"
              }}>
                { this.isProfesor() && this.state.menuComponentsProfesor[this.state.activeContentId].component
                  || this.state.menuComponentsStudent[this.state.activeContentId].component
                }
              </div>
            </div>
          </div>
        
         
        </div>
        </>
    );
  }
}

export default App;
