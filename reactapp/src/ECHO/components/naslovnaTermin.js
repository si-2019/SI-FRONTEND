import React, { Component } from "react";
import UnosTermina from "./unosTermina";

class NaslovnaTermin extends Component {
  render() {
    return (
      <main>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#">
              Unos
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disable" data-toggle="tab" href="#">
              Prikaz
            </a>
          </li>
        </ul>
        <div id="prva">
          <UnosTermina />
        </div>
        <div id="druga" />
      </main>
    );
  }
}

export default NaslovnaTermin;
