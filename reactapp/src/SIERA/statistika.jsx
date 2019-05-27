import React, { Component } from "react";
import axios from "axios";
import TabelaSortiranaPoOcjeni from "./tabelaSortiranaPoOcjeni";

class Statistika extends Component {
  state = {
    prikaziSortiranePoOcjeni: false
  };

  promijeniPrikazPoOcjeni() {
    this.setState({ prikaziSortiranePoOcjeni: true });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ marginTop: "0.8em" }}>
          <div>
            <input
              type="button"
              className="btn btn-warning"
              value="Sortiraj predmete po ocjeni"
              onClick={() => this.promijeniPrikazPoOcjeni()}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "0.8em" }}>
          {this.state.prikaziSortiranePoOcjeni ? (
            <TabelaSortiranaPoOcjeni />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Statistika;
