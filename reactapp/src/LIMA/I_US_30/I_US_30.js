import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

export default class I_US_30 extends Component{
    state = {
    error: null,
    isLoaded: false,
    show:true,
    rezultati:[],
    indeks:0
  };
  constructor(props) {
    super(props);
      this.updateIndeks = this.updateIndeks.bind(this);
  }
  updateIndeks(event){
    //u string indeks dodaje kako se unosi u TB
    this.setState({indeks : event.target.value});
  }
  
posalji = (e)=>{
  e.preventDefault();
  fetch('http://localhost:31912/Izvjestaji/dajNepolozenePredmete/'+this.state.indeks)
  .then(rez=>rez.json())
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
        <input type="submit" id="dajRezultate" value="Daj rezultate"></input>
        </form>
        <Table striped bordered hover>
        <thead>
        <tr>
          <th>Redni broj</th>
          <th>Indeks</th>
          <th>Ime i prezime</th>
          <th>Naziv predmeta</th>
          <th>Datum ispita</th>
          <th>Tip ispita</th>
          <th>Broj bodova</th>
        </tr>
        </thead>
        <tbody>
{this.state.rezultati.map(rez=>{return <tr><td>{redni_broj++}</td> <td>{rez.indeks}</td> <td>{rez.naziv}</td> <td>{rez.predmet}</td> <td>{rez.datumIspita}</td> <td>{rez.tipIspita}</td> <td>{rez.brojBodova}</td></tr>})}
        </tbody>
        </Table>
        
      </>
    );
  }
}