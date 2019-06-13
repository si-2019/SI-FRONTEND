import React, { Component } from "react";
import history from "../utils/history";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div>
        <a href="/KILO/kreiranjeZadace/?idPredmeta=3">
          <button
            type="button"
            class="meniBtn"
            className="btn btn-primary left-buttons"
            id="KreiranjeKilo"
            style={{ width: "100%" }}
          >
            Kreiranje zadaće
          </button>
        </a>

        <a href="/KILO/azuriranjeZadace/?idPredmeta=3">
          <button
            type="button"
            class="meniBtn"
            className="btn btn-primary left-buttons"
            id="AzuriranjeKilo"
            style={{ width: "100%" }}
          >
            Ažuriranje zadaće
          </button>
        </a>

        <a href="/KILO/brisanjeZadace/">
          <button
            type="button"
            class="meniBtn"
            className="btn btn-primary left-buttons"
            id="BrisanjeKilo"
            style={{ width: "100%" }}
          >
            Brisanje zadaće
          </button>
        </a>

        <a href="/KILO/ocjenjivanjeZadace/">
          <button
            type="button"
            class="meniBtn"
            className="btn btn-primary left-buttons"
            id="OcjenivanjeKilo"
            style={{ width: "100%" }}
          >
            Ocjenjivanje zadaće
          </button>
        </a>

        <a href="/KILO/student/">
          <button
            type="button"
            class="meniBtn"
            className="btn btn-primary left-buttons"
            style={{ width: "100%" }}
          >
            Student
          </button>
        </a>
      </div>
    );
  }
}

export default Header;
