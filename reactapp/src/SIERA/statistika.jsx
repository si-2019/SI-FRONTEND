import React, { Component } from "react";
import axios from "axios";
import TabelaSortiranaPoOcjeni from "./tabelaSortiranaPoOcjeni";

class Statistika extends Component {
    state = {
        prikaziSortiranePoOcjeni: false
    };
    
    promijeniPrikazPoOcjeni() {
        this.setState({ prikaziSortiranePoOcjeni: true });
    }

    render() {
      return (
        <div className="container-fluid" style={{ marginTop: "30px" }}>
          <h2 style={{ marginBottom: "30px" }}>Statistika</h2>
          <div className="row" style={{ marginTop: "0.8em" }}>
            <div>
                <input
                type="button"
                className="btn btn-primary"
                value="Sortiraj predmete po ocjeni"
                onClick={() => this.promijeniPrikazPoOcjeni()}
                style={{marginLeft:"20px"}}
                />
            </div>
            <div className="row" style={{ marginTop: "0.8em" }}>
                {this.state.prikaziSortiranePoOcjeni ? (<TabelaSortiranaPoOcjeni />) : ("")}
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Statistika;