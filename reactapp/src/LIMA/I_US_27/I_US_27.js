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
    rezultati:[]
  };
  constructor(props) {
    super(props);
    
  }
posalji = (e)=>{
  e.preventDefault();
  console.log("UŠAO");
  let podaci = [];
  fetch('http://localhost:31912/Izvjestaji/dajDrugeParcijale').then(rez=>rez.json()).then(data=>{this.setState({rezultati:[...this.state.rezultati,data]})
  podaci = data;
  console.log(this.state.rezultati);
});
}
  render(){
  var redni_broj=1;
    return(
      <>
        <Form onSubmit={this.posalji} variant="dark">
            <Form.Row>
            <Form.Group as={Col} controlId = "formIndex">
              <Form.Label>Unos indeksa.</Form.Label>
              <Form.Control/>
            </Form.Group>
            <Button variant = "primary" type ="submit"> Daj ispite </Button>
            </Form.Row>
        </Form>
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
{this.state.rezultati.map(rez=>{return <tr><td>{redni_broj++}</td> <td>{rez.message[0]}</td> <td>{rez.message[1]}</td> <td>{rez.message[2]}</td> <td>{rez.message[3]}</td> <td>{rez.message[4]}</td></tr>})}
        </tbody>
        </Table>
        
      </>
    );
  }
}