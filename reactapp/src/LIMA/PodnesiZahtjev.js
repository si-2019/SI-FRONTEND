import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import SvrhaPotvrde from "./components/svrhaPotvrde";
import BesplatnePotvrde from "./components/besplatnePotvrde";

class PodnesiZahtjev extends Component {
  state = {
    svrha: "Izaberi svrhu",
    spisak: [
      { id: 1, svrha: "svrha1" },
      { id: 2, svrha: "svrha2" },
      { id: 3, svrha: "svrha3" }
    ],
    broj: 5,
    idStudenta: 1
  };
  handleSelect = event => {
    this.setState({ svrha: event.target.innerText });
  };
  async componentDidMount() {
    var p = await axios
      .get("http://localhost:3002/svrhe")
      .then(function(response) {
        return response.data;
      });
    var svrhNiz = [];
    for (let i = 0; i < p.length; i++) {
      let jsonObject = { id: i, naziv: p[i].naziv };
      svrhNiz.push(jsonObject);
    }
    this.setState({ spisak: svrhNiz });
  }
  promijeniSvrhu = a => {
    this.setState({ svrha: a });
  };
  ucitajSvrhe = niz => {
    this.setState({ spisak: niz });
  };
  postaviBroj = br => {
    this.setState({ broj: br });
  };

  render() {
    return (
      <div className="container">
        <SvrhaPotvrde
          state={this.state}
          promijeniSvrhu={this.promijeniSvrhu}
          ucitajSvrhe={this.ucitajSvrhe}
        />

        <BesplatnePotvrde state={this.state} postaviBroj={this.postaviBroj} />
      </div>
    );
  }
}

export default PodnesiZahtjev;
