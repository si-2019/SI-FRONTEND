import React, { Component } from "react";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Chart from "./components/ProsjekChart";
class IzvjestajPoGodinama extends Component {
  state = {
    id_studenta: 2,
    predmeti: [
      { godina: "2016 / 2017", ocjena: 9 },
      { godina: "2017 / 2018", ocjena: 8 },
      { godina: "2018 / 2019", ocjena: 9 },
      { godina: "2017 / 2018", ocjena: 8 },
      { godina: "2017 / 2018", ocjena: 8 },
      { godina: "2018 / 2019", ocjena: 8 }
    ],
    prosjek: [
      { godina: "2016/2017", prosjek: 6.5 },
      { godina: "2017/2018", prosjek: 8 },
      { godina: "2018/2019", prosjek: 7.5 }
    ]
  };
  dajProsjek = predmeti => {
    let duzina = predmeti.length;

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

      prosjek.push({ godina: god, prosjek: ukupni / brojPredmeta });
    }
    return prosjek;
  };
  async componentDidMount() {
    var ocjene = await axios
      .get("http://localhost:31918/predmeti/" + this.state.id_studenta)
      .then(function(response) {
        return response.data.data;
      });

    var godine = await axios
      .get("http://localhost:31918/akademskegodine/")
      .then(function(response) {
        return response.data.data;
      });

    let pred = [];
    ocjene.map(ocjena => {
      if (ocjena.ocjena != null) {
        let o = [];
        o.predmet = ocjena.idPredmet;
        o.godina = godine.find(g => g.id === ocjena.idAkademskaGodina).naziv;
        o.ocjena = ocjena.ocjena;
        pred.push(o);
      }
    });

    pred.sort((a, b) => {
      console.log(a.godina.substr(0, 4));
      return a.godina.substr(0, 4) - b.godina.substr(0, 4);
    });
    console.log(pred);
    //let pred = this.state.predmeti.sort((a, b) => a.godina > b.godina);
    this.setState({ predmeti: pred });
    let p = this.dajProsjek(pred);
    this.setState({ prosjek: p });
    let t = [];
    if (p.length > 0)
      t.push(
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key="p1"
        >
          Prva godina : {p[0].prosjek}
        </li>
      );
    if (p.length > 1)
      t.push(
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key="p2"
        >
          Druga godina : {p[1].prosjek}
        </li>
      );
    if (p.length > 2)
      t.push(
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key="p3"
        >
          Treca godina : {p[2].prosjek}{" "}
        </li>
      );
    if (p.length > 3)
      t.push(
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key="p4"
        >
          Cetvrta godina : {p[3].prosjek}{" "}
        </li>
      );
    this.setState({ tekst: t });
  }
  render() {
    return (
      <div className="container">
        <div>
          <h2>Izvještaj prosjeka ocjena po godinama</h2>
        </div>
        <br />
        <ul className="list-group">{this.state.tekst}</ul>
        <div>
          <Chart data={this.state.prosjek} />
        </div>
      </div>
    );
  }
}

export default IzvjestajPoGodinama;
