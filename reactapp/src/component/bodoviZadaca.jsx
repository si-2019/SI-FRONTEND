import React, { Component } from "react";
import { Button } from "reactstrap";
import "../bootstrap.css";

class BodoviZadaca extends Component {
  render() {
    var kolone = [];
    for (var i = 1; i <= this.props.podaci.state.brojZadataka; i++) {
      kolone.push(i);
    }
    return (
      <div>
        <div className="card-header bg-primary text-light">
          <h4>
            <b>Bodovi zadaće</b>
          </h4>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            Želim da svi zadaci imaju jednak maksimalan broj bodova.
          </h4>
          <div className="form-group">
            <div className="custom-control-static custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
                name="sviBodoviIsti"
                onChange={this.props.onChange}
              />
              <label className="custom-control-label" htmlFor="customSwitch1">
                DA
              </label>
              <br />
              <br />
            </div>
            <h5 className="card-title">Broj bodova:</h5>
            <input id="brbod" type="text" className="form-control-static" />
            <Button
              id="sviBodoviIstiButton"
              color="primary"
              className="btn bg-primary ml-3 "
              disabled={!this.props.podaci.state.sviBodoviIsti}
              onClick={this.props.podaci.klik_isti_br_bod}
            >
              OK
            </Button>
            <hr />
          </div>
        </div>
        <div id="tabela">
          <table className="table table-bordered text-center bg-active border-solid">
            <thead>
              <tr className="bg-primary text-light">
                {kolone.map(jedno => (
                  <th scope="col" key={jedno + 200}>
                    {jedno}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary text-light">
                {kolone.map((jedno, index) => (
                  <th scope="col" key={jedno}>
                    <input
                      type="text"
                      className="form-control bg-primary text-light text-bold"
                      id={jedno}
                      data-index={index}
                      name="bodovi"
                      onChange={this.props.onChange}
                    />
                  </th>
                ))}
              </tr>
            </tbody>
          </table>
          <br />
          <label className="ml-3">Ukupno:</label>
          <span className="badge badge-primary ml-3">
            <h5 id="ukupnoStanje">{this.props.podaci.state.ukupnoBodova}</h5>
          </span>
          <hr />
        </div>
      </div>
    );
  }
}

export default BodoviZadaca;
