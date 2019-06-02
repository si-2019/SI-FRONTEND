import React, { Component } from "react";
import "./I_US_47.css";
import Form from "./komponente/forma";
import Izvjestaj from "./komponente/izvjestaj";

class I_US_47 extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      akademskaGodina: null,
      predmeti: []
    };
  }
  componentDidMount() {
    //uzmi podatke iz baze sa ajax zahtjevom get
    fetch("http://localhost:31912/dajAktuelnuAkademskuGodinu").then(
      result => {
        result.json().then(res => {
          this.setState({
            isLoaded: true,
            akademskaGodina: res //json odgovor
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
  uzmiIndexIgodinu = (ind, akad) => {
    if (ind === "") alert("Unesi svoj index!");
    else if (ind.length !== 5) alert("Indeks nije petocifren broj!");
    else {
      let adresa =
        "http://localhost:31912/izvjestaj/" +
        ind +
        "/" +
        akad +
        "/polozeniPredmeti";
      fetch(adresa).then(result => {
        result.json().then(res => {
          this.setState({
            predmeti: res.predmeti
          });
        });
      });
    }
  };
  render() {
    const { error, isLoaded, akademskaGodina } = this.state;
    if (error) {
      return (
        <React.Fragment>
          <main className="container">
            <div>Error: {error.message}</div>
            <Form
              uzmiIndexIgodinu={this.uzmiIndexIgodinu}
              akademskaGodina={akademskaGodina}
            />
            <Izvjestaj predmeti={this.state.predmeti} />
          </main>
        </React.Fragment>
      );
    } else if (!isLoaded) {
      return (
        <React.Fragment>
          <main className="container">
            <div>Loading...</div>
            <Form
              uzmiIndexIgodinu={this.uzmiIndexIgodinu}
              akademskaGodina={akademskaGodina}
            />
            <Izvjestaj predmeti={this.state.predmeti} />
          </main>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <main className="container">
            <Form
              uzmiIndexIgodinu={this.uzmiIndexIgodinu}
              akademskaGodina={akademskaGodina}
            />
            <Izvjestaj
              predmeti={this.state.predmeti}
              akademskaGodina={this.state.akademskaGodina}
            />
          </main>
        </React.Fragment>
      );
    }
  }
}

export default I_US_47;
