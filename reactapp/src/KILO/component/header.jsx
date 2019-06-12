import React, { Component } from "react";
import history from "../utils/history";
import { Link } from 'react-router-dom';
class Header extends Component {

  render() {
    return (
      <div>
        <Link to="/KILO/kreiranjeZadace/?idPredmeta=3">
          <button
            type="button"
            class="meniBtn"
            className="btn btn-primary left-buttons"
            id="KreiranjeKilo"
            style={{ width: "100%" }}

          >
            Kreiranje zadaće
        </button>
        </Link>

        <Link to="/KILO/azuriranjeZadace/?idPredmeta=3">
          <button
            type="button"
            class="meniBtn"
            className="btn btn-primary left-buttons"
            id="AzuriranjeKilo"
            style={{ width: "100%" }}
          >
            Ažuriranje zadaće
         </button>
        </Link>

        <Link to="/KILO/brisanjeZadace/?idPredmeta=3">
          <button
            type="button"
          
            className="meniBtn btn btn-primary left-buttons"
            id="BrisanjeKilo"
            style={{ width: "100%" }
          }
          
          >
            Brisanje zadaće
         </button>
        </Link>

        <Link to="/KILO/ocjenjivanjeZadace/">
          <button
            type="button"
            class="meniBtn"
            className="btn btn-primary left-buttons"
            id="OcjenivanjeKilo"
            style={{ width: "100%" }}
          >
            Ocjenjivanje zadaće
          </button>
        </Link>

        <Link to="/KILO/student/">
          <button
            type="button"
            class="meniBtn"
            className="btn btn-primary left-buttons"
            style={{ width: "100%" }}
          >
            Student
          </button>
        </Link>

      </div>
    );


  }

}

export default Header;