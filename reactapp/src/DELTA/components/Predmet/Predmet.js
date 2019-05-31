import React, { Component } from "react";
import ListaPredmeta from "../ListaPredmeta/ListaPredmeta";
import OpisPredmeta from "../OpisPredmeta/OpisPredmeta";

class Predmet extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
          <ListaPredmeta />
          </div>
        <OpisPredmeta />
        </div>
      </div>
    );
  }
}

export default Predmet;
