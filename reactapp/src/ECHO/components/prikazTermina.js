import React, { Component } from "react";
import "./prikazTermina.css";

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
      <div class="card" id="glavnaKartica">
        <div class="card-body">
          <div class="row">
            <div class="card" className="mojaKartica">
              <div class="card-body">
                <div className="dan">
                  <h4 class="card-title">Ponedjeljak</h4>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Odabrani termini
                  </h6>
                </div>
                {this.state.termini.map(item =>
                  item.danUSedmici == "Pon" ? (
                    <p>
                      {item.vrijeme} -{" "}
                      {parseInt(item.vrijeme.substring(0), 10) + item.brCasova}
                      :00
                    </p>
                  ) : (
                    void 0
                  )
                )}
              </div>
            </div>

            <div class="card" className="mojaKartica">
              <div class="card-body">
                <div className="dan">
                  <h4 class="card-title">Utorak</h4>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Odabrani termini
                  </h6>
                </div>
                {this.state.termini.map(item =>
                  item.danUSedmici == "Uto" ? (
                    <p>
                      {item.vrijeme} -{" "}
                      {parseInt(item.vrijeme.substring(0), 10) + item.brCasova}
                      :00
                    </p>
                  ) : (
                    void 0
                  )
                )}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="card" className="mojaKartica">
              <div class="card-body">
                <div className="dan">
                  <h4 class="card-title">Srijeda</h4>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Odabrani termini
                  </h6>
                </div>
                {this.state.termini.map(item =>
                  item.danUSedmici == "Sri" ? (
                    <p>
                      {item.vrijeme} -{" "}
                      {parseInt(item.vrijeme.substring(0), 10) + item.brCasova}
                      :00
                    </p>
                  ) : (
                    void 0
                  )
                )}
              </div>
            </div>

            <div class="card" className="mojaKartica">
              <div class="card-body">
                <div className="dan">
                  <h4 class="card-title">Četvrtak</h4>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Odabrani termini
                  </h6>
                </div>
                {this.state.termini.map(item =>
                  item.danUSedmici == "Cet" ? (
                    <p>
                      {item.vrijeme} -{" "}
                      {parseInt(item.vrijeme.substring(0), 10) + item.brCasova}
                      :00
                    </p>
                  ) : (
                    void 0
                  )
                )}
              </div>
            </div>
          </div>

          <div class="card" className="mojaKarticaP">
            <div class="card-body">
              <div className="dan">
                <h4 class="card-title">Petak</h4>
                <h6 class="card-subtitle mb-2 text-muted">Odabrani termini</h6>
              </div>
              {this.state.termini.map(item =>
                item.danUSedmici == "Pet" ? (
                  <p>
                    {item.vrijeme} -{" "}
                    {parseInt(item.vrijeme.substring(0), 10) + item.brCasova}
                    :00
                  </p>
                ) : (
                  void 0
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PrikazTermina;
