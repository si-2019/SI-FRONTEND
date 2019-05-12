import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PregledListeProjekata from './PregledListeProjekata';
import Lista  from './prikazListe';
import KreiranjeProjekta from './components/KreiranjeProjekta/FormaZaKreiranjeProjektaNaNivouPredmeta';
import MockListaPredmeta from './MockListaPredmeta';
import MockKreiranjeProjektaAsistent from './MockKreiranjeProjektaAsistent';
import IzborVodje from './components/FormaZaIzborVodje';
//import GenerisanjeProjektneGrupe from './components/GenerisanjeProjektnihGrupa/FormaZaGenerisanje'
import PregledDetaljaPredmeta from './components/PregledDetaljaPredmeta/PregledDetaljaPredmeta';



class Mike extends Component {
  constructor(props){
    super(props);
    this.state={
      forma:"null"
    }
    this.pregledDetaljaPredmeta=this.pregledDetaljaPredmeta.bind(this);
    this.kreiranjeGrupe=this.kreiranjeGrupe.bind(this);
    this.listaProjekata=this.listaProjekata.bind(this);
    this.mockKreiranjeProjektaAsistent=this.mockKreiranjeProjektaAsistent.bind(this);
    
  }
  render() {
   
    if(this.state.forma=="null") return (
      <div className="Mike">
        <button onClick={this.pregledDetaljaPredmeta}>Pregled detalja predmeta</button>
        <button onClick={this.kreiranjeGrupe}>Kreiranje projektne grupe</button>
        <button onClick={this.listaProjekata}>Pregled projekta studenta</button>
        <button>Rad na projektu</button>
        <button onClick={this.mockKreiranjeProjektaAsistent}>Kreiranje projekta na nivou predmeta</button>
        <button>Bodovanje projekta</button>
      </div>
    );
    else if (this.state.forma=="detaljiPredmeta") return (
      <PregledDetaljaPredmeta />
    );
    else if (this.state.forma=="kreiranjeGrupe") return (
      <Lista />
    );
    else if (this.state.forma=="listaProjekata") return (
        <PregledListeProjekata />
    );
    else if(this.state.forma="mockKreiranje") return(
      <MockKreiranjeProjektaAsistent />
    );
    
  }
  pregledDetaljaPredmeta(){
    this.setState({forma:"detaljiPredmeta"});
  };
  
  kreiranjeGrupe(){
    this.setState({forma:"kreiranjeGrupe"});
  }
  listaProjekata(){
    this.setState({forma:"listaProjekata"});
  }
  mockKreiranjeProjektaAsistent(){
    this.setState({forma:"mockKreiranje"});
  }
}

export default Mike;
