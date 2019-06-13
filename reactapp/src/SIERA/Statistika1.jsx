import React, { Component } from "react";
import axios from "axios";
import SortiraniPredmetiPoZadacama from "./SortiraniPredmetiPoZadacama";

class Statistika1 extends Component {
  state = {
    prikaziSortiranePoZadaci: false
  };

  promijeniPrikazPoZadaci() {
    this.setState({ prikaziSortiranePoZadaci: true });
  }
  render() {
    return (
      <div className="container-fluid vertical-center" style={{  float: "left", marginLeft: "50px" }}>
        <div className="row" style={{ marginTop: "0.8em" }}>
          <div>
            <input
              type="button"
              className="btn btn-primary"
              value="Sortiraj predmete po ostvarenim bodovima na zadace"
              onClick={() => this.promijeniPrikazPoZadaci()}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "0.8em" }}>
          {this.state.prikaziSortiranePoZadaci ? (
            <SortiraniPredmetiPoZadacama />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Statistika1;
