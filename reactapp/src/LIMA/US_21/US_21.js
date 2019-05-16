import React, { Component } from "react";
import "./US_21.css";
import Tabela from "./komponente/tabela";

class US_21 extends Component {
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
    //uzmi podatke iz baze sa ajax zahtjevom get
    fetch("http://localhost:31912/dajSveZahtjeve").then(
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
    //kada klikne na checkbox promijeni atribut oznacen suprotno od oonog sto je bio
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
          </main>
        </React.Fragment>
      );
    }
  }
}

export default US_21;
