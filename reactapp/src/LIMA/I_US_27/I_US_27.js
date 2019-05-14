import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
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
  
    return(
      <>
        <Form onSubmit={this.posalji}>
            <Form.Row>
            <Form.Group as={Col} controlId = "formIndex">
              <Form.Label>Unos indeksa.</Form.Label>
              <Form.Control/>
            </Form.Group>
            <Button variant = "primary" type ="submit"> Daj ispite </Button>
            </Form.Row>
        </Form>
        <div>{this.state.rezultati.map(rez=>{return <h1>{rez.message[0]} {rez.message[1]} {rez.message[2]}</h1>})}</div>
        
        Deja-vu. I've been to space before hehe.
      </>
    );
  }
}