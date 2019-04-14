import React from "react";

import { CustomInput, Form, FormGroup, Label, Input, Table, Button } from "reactstrap";
import "../bootstrap.css";
import OsnovniPodaciKreiranjaZadace from "./osnovniPodaciKreiranjaZadace";
import Baza from "./baza";

function validiraj(ime,datum,brZ,vrijeme,bodovi,tipovi){
  const errors = [];
    var dan = new Date().getDate();
    var mjesec = new Date().getMonth()+1;
    var godina = new Date().getFullYear();
    var danasnji = false;
    if(ime.length<3) errors.push("Naziv zadaće mora sadržavati više od dva slova");
    if(brZ<1) errors.push("Zadaća mora sadržavati barem jedan zadatak");
    if(brZ > 10) errors.push("Maksimalan broj mogućih zadataka je 10");
    if(datum == 0)errors.push("Unesite rok za predaju zadaće!")
    if(datum[2] < dan && datum[1] <= mjesec && godina == datum[0]) errors.push("Rok za predaju zadaće mora minimalno biti postavljen na današnji dan");
    else if(datum[1] < mjesec && godina == datum[0]) errors.push("Rok za predaju zadaće mora minimalno biti postavljen na današnji dan");
    else if(godina > datum[0]) errors.push("Rok za predaju zadaće mora minimalno biti postavljen na današnji dan");
    if(datum[0] == godina && datum[1] == mjesec && datum[2] == dan) danasnji = true;
    if(danasnji == true && (vrijeme[0] != 23 || vrijeme[1] != 59)) errors.push("Rok nije validan, vrijeme minimalno mora biti postavljeno na 23:59");
    if(bodovi.length == 0) errors.push("Moraju se unijeti bodovi po zadacima")
    if(tipovi.length == 0) errors.push("Morate odabrati tip fajla")
    return errors;
}
class PrikazZadace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }
  
  render() {
    
    var vals;
    var valvr;
    if(this.state.data.datum == undefined) vals=0;
    else vals = this.state.data.datum.split('-');
    valvr=this.state.data.vrijeme.split(':');
    console.log(this.state.data.brojZadataka);
    const errors = validiraj(this.state.data.naziv,vals,this.state.data.brojZadataka,valvr,this.state.data.listaBodova,this.state.data.listaTipova);
    
    
    var kolone = [];
    console.log(this.state.data.datum);
    // zadaciCelije prestavlja niz sačinjen od pojedinačnih elemenata u redu tabele koji se sastoji
    // od broja bodova za određeni zadatak te tipa podatka za slanje zadatka
    var zadaciCelije = [];
    var ukupnoBodova = 0; // Ukupan broj bodova na zadaći
    for (var i = 0; i < this.state.data.listaBodova.length; i++) {
      kolone.push("Zadatak " + (i + 1));
      zadaciCelije.push(
        this.state.data.listaBodova[i] + " " + this.state.data.listaTipova[i]
      );
      // Ukupan broj bodova na zadaći
      ukupnoBodova += parseInt(this.state.data.listaBodova[i]);
    }
if(errors.length == 0) {
    return (
      <div>
        <FormGroup>
          <Table className="table table-bordered text-center bg-active border-solid">
            <thead>
              <tr className="bg-primary text-light">
                <th>INFO</th>
                {kolone.map(zadatak => (
                  <th scope="col" key={zadatak}>
                    {zadatak}
                  </th>
                ))}
                <th>Datum i vrijeme</th>
                <th>Ukupan broj bodova</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{this.state.data.naziv}</th>
                {zadaciCelije.map(text => (
                  <th scope="col" key={text}>
                    {text}
                  </th>
                ))}
                <th>{this.state.data.datum + " " + this.state.data.vrijeme}</th>
                <th>{ukupnoBodova}</th>
              </tr>
            </tbody>
          </Table>
        </FormGroup>
        <Baza data={this.state.data}
        fun={this.props.onZadacaCreateDataSet}/>
      </div>
    );
  }
  else{
    //this.setState({ errors });
    return(
      <div>
        {errors.map(error => (
          <p id="greske" key={error}>Greška: {error}</p>
        ))}
         
      </div>

    )
  }
}

}

export default PrikazZadace;
