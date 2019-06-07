import React, { Component } from "react";
import ProgressBar from "./progressBar";
class Izvjestaj extends Component {
  state = {};
  imaPredmeta = () => {
    if (this.props.studenti.length !== 0) {
      if (this.props.studenti[0].predmetNaGodini === false) {
        alert("Predmet nije na tekucoj godini!");
        return (
          <React.Fragment>
            <div className="form-group w-50 mt-3">
              <label>
                Broj studenata koji su položili predmet na akademskoj{" "}
                {this.props.akademskaGodina.naziv} godini:
              </label>
              <ProgressBar studenti={this.props.studenti} />
            </div>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <div className="form-group w-50 mt-3">
              <label>
                Broj studenata koji su položili predmet na akademskoj{" "}
                {this.props.akademskaGodina.naziv} godini:
              </label>
              <ProgressBar studenti={this.props.studenti} />
            </div>
          </React.Fragment>
        );
      }
    } else {
      return (
        <React.Fragment>
          <div className="form-group w-50 mt-3">
            <label>Broj studenata koji su položili predmet:</label>
            <ProgressBar studenti={this.props.studenti} />
          </div>
        </React.Fragment>
      );
    }
  };
  render() {
    return this.imaPredmeta();
  }
}

export default Izvjestaj;
