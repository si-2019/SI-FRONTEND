import React, { Component } from "react";
import ListaPredmeta from "../ListaPredmeta/ListaPredmeta";

class Pocetna extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
          <ListaPredmeta />
          </div>
        </div>
      </div>
    );
  }
}

export default Pocetna;
