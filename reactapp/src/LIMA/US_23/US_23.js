import React, { Component } from "react";
import "./US_23.css";
import Tabela from "./komponente/tabela";

class US_23 extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      redovi: []
    };
  }
  componentDidMount() {
    //uzmi podatke iz baze sa get
    fetch("http://localhost:8080/dajSveZahtjeve").then(
      result => {
        result.json().then(res => {
          this.setState({
            isLoaded: true,
            redovi: res.zahtjevi //json "zahtjevi":[] 
          });
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }
  onCheck = podatak => {
    //onCheck checkbox promijeni atribut "oznacen"
    const redovi = this.state.redovi.map(r => {
      if (r.id === podatak.id) {
        if (r.oznacen === false) {
          r.oznacen = true;
        } else {
          r.oznacen = false;
        }
      }
      return r;
    });
    this.setState({ redovi });
  };
  //uzima oznacene redove i salje post
  posalji = () => {
    //oznaceni redovi
    let pomocni = [];
    for (let i = 0; i < this.state.redovi.length; i++) {
      if (this.state.redovi[i].oznacen === true)
        pomocni.push(this.state.redovi[i]);
    }
    if (pomocni.length === 0) alert("Niste oznacili niti jedan red.");
    else {
      let oznaceni = { zahtjevi: [] };
      for (let i = 0; i < pomocni.length; i++) {
        let objekat = { idZahtjeva: pomocni[i].id };
        oznaceni.zahtjevi.push(objekat);
      }
      //post zahtjev
      fetch("http://localhost:8080/obrada", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(oznaceni)
      });
      alert("Zahtjevi koji ste odabrali su obradjeni.", oznaceni);
    }
  };
  render() {
    const { error, isLoaded, redovi } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <main className="container">
            <Tabela redovi={redovi} onCheck={this.onCheck} />
            <button onClick={this.posalji} type="button" className="btn btn-secondary ml-5">
            Odaberi
            </button>
          </main>
        </React.Fragment>
      );
    }
  }
}

export default US_23;
