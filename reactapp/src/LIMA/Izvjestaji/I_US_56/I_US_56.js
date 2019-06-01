import React, { Component } from "react";
import "./I_US_56.css";
import Form from "./komponente/forma";
import Izvjestaj from "./komponente/izvjestaj";

class I_US_56 extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      akademskaGodina: null,
      predmeti: [],
      studenti: []
    };
  }
  componentDidMount() {
    //uzmi podatke iz baze sa ajax zahtjevom get
    fetch("http://localhost:31912/dajAktuelnuAkademskuGodinu").then(result1 => {
      fetch("http://localhost:31912/dajPredmete").then(
        result2 => {
          result1.json().then(res1 => {
            result2.json().then(res2 => {
              this.setState({
                isLoaded: true,
                akademskaGodina: res1,
                predmeti: res2.predmeti //json "predmeti":[]
              });
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
    });
  }
  uzmiPredmetGodinu = (pred, akad) => {
    let adresa =
      "http://localhost:31912/izvjestaj/" +
      pred +
      "/" +
      akad +
      "/prvaParcijalaPredmeta";
    fetch(adresa).then(result => {
      result.json().then(res => {
        this.setState({
          studenti: res.studenti
        });
      });
    });
  };
  render() {
    const { error, isLoaded, akademskaGodina, predmeti } = this.state;
    if (error) {
      return (
        <React.Fragment>
          <main className="container">
            <div>Error: {error.message}</div>
            <Form
              uzmiPredmetGodinu={this.uzmiPredmetGodinu}
              akademskaGodina={akademskaGodina}
              predmeti={predmeti}
            />
            <Izvjestaj
              studenti={this.state.studenti}
              akademskaGodina={akademskaGodina}
            />
          </main>
        </React.Fragment>
      );
    } else if (!isLoaded) {
      return (
        <React.Fragment>
          <main className="container">
            <div>Loading...</div>
            <Form
              uzmiPredmetGodinu={this.uzmiPredmetGodinu}
              akademskaGodina={akademskaGodina}
              predmeti={predmeti}
            />
            <Izvjestaj
              studenti={this.state.studenti}
              akademskaGodina={akademskaGodina}
            />
          </main>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <main className="container">
            <Form
              uzmiPredmetGodinu={this.uzmiPredmetGodinu}
              akademskaGodina={akademskaGodina}
              predmeti={predmeti}
            />
            <Izvjestaj
              studenti={this.state.studenti}
              akademskaGodina={akademskaGodina}
            />
          </main>
        </React.Fragment>
      );
    }
  }
}

export default I_US_56;
