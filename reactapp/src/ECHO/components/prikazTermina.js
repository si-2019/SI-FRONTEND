import React, { Component } from "react";
import "./izgled.css";

class PrikazTermina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termini: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:31905/si2019/echo/getZeljeniTerminByKorisnikId")
      .then(res => res.json())
      .then(json => {
        this.setState({
          termini: json
        });
      });
  }

  render() {
    return (
      <div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Ponedjeljak</h4>
            <h6 class="card-subtitle mb-2 text-muted">Odabrani termini</h6>
            {this.state.termini.map(item =>
              item.danUSedmici == "Pon" ? (
                <p>
                  {item.vrijeme} -{" "}
                  {parseInt(item.vrijeme.substring(0), 10) + item.brCasova}
                  :00
                </p>
              ) : (
                <p />
              )
            )}
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Utorak</h4>
            <h6 class="card-subtitle mb-2 text-muted">Odabrani termini</h6>
            {this.state.termini.map(item =>
              item.danUSedmici == "Uto" ? (
                <p>
                  {item.vrijeme} -{" "}
                  {parseInt(item.vrijeme.substring(0), 10) + item.brCasova}
                  :00
                </p>
              ) : (
                <p />
              )
            )}
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Srijeda</h4>
            <h6 class="card-subtitle mb-2 text-muted">Odabrani termini</h6>
            {this.state.termini.map(item =>
              item.danUSedmici == "Sri" ? (
                <p>
                  {item.vrijeme} -{" "}
                  {parseInt(item.vrijeme.substring(0), 10) + item.brCasova}
                  :00
                </p>
              ) : (
                <p />
              )
            )}
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Cetvrtak</h4>
            <h6 class="card-subtitle mb-2 text-muted">Odabrani termini</h6>
            {this.state.termini.map(item =>
              item.danUSedmici == "Cet" ? (
                <p>
                  {item.vrijeme} -{" "}
                  {parseInt(item.vrijeme.substring(0), 10) + item.brCasova}
                  :00
                </p>
              ) : (
                <p />
              )
            )}
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Petak</h4>
            <h6 class="card-subtitle mb-2 text-muted">Odabrani termini</h6>
            {this.state.termini.map(item =>
              item.danUSedmici == "Pet" ? (
                <p>
                  {item.vrijeme} -{" "}
                  {parseInt(item.vrijeme.substring(0), 10) + item.brCasova}
                  :00
                </p>
              ) : (
                <p />
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default PrikazTermina;
