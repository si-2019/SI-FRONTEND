import React, { Component } from "react";
import Materijali from "./Materijali";
import Ankete from "./Ankete";
import Izvjestaji from "./Izvjestaji";
import Forum from "./Forum";
import Raspored from "./Raspored";

class DrugiModuli extends Component {
  render() {
    return (
      <div>
        <Materijali />
        <Ankete />
        <Izvjestaji />
        <Forum />
        <Raspored />
      </div>
    );
  }
}

export default DrugiModuli;
