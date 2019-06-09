import React, { Component } from "react";
import axios from "axios";

class Statistika extends Component {
    state = {
        prikaziSortiranePoOcjeni: false
    };
    
    promijeniPrikazPoOcjeni() {
        this.setState({ prikaziSortiranePoOcjeni: true });
    }

    render() {
      return (
        <div className="container-fluid">
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
          </div>
        </div>
      );
    }
  }
  
  export default Statistika;