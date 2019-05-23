import React, {Component} from 'react';
import Teme from '../Tema';
import DugmeZaSort from '../DugmeZaSort';
import LISTA_PROBNA from './LISTA';


import {
  withRouter
} from 'react-router-dom'
import { resolve } from 'path';

const themesApi= 'http://localhost:31919/getThemes/'; //plus id teme



class Lista extends Component{
  constructor() {
    super();
    this.state = {
      teme:[],
      obrnut: false
    };
    
  }
  
  componentWillMount(){
    this.setState({ucitavanje:true});
    fetch(themesApi+'4')
      .then(response=>response.json())
      .then(teme=>this.setState({teme:teme,ucitavanje:false}));
    //this.setState({teme:LISTA_PROBNA,ucitavanje:false});
  }
 //                   dodaj ,obrnut
  promjeniStateNiza (niz, obrnut, vm) {
    let newState = this.state;
    newState = {
      teme:niz,
      obrnut: obrnut
    }
    this.setState(newState);
    
  }
  
  

  
  render(){
    if(this.state.ucitavanje){
      return <p>Ucitavanje...</p>
    }
      return(
        <div>
          <div>< button><a href="/Tango/NovaTema">Dodaj novu temu</a></button>
 </div>
          <div>
            <DugmeZaSort 
              teme={this.state.teme} 
              sortirajNiz={this.promjeniStateNiza.bind(this)}
              obrnut={this.state.obrnut}
            />
          </div>
          <div>
            <input type='text' class="form-control bg-white rounded" value="Search"></input>
          </div>
          {/* <button onClick={() => {this.sortirajAZ(this.state.teme)}}>a-z</button> */}
        <div>
          <Teme teme={this.state.teme}/>
        </div>
        </div>
      );
  }
}

export default Lista;
