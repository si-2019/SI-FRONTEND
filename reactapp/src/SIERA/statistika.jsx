import React, { Component } from "react";
import axios from "axios";

class Statistika extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="align-self-start">
            <input
              type="button"
              className="btn btn-info "
              value="Sortiraj predmete po ocjeni"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Statistika;
