import React, { Component } from "react";
import axios from "axios";
import "./bootstrap.min.css";

class UgovorOUcenju extends Component {
  state = {
    izabranaGodina: 1,
    izabraniSmjer: 1,
    izabraniSemestar: 1,
    listaIzbornih: [],
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  promjenaGodineStudija(event) {
    this.setState({ izabranaGodina: event.target.value }, function () {
      console.log(this.state.izabranaGodina);
      this.prikaziIzborne();
    });
  }

  promjenaSmjera(event) {
    this.setState({ izabraniSmjer: event.target.value }, function () {
      console.log(this.state.izabraniSmjer);
      this.prikaziIzborne();
    });
  }

  promjenaSemestra(event) {
    this.setState({ izabraniSemestar: event.target.value }, function () {
      console.log(this.state.izabraniSemestar);
      this.prikaziIzborne();
    });
  }

  prikaziIzborne() {
    try {
      axios
        .get(
          `http://localhost:31918/predmeti/` +
          this.state.izabraniSmjer +
          `/` +
          this.state.izabranaGodina +
          `/` +
          this.state.izabraniSemestar
        )
        .then(res => {
          const predmeti = res.data.dostupniPredmeti.map(obj => obj.naziv);
          const obavezan = res.data.dostupniPredmeti.map(obj => obj.obavezan);
          const izborni = [];
          for (var i = 0; i < obavezan.length; i++) {
            if (obavezan[i] == "0") {
              izborni.push(predmeti[i]);
            }
          }
          this.setState({ listaIzbornih: izborni });
          console.log(this.state.listaIzbornih);
        });
    } catch (e) { }
  }

  componentDidMount() {
    this.prikaziIzborne();
  }

  prikaziCheckBoxoveZaIzborne() { }

  render() {
    return (
      <div className="container-fluid" style={{marginTop:"30px"}} >
        <h2 style={{ marginBottom: "30px" }}>Ugovor o učenju</h2>

        <div className="card align-items-center">
          <div className="card-body" style={{ minWidth: "100%" }}>
            <div class="row justify-content-lg-around justify-content-md-center">
              <div class="col-lg-4 col-sm-12 col-md-6 justify-content-sm-center ">
                <h4 className="card-title">Kreiranje ugovora</h4>
                <h6 class="card-subtitle mb-2 text-muted">Ovdje možete kreirati ugovor o učenju za upis u naredni semestar.</h6>
                <div style={{ textAlign: "left" }}>
                  <label className="col-form-label col-form-label-lg">
                    Godina studija
                  </label>
                </div>

                <select
                  className="custom-select"
                  onChange={e => this.promjenaGodineStudija(e)}
                >
                  <option value="1">1.</option>
                  <option value="2">2.</option>
                  <option value="3">3.</option>
                  <option value="4">4.</option>
                  <option value="5">5.</option>
                  <option value="6">6.</option>
                  <option value="7">7.</option>
                  <option value="8">8.</option>
                </select>

                <div style={{ textAlign: "left" }}>
                  <label className="col-form-label col-form-label-lg">
                    Smjer
                  </label>
                </div>
                <select
                  className="custom-select"
                  onChange={e => this.promjenaSmjera(e)}
                >
                  <option value="1">RI</option>
                  <option value="2">AIE</option>
                  <option value="3">EE</option>
                  <option value="4">TK</option>
                </select>

                <div style={{ textAlign: "left" }}>
                  <label className="col-form-label col-form-label-lg">
                    Semestar
                  </label>
                </div>
                <select
                  className="custom-select"
                  onChange={e => this.promjenaSemestra(e)}
                >
                  <option value="1">1.</option>
                  <option value="2">2.</option>
                </select>

                <div class="form-group">
                  <div style={{ textAlign: "left" }}>
                    <label className="col-form-label col-form-label-lg">
                      Izborni predmeti
                    </label>
                  </div>

                  {this.state.listaIzbornih.length === 0 ? (
                    <p>Nema izbornih predmeta</p>
                  ) : (
                      ""
                    )}
                  {this.state.listaIzbornih.map((item, i) => (
                    <div class="custom-control custom-checkbox" key={i}>
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id={"customCheck" + i}
                      />
                      <label
                        class="custom-control-label"
                        htmlFor={"customCheck" + i}
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default UgovorOUcenju;
