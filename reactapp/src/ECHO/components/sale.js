import React, { Component } from "react";
import DodajNovuSalu from "./DodajNovuSalu";
import PrikaziSaleForma from "./PrikaziSaleForma";
class Sale extends Component {
  render() {
    return (
      <main>      
       <ul class="nav nav-tabs">
        <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#">
        Unos sale
        </a>
        </li>
        <li class="nav-item">
        <a class="nav-link disable" data-toggle="tab" href="#">
        Prikaz sala
        </a>
        </li>
        </ul>
        <div id="prva">
        <DodajNovuSalu />
        </div>
        <div id="druga">
        
          </div>
      </main>
    );
  }
}

export default Sale;
