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
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-4">
          <table className="table table-bordered text-center bg-active border-solid" style={{  float: "left", marginLeft: "20px" }}>
                <tbody>
                    <tr class="bg-primary text-light">
                        <th class="tabtip">Predmet</th>
                        <th class="tabtip">Ocjena</th>
                    </tr>
                    {this.state.sortiraniPredmetiPoOcjeni.map((item, i) => (
                        <tr className="tabtip1" key={i}>
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