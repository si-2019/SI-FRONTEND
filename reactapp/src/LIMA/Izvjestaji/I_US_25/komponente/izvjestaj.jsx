import React, { Component } from "react";
import ProgressBar from "./progressBar";
class Izvjestaj extends Component {
  state = {};
  styles = {
    color: "green"
  };
  styless = {
    background: "#b0e0e6"
  };
  imaBodova = () => {
    if (this.props.bodovi.length !== 0) {
      if (this.props.bodovi[0].postojiStudent === false) {
        alert("Student sa unesenim indexom ne postoji!");
        return (
          <React.Fragment>
            <div className="form-group w-50 mt-3">
              <label>Ostvareni bodovi za izabrani predmet:</label>
              <ProgressBar bodovi={this.props.bodovi} />
              <div style={this.styless}>
                <p>Prisustvo:</p>
                <p>Prvi parcijalni ispit:</p>
                <p>Drugi parcijalni ispit:</p>
                <p>Zavrsni ispit:</p>
                <p>Zadaca:</p>
                <p>Projekat:</p>
                <p>Ocjena:</p>
              </div>
            </div>
          </React.Fragment>
        );
      } else if (this.props.bodovi[0].slusaPredmet === false) {
        alert("Ne slušaš odabrani predmet!");
        return (
          <React.Fragment>
            <div className="form-group w-50 mt-3">
              <label>Ostvareni bodovi za izabrani predmet:</label>
              <ProgressBar bodovi={this.props.bodovi} />
              <div style={this.styless}>
                <p>Prisustvo:</p>
                <p>Prvi parcijalni ispit:</p>
                <p>Drugi parcijalni ispit:</p>
                <p>Zavrsni ispit:</p>
                <p>Zadaca:</p>
                <p>Projekat:</p>
                <p>Ocjena:</p>
              </div>
            </div>
          </React.Fragment>
        );
      }
      return (
        <React.Fragment>
          <div className="form-group w-50 mt-3">
            <label>Ostvareni bodovi za izabrani predmet:</label>
            <ProgressBar bodovi={this.props.bodovi} />
            <div style={this.styless}>
              <p>
                Prisustvo:{" "}
                <span style={this.styles}>
                  {this.props.bodovi[0].prisustvo} od{" "}
                  {this.props.bodovi[0].moguciBodPrisus}
                </span>
              </p>
              <p>
                Prvi parcijalni ispit:{" "}
                <span style={this.styles}>
                  {this.props.bodovi[0].prviParcijalni} od{" "}
                  {this.props.bodovi[0].moguciBodPrve}
                </span>
              </p>
              <p>
                Drugi parcijalni ispit:{" "}
                <span style={this.styles}>
                  {this.props.bodovi[0].drugiParcijalni} od{" "}
                  {this.props.bodovi[0].moguciBodDruge}
                </span>
              </p>
              <p>
                Zavrsni ispit:{" "}
                <span style={this.styles}>
                  {this.props.bodovi[0].zavrsni} od{" "}
                  {this.props.bodovi[0].moguciBodZavrsnog}
                </span>
              </p>
              <p>
                Zadaca:{" "}
                <span style={this.styles}>
                  {this.props.bodovi[0].zadaca} od{" "}
                  {this.props.bodovi[0].moguciBodZad}
                </span>
              </p>
              <p>
                Projekat:{" "}
                <span style={this.styles}>
                  {this.props.bodovi[0].projekat} od{" "}
                  {this.props.bodovi[0].moguciBodPro}
                </span>
              </p>
              <p>
                Ocjena:{" "}
                <span style={this.styles}>{this.props.bodovi[0].ocjena}</span>
              </p>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="form-group w-50 mt-3">
            <label>Ostvareni bodovi za izabrani predmet:</label>
            <ProgressBar bodovi={this.props.bodovi} />
            <div style={this.styless}>
              <p>Prisustvo:</p>
              <p>Prvi parcijalni ispit:</p>
              <p>Drugi parcijalni ispit:</p>
              <p>Zavrsni ispit:</p>
              <p>Zadaca:</p>
              <p>Projekat:</p>
              <p>Ocjena:</p>
            </div>
          </div>
        </React.Fragment>
      );
    }
  };
  render() {
    return this.imaBodova();
  }
}

export default Izvjestaj;
