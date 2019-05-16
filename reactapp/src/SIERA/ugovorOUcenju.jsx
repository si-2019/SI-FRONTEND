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
                  <option selected="">Odaberite godinu studija</option>
                  <option value="1">1.</option>
                  <option value="2">2.</option>
                  <option value="3">3.</option>
                  <option value="3">4.</option>
                  <option value="3">5.</option>
                  <option value="3">6.</option>
                  <option value="3">7.</option>
                </select>

                <div style={{ textAlign: "left" }}>
                  <label class="col-form-label col-form-label-lg">
                    Godina studija
                  </label>
                </div>
                <select class="custom-select">
                  <option selected="">Odaberite smjer</option>
                  <option value="1">RI</option>
                  <option value="2">AIE</option>
                  <option value="3">EE</option>
                  <option value="3">TK</option>
                </select>

                <div style={{ textAlign: "left" }}>
                  <label class="col-form-label col-form-label-lg">
                    Godina studija
                  </label>
                </div>
                <select class="custom-select">
                  <option selected="">Odaberite semestar</option>
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
