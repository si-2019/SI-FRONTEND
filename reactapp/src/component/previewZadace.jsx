import React, { Component } from "react";
import { CustomInput, Form, FormGroup, Label, Input, Table } from "reactstrap";

class PreviewZadace extends Component {
  render() {
    var kolone = [];
    var zadaciCelije = [];
    var ukupnoBodova = 0;
    for (var i = 0; i < this.props.podaci.state.listaBodova.length; i++) {
      kolone.push("Zadatak " + (i + 1));
      zadaciCelije.push(
        this.props.podaci.state.listaBodova[i] +
          " " +
          this.props.podaci.state.listaTipova[i][0]
      );
      ukupnoBodova += parseInt(this.props.podaci.state.listaBodova[i]);
    }

    console.log(this.props.podaci);

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
                <th scope="row">{this.props.podaci.state.naziv}</th>
                {zadaciCelije.map(text => (
                  <th scope="col" key={text}>
                    {text}
                  </th>
                ))}
                <th>
                  {this.props.podaci.state.datum +
                    " " +
                    this.props.podaci.state.vrijeme}
                </th>
                <th>{ukupnoBodova}</th>
              </tr>
            </tbody>
          </Table>
        </FormGroup>
      </div>
    );
  }
}

export default PreviewZadace;
