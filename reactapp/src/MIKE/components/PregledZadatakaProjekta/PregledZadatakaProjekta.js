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
      selektani_projekat: selektani_projekat,
      selektovanElement : {},
      selektovanRed : false
    };
    
    this.renderTabela = this.renderTabela.bind(this);
    this.clickDetalji = this.clickDetalji.bind(this);
  }


  clickDetalji(idReda) {
    this.setState({
      projekti : this.state.projekti,
      selektani_projekat : this.state.selektani_projekat,
      selektovanElement: this.state.selektani_projekat.zadaci[idReda],
      selektovanRed: true
    });
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
                    <tr key={i} onClick={this.clickDetalji.bind(null, i-1)}>
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
    let detalji = <div id="detalji"></div>
    if(this.state.selektovanRed && this.state.selektovanElement){
      detalji = (<div id="detalji">
        <h1>Prikaz detalja projektnog zadatka:</h1>
          <Label> {this.state.selektovanElement.opis} </Label><br></br>
          <Label>Prioritet: {this.state.selektovanElement.prioritet}</Label><br></br>
          <Label>Trajanje projekta: {this.state.selektovanElement.od_kad} - {this.state.selektovanElement.do_kad}</Label><br></br>
          <Label>Završen projekat: {this.state.selektovanElement.zavrsen}</Label><br></br>
          <Label>Komentar projektnog zadatka: {this.state.selektovanElement.komentar}</Label><br></br>
      </div>);
    }

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
        {detalji}
      </Fragment>
    );
  }
}

export default PregledZadatakaProjekta;
