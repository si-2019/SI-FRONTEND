import React, { Component } from "react";
import "./US_18.css";
import Tabela from "./komponente/tabela";
import Form from "./komponente/forma";

class US_18 extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      redovi: [],
      izmjenjena: false
    };
  }
  uzmiIndex = ind => {
    if (ind.length !== 5) alert("Indeks nije petocifren broj!");
    else {
      let adresa = "http://localhost:31912/potvrda/" + ind + "/student";
      fetch(adresa).then(result => {
        result.json().then(res => {
          this.setState({
            redovi: res.zahtjevi, //json "zahtjevi":[]
            izmjenjena: false
          });
        });
      });
    }
  };
  izmjene = () => {
    if (this.state.redovi.length === 0) alert("Nije podnijet nijedan zahtjev.");
    //else {
    const izmjene = this.state.redovi.map(element => {
      if (element.stanje === false) {
        element.stanje = "neobradjena";
        element.datumIzdavanja = "/";
      } else {
        element.stanje = "obradjena";
      }
      if (element.besplatna === false) element.besplatna = "ne";
      else element.besplatna = "da";
      return element;
    });
    this.setState({ redovi: izmjene, izmjenjena: true });
    //}
  };
  componentDidUpdate() {
    if (this.state.izmjenjena === false) this.izmjene();
  }
  render() {
    const redovi = this.state.redovi;
    return (
      <React.Fragment>
        <main className="container">
          <Form uzmiIndex={this.uzmiIndex} />
          <Tabela redovi={redovi} />
        </main>
      </React.Fragment>
    );
  }
}

export default US_18;
