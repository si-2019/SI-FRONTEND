import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
//import "./css/tabela.css";
import ProsjekPoGodinama from "./components/prosjek_po_godinama";
class IzvjestajPoGodinama extends Component {
  state = {
    predmeti: [
      { predmet: "IM", godina: "2016 / 2017", ocjena: 9 },
      { predmet: "IM", godina: "2017 / 2018", ocjena: 8 },
      { predmet: "IM", godina: "2018 / 2019", ocjena: 9 },
      { predmet: "IM", godina: "2017 / 2018", ocjena: 8 },
      { predmet: "IM", godina: "2017 / 2018", ocjena: 8 },
      { predmet: "IM", godina: "2018 / 2019", ocjena: 8 }
    ],
    tekst: []
  };
  dajProsjek = predmeti => {
    let duzina = predmeti.length;
    console.log(duzina);
    let i = 0;
    let prosjek = [];
    while (i < duzina) {
      let ukupni = 0;
      let brojPredmeta = 0;

      let god = predmeti[i].godina;
      while (i < duzina && predmeti[i].godina === god) {
        brojPredmeta++;
        ukupni = ukupni + predmeti[i].ocjena;
        i++;
      }

      prosjek.push(ukupni / brojPredmeta);
    }
    return prosjek;
  };
  async componentDidMount() {
    let pred = this.state.predmeti;
    pred.sort((a, b) => a.godina.substr(1, 4) - b.godina.substr(1, 4));
    console.log(pred);

    //let pred = this.state.predmeti.sort((a, b) => a.godina > b.godina);
    this.setState({ predmeti: pred });
    let p = this.dajProsjek(pred);
    console.log(p);
    let t = [];
    if (p.length > 0)
      t.push(
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key="p1"
        >
          Prva godina : {p[0]}
        </li>
      );
    if (p.length > 1)
      t.push(
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key="p2"
        >
          Druga godina : {p[1]}
        </li>
      );
    if (p.length > 2)
      t.push(
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key="p3"
        >
          Treca godina : {p[2]}{" "}
        </li>
      );
    if (p.length > 3)
      t.push(
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key="p4"
        >
          Cetvrta godina : {p[3]}{" "}
        </li>
      );
    this.setState({ tekst: t });
  }
  render() {
    return (
      <div>
        <div>
          <h2>Izvještaj prosjeka ocjena po godinama</h2>
        </div>
        <div className="container">
          <ProsjekPoGodinama state={this.state} />
        </div>
        <br />
        <ul className="list-group">{this.state.tekst}</ul>
      </div>
    );
  }
}

export default IzvjestajPoGodinama;
