import React, { Component } from "react";
import axios from "axios";

class UgovorOUcenju extends Component {
  state = {
    trenutnoLogovaniStudentID: 1,
    izabranaGodina: 1,
    izabraniSmjer: 1,
    izabraniSemestar: 1
  };

  promjenaGodineStudija(event) {
    this.setState({ izabranaGodina: event.target.value });
  }

  promjenaSmjera(event) {
    this.setState({ izabraniSmjer: event.target.value });
  }

  promjenaSemestra(event) {
    this.setState({ izabraniSemestar: event.target.value });
  }

  prikaziCheckboxoveIzborniPredmeti() {}
  render() {
    return (
      <div>
        <div className="row" style={{ margin: "0px" }}>
          <div className="col" />
          <div className="col" style={{ textAlign: "center" }}>
            <div className="card" style={{ display: "inline-block" }}>
              <div className="card-body">
                <h3 className="card-title">Ugovor o učenju</h3>
                <div style={{ textAlign: "left" }}>
                  <label className="col-form-label col-form-label-lg">
                    Godina studija
                  </label>
                </div>

                <select
                  className="custom-select"
                  onChange={e => this.promjenaGodineStudija(e)}
                >
                  <option defaultValue="1">1.</option>
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
                  <option defaultValue="1">RI</option>
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
                  <option defaultValue="1">1.</option>
                  <option value="2">2.</option>
                </select>

                <div style={{ textAlign: "left" }}>
                  <label className="col-form-label col-form-label-lg">
                    Izborni predmeti
                  </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck1"
                  />
                  <label class="custom-control-label">Izborni predmeti</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col" />
        </div>
      </div>
    );
  }
}

export default UgovorOUcenju;
