import React, { Component } from 'react';
import './App.css';
import PregledListeProjekata from './components/Pregled projekata studenta/PregledListeProjekata';
import Lista  from './components/Kreiranje projektne grupe/prikazListe';
import PregledZadatakaProjekta from './components/PregledZadatakaProjekta/PregledZadatakaProjekta';
import KreiranjeProjekta from './components/Kreiranje projekta na nivou predmeta/FormaZaKreiranjeProjektaNaNivouPredmeta';
import UnosInformacija from './components/Kreiranje projektne grupe/UnosInformacija';
import ListaPredmetaAsistenta from './components/Pregled projekata asistenta/prikazListePredmetaAsistenta';
import GenerisanjeGrupa from './components/Generisanje projektnih grupa/GenerisanjeGrupa';
import GenerisiProjektnuGrupu from './components/GenerisanjeProjektnihGrupa/FormaZaGenerisanje';

class Mike extends Component {
  constructor(props){
    super(props);
    this.state={
      forma:"null"
    }
    this.kreiranjeGrupe=this.kreiranjeGrupe.bind(this);
    this.listaProjekata=this.listaProjekata.bind(this);
    this.pregledDetaljaPredmeta=this.pregledDetaljaPredmeta.bind(this);
    this.pregledZadatakaProjektaCall=this.pregledZadatakaProjektaCall.bind(this);
    this.mockKreiranjeProjektaAsistent=this.mockKreiranjeProjektaAsistent.bind(this);
    this.unosInformacija=this.unosInformacija.bind(this);
    this.generisanjeGrupe=this.generisanjeGrupe.bind(this);
  }

  render() {   
    if(this.state.forma=="null") return (
      <div className="Mike">
       
        <button onClick={this.kreiranjeGrupe}>Kreiranje projektne grupe</button>
        <button onClick={this.listaProjekata}>Pregled projekata studenta</button>
        <button onClick={this.pregledDetaljaPredmeta}>Pregled projekata asistenta</button>
        <button onClick={this.pregledZadatakaProjektaCall}>Rad na projektu (zadaci na projektu)</button>
        <button onClick={this.mockKreiranjeProjektaAsistent}>Kreiranje projekta na nivou predmeta</button>
        <button onClick={this.generisanjeGrupe}>Generisanje projektne grupe</button>
      </div>
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
    else if(this.state.forma=="unosInformacija") return(
      <UnosInformacija/>
    )
    else if(this.state.forma=="generisanjeGrupe") return(
      <GenerisanjeGrupa idAsistent={2} predmeti={[
        {nazivPredmeta:"Softver Inženjering",idProjekat:1, brojStudenata:50},
        {nazivPredmeta:"Vještačka inteligencija",idProjekat:2, brojStudenata:30}]}/>
    )
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
  generisanjeGrupe(){
    this.setState({forma:"generisanjeGrupe"});
  }
}

export default Mike;
