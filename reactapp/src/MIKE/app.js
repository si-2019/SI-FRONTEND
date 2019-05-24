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
import UnosPodatakaONovomProjektu from './components/UnosPodatakaONovomProjektu/UnosPodatakaONovomProjektu';
import DostupniPredmetiZaGrupu from './components/DostupniPredmetiZaGrupu/DostupniPredmetiZaGrupu'
import PregledDetaljaPredmeta from './components/PregledDetaljaPredmeta/PregledDetaljaPredmeta';
import UnosInformacija from './UnosInformacija';
import ListaPredmetaAsistenta from './prikazListePredmetaAsistenta';

class Mike extends Component {
  constructor(props){
    super(props);
    this.state={
      forma:"null"
    }
    this.kreiranjeNovogProjekta=this.kreiranjeNovogProjekta.bind(this);

    this.pregledDetaljaPredmeta=this.pregledDetaljaPredmeta.bind(this);
    this.kreiranjeGrupe=this.kreiranjeGrupe.bind(this);
    this.listaProjekata=this.listaProjekata.bind(this);

    this.pregledDetaljaPredmeta=this.pregledDetaljaPredmeta.bind(this);

    this.pregledZadatakaProjektaCall=this.pregledZadatakaProjektaCall.bind(this);
    this.mockKreiranjeProjektaAsistent=this.mockKreiranjeProjektaAsistent.bind(this);
    this.unosInformacija=this.unosInformacija.bind(this);

  }

  render() {   
    if(this.state.forma=="null") return (
      <div className="Mike">
        <button onClick={this.kreiranjeNovogProjekta}>Unos podataka o novom projektu</button>
     
        <button onClick={this.kreiranjeGrupe}>Kreiranje projektne grupe</button>
        <button onClick={this.listaProjekata}>Pregled projekata studenta</button>

        <button onClick={this.pregledDetaljaPredmeta}>Pregled projekata asistenta</button>

        <button onClick={this.pregledDetaljaPredmeta}>Pregled detalja predmeta</button>
        <button onClick={this.pregledZadatakaProjektaCall}>Rad na projektu (zadaci na projektu)</button>
        <button onClick={this.mockKreiranjeProjektaAsistent}>Kreiranje projekta na nivou predmeta</button>
      </div>
    );
    else if (this.state.forma=="kreiranjeProjekta") return (
      <UnosPodatakaONovomProjektu />
    );
    else if (this.state.forma=="kreiranjeGrupe") return (
      <Lista submit={this.unosInformacija}/>
    );
    else if (this.state.forma=="listaProjekata") return (
        <PregledListeProjekata />
    )
    else if (this.state.forma=="detaljiPredmeta") return (
      <ListaPredmetaAsistenta />
    );
    else if(this.state.forma == "projektniZadaci") return (
      <PregledZadatakaProjekta/>
    );
    else if(this.state.forma=="KreiranjeAsistent") return(
      <KreiranjeProjekta />
    );
    else if(this.state.forma="unosInformacija") return(
      <UnosInformacija/>
    )
  }
  kreiranjeNovogProjekta(){
    this.setState({forma:"kreiranjeProjekta"});
  }
  kreiranjeGrupe(){
    this.setState({forma:"kreiranjeGrupe"});
  }
  listaProjekata(){
    this.setState({forma:"listaProjekata"});
  }

  pregledDetaljaPredmeta(){
    this.setState({forma:"detaljiPredmeta"});
  }

  pregledZadatakaProjektaCall(){
    this.setState({forma:"projektniZadaci"});
  }
  mockKreiranjeProjektaAsistent(){
    this.setState({forma:"KreiranjeAsistent"});
  }
  unosInformacija(){
    this.setState({forma:"unosInformacija"});
  }
}

export default Mike;
