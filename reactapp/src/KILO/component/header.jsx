


import React, { Component } from "react";
import history from "../utils/history";
import { Link } from "react-router-dom";
import MainContent from "./mainContent";

class Header extends Component {  

  render() {
  

   

    return (
      <div>
        
          <button
            type="button"
            class="meniBtn"
            className="btn btn-primary left-buttons"
            id="KreiranjeKilo"
            style={{ width: "100%" }}
            onClick={()=>this.props.podaci.postaviAktivniDiv(1)}
          >
            <Link to="/KILO/kreiranjeZadace/?idPredmeta=3">
            Kreiranje zadaće</Link>
          </button>
       

       
          <button
            type="button"
            class="meniBtn"
            className="btn btn-primary left-buttons"
            id="AzuriranjeKilo"
            style={{ width: "100%" }}
            onClick={()=>this.props.podaci.postaviAktivniDiv(2)}
          ><Link to="/KILO/azuriranjeZadace/?idPredmeta=3">
            Ažuriranje zadaće
            </Link>
          </button>
       

        
          <button
            type="button"
            class="meniBtn"
            className="btn btn-primary left-buttons"
            id="BrisanjeKilo"
            style={{ width: "100%" }}
            onClick={()=>this.props.podaci.postaviAktivniDiv(3)}
          >
            <Link to="/KILO/brisanjeZadace/?idPredmeta=3">
            Brisanje zadaće
            </Link>
          </button>
      

        
          <button
            type="button"
            class="meniBtn"
            className="btn btn-primary left-buttons"
            id="OcjenivanjeKilo"
            style={{ width: "100%" }}
            onClick={()=>this.props.podaci.postaviAktivniDiv(4)}
          >
            <Link to="/KILO/ocjenjivanjeZadace/?idPredmeta=3">
            Ocjenjivanje zadaće
            </Link>
          </button>
     

        
          <button
            type="button"
            class="meniBtn"
            className="btn btn-primary left-buttons"
            style={{ width: "100%" }}
            onClick={()=>this.props.podaci.postaviAktivniDiv(5)}
          >
            <Link to="/KILO/student/?idStudenta=1">
            Student
            </Link>
          </button>
        
      
      </div>
    );
  }
}

export default Header;
