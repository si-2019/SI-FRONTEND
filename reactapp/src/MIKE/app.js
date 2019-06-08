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
      korisnik:"null",
      forma:"null",
      predmeti:[]
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
    {/*if(this.state.forma=="null")*/} return (
     // <div className="col-6">
        <div>
          <h2>Mike kolaboracija</h2>
          <div className="App">
            <div className="row">
              <div id="head_meni">
                <button id="naslov" className="btn btn-primary">Opcije kolaboracije</button>
                <div id="odabrana_opcija"></div>
              </div>
              <div id="glavni_meni">
                <div id="left">
                  <div>
                    <button className="btn btn-primary left-buttons" onClick={this.kreiranjeGrupe}>Kreiranje projektne grupe</button>
                    <button className="btn btn-primary left-buttons" onClick={this.listaProjekata}>Pregled projekata studenta</button>
                    <button className="btn btn-primary left-buttons" onClick={this.pregledDetaljaPredmeta}>Pregled projekata asistenta</button>
                    {/*<button className="btn btn-primary left-buttons" onClick={this.pregledZadatakaProjektaCall}>Rad na projektu (zadaci na projektu)</button>*/}
                    <button className="btn btn-primary left-buttons" onClick={this.mockKreiranjeProjektaAsistent}>Kreiranje projekta na nivou predmeta</button>
                    <button className="btn btn-primary left-buttons" onClick={this.generisanjeGrupe}>Generisanje projektne grupe</button>
                  </div>
                </div>
                <div id="right">
                  <div id="kreiranje_grupe" style={{display : this.state.forma == "kreiranjeGrupe" ? 'inherit' : 'none'}}>
                    <Lista submit={this.unosInformacija}/>
                  </div>
                  <div id="lista_projekata" style={{display : this.state.forma == "listaProjekata" ? 'inherit' : 'none'}}>
                    <PregledListeProjekata />
                  </div>
                  <div id="kreiranje_grupe" style={{display : this.state.forma == "PregledAsistent" ? 'inherit' : 'none'}}>
                    <ListaPredmetaAsistenta idAsistent={41} predmeti={this.state.predmeti} />
                  </div>
                  <div id="kreiranje_grupe" style={{display : this.state.forma == "projektniZadaci" ? 'inherit' : 'none'}}>
                    <PregledZadatakaProjekta/>
                  </div>
                  <div id="kreiranje_grupe" style={{display : this.state.forma == "KreiranjeAsistent" ? 'inherit' : 'none'}}>
                    <KreiranjeProjekta idPredmeta={1} 
                      asistenti={[
                      {idAsistenta: 1, ime:"Nerma Hanic"},
                      {idAsistenta: 2, ime:"Haso Hasic"}
                      ]}/>
                  </div>
                  <div id="kreiranje_grupe" style={{display : this.state.forma == "unosInformacija" ? 'inherit' : 'none'}}>
                    <UnosInformacija/>
                  </div>
                  <div id="kreiranje_grupe" style={{display : this.state.forma == "generisanjeGrupe" ? 'inherit' : 'none'}}>
                    <GenerisanjeGrupa idAsistent={2} predmeti={[
                      {nazivPredmeta:"Softver Inženjering",idProjekat:1, brojStudenata:50},
                      {nazivPredmeta:"Vještačka inteligencija",idProjekat:2, brojStudenata:30}]}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
     // </div>
    );
    {/*else if (this.state.forma=="kreiranjeGrupe") return (
     <Lista submit={this.unosInformacija}/>
     
    );
    else if (this.state.forma=="listaProjekata") return (
        <PregledListeProjekata />
    )
    else if (this.state.forma=="PregledAsistent") return (
      <ListaPredmetaAsistenta idAsistent={41} predmeti={this.state.predmeti} />
    );
    else if(this.state.forma == "projektniZadaci") return (
      <PregledZadatakaProjekta/>
    );
    else if(this.state.forma=="KreiranjeAsistent") return(
      <KreiranjeProjekta idPredmeta={1} 
        asistenti={[
        {idAsistenta: 1, ime:"Nerma Hanic"},
        {idAsistenta: 2, ime:"Haso Hasic"}
        ]}/>
    );
    else if(this.state.forma=="unosInformacija") return(
      <UnosInformacija/>
    )
    else if(this.state.forma=="generisanjeGrupe") return(
      <GenerisanjeGrupa idAsistent={2} predmeti={[
        {nazivPredmeta:"Softver Inženjering",idProjekat:1, brojStudenata:50},
        {nazivPredmeta:"Vještačka inteligencija",idProjekat:2, brojStudenata:30}]}/>
      )*/}
  }
  kreiranjeGrupe(){
    this.setState({forma:"kreiranjeGrupe"});
  }
  listaProjekata(){
    this.setState({forma:"listaProjekata"});
  }
  pregledDetaljaPredmeta(){
		var ajax=new XMLHttpRequest();
    var komponenta=this;
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4 && ajax.status=="200"){
					var tekst=ajax.responseText;
          if(tekst.length==0) return;
          console.log(tekst);
					var json=JSON.parse(tekst);
					var jsonNovi=[];
					for(var i=0;i<json.length;i++){
							jsonNovi.push({idPredmet:json[i].idPredmet,naziv:json[i].naziv});
					}
					komponenta.setState(state=>({
            forma:"PregledAsistent",
            predmeti:jsonNovi
          }));
        }
        else if(ajax.status!="200"){
          komponenta.setState(state=>({
            forma:"PregledAsistent",
            predmeti:[]
          }));
        }
		}
		ajax.open("POST","http://localhost:31913/services/outsourced/getPredmetiKorisnik",true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("idKorisnik=41");
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
