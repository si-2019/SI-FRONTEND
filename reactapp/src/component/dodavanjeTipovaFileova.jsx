import React, { Component } from "react";
import { CustomInput, Form, FormGroup, Label, Input, Table } from "reactstrap";
import "../bootstrap.css";

class DodavanjeTipovaFileova extends Component {

  render() {
    var kk = this.props.podaci.state.naziv;
    var kolone = [];
    for (var i = 1; i <= this.props.podaci.state.brojZadataka; i++) {
      kolone.push("Zadatak " + i);
    }

    return (
      <div>
        <Form>
          <div className="card-header bg-primary text-light  mb-4">
            <h4>
              <b>Tipovi fileova za svaki zadatak</b>
            </h4>
          </div>
          <FormGroup tag="fieldset">
            <legend>Da li svi zadaci imaju iste tipove fileova:</legend>

            <CustomInput
              checked={this.props.podaci.state.sviTipoviIsti}
              type="switch"
              id="switchTip"
              name="customSwitch"
              label="DA"
              onChange={this.props.podaci.onChangeSviTipoviIsti}
            />
          </FormGroup>
          <FormGroup>
            <Table className="table table-bordered text-center bg-active border-solid">
              <thead>
                <tr className="bg-primary text-light">
                  <th>Naziv zadaće</th>
                  
                  {kolone.map(jedno => (
                    <th scope="col" key={jedno}>
                      {jedno}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{kk}</th>
                  {kolone.map((jedno, index) => (
                    <th scope="col">
                      <td>                   
                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id={jedno + "pdf"}
                            disabled = {this.props.podaci.state.sviTipoviIsti && index>0 }
                            checked = {this.props.podaci.state.listaTipova[index][0]}
                            onChange={e => {
                              this.props.podaci.state.trenutnaEkstenzija = "pdf";
                              this.props.podaci.onChangeListaTipova(index,0);
                            }}
                          />{" "}
                          <Label check className="ml-4">
                            .pdf
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id={jedno + "zip"}
                            disabled = {this.props.podaci.state.sviTipoviIsti && index>0 }
                            checked = {this.props.podaci.state.listaTipova[index][1]}
                            onChange={e => {
                                this.props.podaci.state.trenutnaEkstenzija = "zip";
                                this.props.podaci.onChangeListaTipova(index,1); 
                            }}
                          />{" "}
                          <Label check className="ml-4">
                            .zip
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id={jedno + "m"}
                            disabled = {this.props.podaci.state.sviTipoviIsti && index>0 }
                            checked = {this.props.podaci.state.listaTipova[index][2]}
                            onChange={e => {
                                this.props.podaci.state.trenutnaEkstenzija = "m";
                                this.props.podaci.onChangeListaTipova(index,2);
                            }}
                          />{" "}
                          <Label check className="ml-4">
                            .m
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id={jedno + "doc"}
                            disabled = {this.props.podaci.state.sviTipoviIsti && index>0 }
                            checked = {this.props.podaci.state.listaTipova[index][3]}
                            onChange={e => {
                                this.props.podaci.state.trenutnaEkstenzija = "doc";
                                this.props.podaci.onChangeListaTipova(index,3);
                            }}
                          />{" "}
                          <Label check className="ml-4">
                            .doc
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id={jedno + "txt"}
                            disabled = {this.props.podaci.state.sviTipoviIsti && index>0 }
                            checked = {this.props.podaci.state.listaTipova[index][4]}
                            onChange={e => {
                                this.props.podaci.state.trenutnaEkstenzija = "txt";
                                this.props.podaci.onChangeListaTipova(index,4);
                            }}
                          />{" "}
                          <Label check className="ml-4">
                            .txt
                          </Label>
                        </FormGroup>
                      </td>
                    </th>
                  ))}
                </tr>
              </tbody>
            </Table>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default DodavanjeTipovaFileova;
