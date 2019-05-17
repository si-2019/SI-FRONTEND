import React, { Component } from "react";
import axios from "axios";

class UgovorOUcenju extends Component {
  state = {};
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

                <select className="custom-select">
                  <option defaultValue="">Odaberite godinu studija</option>
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
                <select className="custom-select">
                  <option defaultValue="">Odaberite smjer</option>
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
                <select className="custom-select">
                  <option defaultValue="">Odaberite semestar</option>
                  <option value="1">1.</option>
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
                    checked=""
                  />
                  <label class="custom-control-label" for="customCheck1">
                    Check this custom checkbox
                  </label>
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
