import React, { Component, Fragment } from 'react';
import { Form, FormGroup, Label, Input, Table } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

class PregledZadatakaProjekta extends Component { 

  constructor(props) {
    super(props);

    let projekti = this.props.projekti;
    let selektani_projekat = null;
    if(projekti.length > 0) selektani_projekat = projekti[0];

    this.state = { 
      projekti: this.props.projekti, 
      selektani_projekat: selektani_projekat
    };
    
    this.renderTabela = this.renderTabela.bind(this);
  }

  renderTabela() {
    let i = 1;
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Opis</th>
            <th>Prioritet</th>
            <th>Od kada</th>
            <th>Do kada</th>
            <th>Zavrsen</th>
            <th>Komentar</th>
          </tr>
        </thead>
        <tbody>
          { 
          this.state.selektani_projekat != null ?
            this.state.selektani_projekat.zadaci.map((zadatak) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{i++}</th>
                      <td>{zadatak.opis}</td>
                      <td>{zadatak.prioritet}</td>
                      <td>{zadatak.od_kad}</td>
                      <td>{zadatak.do_kad}</td>
                      <td>{zadatak.zavrsen}</td>
                      <td>{zadatak.komentar}</td>
                    </tr>)
                }) : null
          }
        </tbody>
      </Table>
    );
  }

  selektan(val) {
    for(let i=0; i<this.state.projekti.length; i++)
    {
      if(this.state.projekti[i].id === val)
      {
        this.setState({selektani_projekat: this.state.projekti[i]});
        return;
      }
    }    
  }

  render() {
    return (
      <Fragment>

        <Form>
        <FormGroup>
          <Label >Vaši projekti: </Label>
          <Input type="select" name="select" onChange={(e)=>{this.selektan(e.target.value)}}>
            {this.state.projekti.map((projekat) => {
                return (<option key={projekat.id} value={projekat.id}>{`${projekat.naziv_predmeta} (${projekat.opis_projekta.substring(0, 100)}...)`}</option>);
              })}
          </Input>
        </FormGroup>
        </Form>

        <Label >Zadaci za odabrani projekat:</Label>
        {this.renderTabela()}

      </Fragment>
    );
  }
}

export default PregledZadatakaProjekta;
