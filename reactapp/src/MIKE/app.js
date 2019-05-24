import React, { Component } from 'react';
import './App.css';
import PregledListeProjekata from './PregledListeProjekata';
import Lista  from './prikazListe';

import PregledZadatakaProjekta from './components/PregledZadatakaProjekta/PregledZadatakaProjekta';

import KreiranjeProjekta from './components/KreiranjeProjekta/FormaZaKreiranjeProjektaNaNivouPredmeta';
import MockListaPredmeta from './MockListaPredmeta';
import MockKreiranjeProjektaAsistent from './MockKreiranjeProjektaAsistent';
import IzborVodje from './components/FormaZaIzborVodje';
import InterfejsUredjivanjeClanovaGrupe from './InterfejsUredjivanjeClanovaGrupe'
//import GenerisanjeProjektneGrupe from './components/GenerisanjeProjektnihGrupa/FormaZaGenerisanje'
import DostupniPredmetiZaGrupu from './components/DostupniPredmetiZaGrupu/DostupniPredmetiZaGrupu'

class Mike extends Component {
  constructor(props){
    super(props);
    this.state={
      forma:"null"
    }
    this.kreiranjeGrupe=this.kreiranjeGrupe.bind(this);
    this.listaProjekata=this.listaProjekata.bind(this);

    this.pregledZadatakaProjektaCall=this.pregledZadatakaProjektaCall.bind(this);
    this.mockKreiranjeProjektaAsistent=this.mockKreiranjeProjektaAsistent.bind(this);
    this.uredjivanjeGrupe=this.uredjivanjeGrupe.bind(this);

  }

  render() {   
    if(this.state.forma=="null") return (
      <div className="Mike">
       
        <button onClick={this.kreiranjeGrupe}>Kreiranje projektne grupe</button>
        <button onClick={this.listaProjekata}>Pregled projekta studenta</button>

        <button onClick={this.pregledZadatakaProjektaCall}>Rad na projektu (zadaci na projektu)</button>
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
    )
    else if(this.state.forma == "projektniZadaci") return (
      <PregledZadatakaProjekta/>
    );
    else if(this.state.forma=="mockKreiranje") return(
      <MockKreiranjeProjektaAsistent />
    );
    else if(this.state.forma=="uredjivanjeGrupe") return(
      <InterfejsUredjivanjeClanovaGrupe studentID={1} projektID={29}/>
    );
  }
  kreiranjeGrupe(){
    this.setState({forma:"kreiranjeGrupe"});
  }
  listaProjekata(){
    this.setState({forma:"listaProjekata"});
  }

  pregledZadatakaProjektaCall(){
    this.setState({forma:"projektniZadaci"});
  }

  mockKreiranjeProjektaAsistent(){
    this.setState({forma:"mockKreiranje"});
  }
  uredjivanjeGrupe(){
    this.setState({forma:"uredjivanjeGrupe"});

  }
}

export default Mike;
