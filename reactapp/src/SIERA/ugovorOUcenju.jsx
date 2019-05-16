import React, { Component } from "react";
import axios from "axios";

class UgovorOUcenju extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="row" style={{ margin: "0px" }}>
          <div class="col" />
          <div class="col" style={{ textAlign: "center" }}>
            <div class="card" style={{ display: "inline-block" }}>
              <div class="card-body">
                <h3 class="card-title">Ugovor o učenju</h3>
                <div style={{ textAlign: "left" }}>
                  <label class="col-form-label col-form-label-lg">
                    Godina studija
                  </label>
                </div>

                <select class="custom-select">
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
                  <label class="col-form-label col-form-label-lg">
                    Godina studija
                  </label>
                </div>
                <select class="custom-select">
                  <option defaultValue="">Odaberite smjer</option>
                  <option value="1">RI</option>
                  <option value="2">AIE</option>
                  <option value="3">EE</option>
                  <option value="4">TK</option>
                </select>

                <div style={{ textAlign: "left" }}>
                  <label class="col-form-label col-form-label-lg">
                    Godina studija
                  </label>
                </div>
                <select class="custom-select">
                  <option defaultValue="">Odaberite semestar</option>
                  <option value="1">1.</option>
                  <option value="2">2.</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col" />
        </div>
      </div>
    );
  }
}

export default UgovorOUcenju;
