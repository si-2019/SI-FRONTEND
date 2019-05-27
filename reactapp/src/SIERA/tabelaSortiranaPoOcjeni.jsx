import React, { Component } from "react";
import axios from "axios";

class TabelaSortiranaPoOcjeni extends Component {
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
      <div>
        <table className="table table-hover">
          <tbody>
            {this.state.sortiraniPredmetiPoOcjeni.map((item, i) => (
              <tr className="table-info" key={i}>
                <td>{item}</td>
                <td>{this.state.ocjene[i]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TabelaSortiranaPoOcjeni;
