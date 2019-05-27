import React, { Component } from "react";
import axios from "axios";

class Statistika extends Component {
  state = {
    sortiraniPredmetiPoOcjeni: [
      "Predmet 1",
      "Predmet 2",
      "Predmet 3",
      "Predmet 4",
      "Predmet 5"
    ],
    ocjene: ["10", "10", "9", "8", "7"]
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ marginTop: "0.8em" }}>
          <div>
            <input
              type="button"
              className="btn btn-warning"
              value="Sortiraj predmete po ocjeni"
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "0.8em" }}>
          <div>
            <table className="table table-hover">
              {this.state.sortiraniPredmetiPoOcjeni.map((item, i) => (
                <tr className="table-info" key={i}>
                  <td>{item}</td>
                  <td>{this.state.ocjene[i]}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistika;
