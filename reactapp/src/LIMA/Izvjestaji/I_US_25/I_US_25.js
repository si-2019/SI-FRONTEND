import React, { Component } from "react";
import "./I_US_25.css";
import Form from "./komponente/forma";
import Izvjestaj from "./komponente/izvjestaj";

class I_US_25 extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      predmeti: [],
      bodovi: []
    };
  }
  componentDidMount() {
    //uzmi podatke iz baze sa ajax zahtjevom get
    fetch("http://localhost:31912/dajPredmete").then(
      result => {
        result.json().then(res => {
          this.setState({
            isLoaded: true,
            predmeti: res.predmeti //json "predmeti":[]
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
  uzmiIndexIpredmet = (ind, pred) => {
    if (ind === "") alert("Unesi svoj index!");
    else if (ind.length !== 5) alert("Indeks nije petocifren broj!");
    else {
      let adresa =
        "http://localhost:31912/izvjestaj/" + ind + "/" + pred + "/bodovi";
      fetch(adresa).then(result => {
        result.json().then(res => {
          this.setState({
            bodovi: res.bodovi //json "bodovi":[]
            //izmjenjena: false
          });
        });
      });
    }
  };
  render() {
    const { error, isLoaded, predmeti } = this.state;
    if (error) {
      return (
        <React.Fragment>
          <main className="container">
            <div>Error: {error.message}</div>
            <Form
              uzmiIndexIpredmet={this.uzmiIndexIpredmet}
              predmeti={predmeti}
            />
            <Izvjestaj bodovi={this.state.bodovi} />
          </main>
        </React.Fragment>
      );
    } else if (!isLoaded) {
      return (
        <React.Fragment>
          <main className="container">
            <div>Loading...</div>
            <Form
              uzmiIndexIpredmet={this.uzmiIndexIpredmet}
              predmeti={predmeti}
            />
            <Izvjestaj bodovi={this.state.bodovi} />
          </main>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <main className="container">
            <Form
              uzmiIndexIpredmet={this.uzmiIndexIpredmet}
              predmeti={predmeti}
            />
            <Izvjestaj bodovi={this.state.bodovi} />
          </main>
        </React.Fragment>
      );
    }
  }
}

export default I_US_25;
