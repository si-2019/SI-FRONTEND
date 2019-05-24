import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

export default class I_US_27 extends Component{
    state = {
    error: null,
    isLoaded: false,
    show:true,
    rezultati:[],
    indeks:0,
    predmet:''
  };
  constructor(props) {
    super(props);
      this.updateIndeks = this.updateIndeks.bind(this);
      this.updatePredmet = this.updatePredmet.bind(this);
  }
  updateIndeks(event){
    //u string indeks dodaje kako se unosi u TB
    this.setState({indeks : event.target.value});
  }
  updatePredmet(event){
    //u string predmet dodaje kako se unosi u TB
    this.setState({predmet: event.target.value});
  }
  
posalji = (e)=>{
  e.preventDefault();
  fetch('http://localhost:31912/Izvjestaji/dajDrugeParcijale/'+this.state.indeks+'/'+this.state.predmet)
  .then(rez=>rez.json())
  //.then(data=>{this.setState({rezultati:[...this.state.rezultati,data]})
  .then(data=>{this.setState({rezultati:data})
  console.log(this.state.rezultati);
});
}

  render(){
  var redni_broj=1;
    return(
      <>
        <form onSubmit={this.posalji}>
        Unos indeksa: <br />
        <input type = "text"  id="indeks" onChange={this.updateIndeks}></input>
        <br />
        Unos naziva predmeta: <br />
        <br />
        <input type = "text"  id="predmet" onChange={this.updatePredmet}></input>
        <input type="submit" id="dajRezultate" value="Daj rezultate"></input>
        </form>


        <Table striped bordered hover>
        <thead>
        <tr>
          <th>Redni broj</th>
          <th>Indeks</th>
          <th>Ime</th>
          <th>Prezime</th>
          <th>Datum ispita</th>
          <th>Broj bodova</th>
        </tr>
        </thead>
        <tbody>
{this.state.rezultati.map(rez=>{return <tr><td>{redni_broj++}</td> <td>{rez.indeks}</td> <td>{rez.ime}</td> <td>{rez.prezime}</td> <td>{rez.datumIspita}</td> <td>{rez.brojBodova}</td></tr>})}
        </tbody>
        </Table>
        
      </>
    );
  }
}