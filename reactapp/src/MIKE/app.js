import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PregledListeProjekata from './PregledListeProjekata';
import Lista  from './components/KreiranjeProjekta/prikazListe';
import KreiranjeProjekta from './components/KreiranjeProjekta/FormaZaKreiranjeProjektaNaNivouPredmeta';
import MockListaPredmeta from './MockListaPredmeta';
import MockKreiranjeProjektaAsistent from './MockKreiranjeProjektaAsistent';
import IzborVodje from './components/FormaZaIzborVodje';
import InterfejsUredjivanjeClanovaGrupe from './InterfejsUredjivanjeClanovaGrupe'
//import GenerisanjeProjektneGrupe from './components/GenerisanjeProjektnihGrupa/FormaZaGenerisanje'

class Mike extends Component {
  constructor(props){
    super(props);
    this.state={
      forma:"null"
    }
    this.kreiranjeGrupe=this.kreiranjeGrupe.bind(this);
    this.listaProjekata=this.listaProjekata.bind(this);
    this.mockKreiranjeProjektaAsistent=this.mockKreiranjeProjektaAsistent.bind(this);
    this.uredjivanjeGrupe=this.uredjivanjeGrupe.bind(this);
  }
  render() {
   
    if(this.state.forma=="null") return (
      <div className="Mike">
       
        <button onClick={this.kreiranjeGrupe}>Kreiranje projektne grupe</button>
        <button onClick={this.listaProjekata}>Pregled projekta studenta</button>
        <button>Rad na projektu</button>
        <button onClick={this.mockKreiranjeProjektaAsistent}>Kreiranje projekta na nivou predmeta</button>
        <button>Bodovanje projekta</button>
        <button onClick={this.uredjivanjeGrupe}>TEMP - uredjivanje grupe</button>
      </div>
    );
    else if (this.state.forma=="kreiranjeGrupe") return (
      <Lista />
    );
    else if (this.state.forma=="listaProjekata") return (
        <PregledListeProjekata />
    );
    else if(this.state.forma=="mockKreiranje") return(
      <MockKreiranjeProjektaAsistent />
    );
    else if(this.state.forma=="uredjivanjeGrupe") return(
      <InterfejsUredjivanjeClanovaGrupe/>
    );
  }
  kreiranjeGrupe(){
    this.setState({forma:"kreiranjeGrupe"});
  }
  listaProjekata(){
    this.setState({forma:"listaProjekata"});
  }
  mockKreiranjeProjektaAsistent(){
    this.setState({forma:"mockKreiranje"});
  }
  uredjivanjeGrupe(){
    this.setState({forma:"uredjivanjeGrupe"});
  }
}

export default Mike;
