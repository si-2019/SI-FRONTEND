import React, { Component } from "react";
import axios from "axios";

class SortiraniPredmetiPoZadacama extends Component {
  state = {
    sortiraniPredmetiPoZadaci: [
      "Predmet 1",
      "Predmet 2",
      "Predmet 3",
      "Predmet 4",
      "Predmet 5"
    ],
    zadace: ["10", "10", "9", "8", "7"],
    trenutnoLogovaniStudentID: 1
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:31918/zadace/` +
        this.state.trenutnoLogovaniStudentID+"/sort"
      )
      .then(res => {
        console.log(res);
        const sortiraniPredmeti = res.data.ispiti.map(obj => obj.naziv);
        const zadace = res.data.ispiti.map(obj => obj.brojBodova);
        this.setState({ sortiraniPredmetiPoZadaci: sortiraniPredmeti,zadace: zadace});
      });
  }

  render() {
    return (
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-4">
          <table className="table table-bordered text-center bg-active border-solid" style={{  float: "left", marginLeft: "50px" }}>
                    <tbody>
                        <tr class="bg-primary text-light">
                            <th class="tabtip">Predmet</th>
                            <th class="tabtip">Bodovi na zadace</th>
                        </tr>
                        {this.state.sortiraniPredmetiPoZadaci.map((item, i) => (
                          <tr className="tabtip1" key={i}>
                            <td>{item}</td>
                            <td>{this.state.zadace[i]}</td>
                          </tr>
                        ))}

          </tbody>
        </table>
      </div>      
    );
  }
}

export default SortiraniPredmetiPoZadacama;
