import React, { Component } from "react";

class OcjenjivanjePocetna extends Component {
  render() {
    return (
      <div>
        {/*iz nekog razloga mi odleti footer gore O.o msm da je zbog grid systema nesta*/}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="container">
          <br />
          <div className="card-header bg-primary text-light">
            <h4>
              <b>Ocjenjivanje zadaća </b>
            </h4>
          </div>
          <div class="row">
            <div class="col">
              <br />
              <h4 className="ml-3">Lista zadaća za ocjenjivanje: </h4>
              <select
                multiple=""
                className="custom-form-control ml-4 btn btn-primary"
              >
                {this.props.podaci.state.listaZadaca.map(clan => (
                  <option key={clan}>{clan}</option>
                ))}
              </select>
              <hr />
              <br />
              <h4 className="ml-3">
                Studenti koji <b className="text-danger">nisu poslali</b>{" "}
                zadaću:{" "}
              </h4>
              <select
                onChange={this.props.podaci.handleBackNaJednaZadaca}
                multiple=""
                className="custom-form-control ml-4 btn btn-danger"
              >
                {this.props.podaci.state.studentiNisuPoslali.map(clan => (
                  <option key={clan}>{clan}</option>
                ))}
              </select>
              <br />
              <br />
              <h4 className="ml-3">
                Studenti koji su poslali, ali{" "}
                <b className="text-warning">nije pregledano:</b>{" "}
              </h4>
              <select
                onChange={this.props.podaci.handleBackNaJednaZadaca}
                multiple=""
                className="custom-form-control ml-4 btn btn-warning"
              >
                {this.props.podaci.state.studentiNijePregledano.map(clan => (
                  <option key={clan}>{clan}</option>
                ))}
              </select>
              <br />
              <br />
              <h4 className="ml-3">
                Studenti čije zadaće su{" "}
                <b className="text-success">pregledane:</b>{" "}
              </h4>
              <select
                onChange={this.props.podaci.handleBackNaJednaZadaca}
                multiple=""
                className="custom-form-control ml-4 btn btn-success"
              >
                {this.props.podaci.state.studentiPregledano.map(clan => (
                  <option key={clan}>{clan}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OcjenjivanjePocetna;
