import React, { Component } from "react";
import UnosKrajnjegRoka from "./unosKrajnjegRoka.js";
class NaslovnaKalendar extends Component {
  render() {
    return (
      <main>      
       <ul class="nav nav-tabs">
        <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#">
        Unos krajnjeg roka
        </a>
        </li>
        
        </ul>
        <div id="kalendar">
        <UnosKrajnjegRoka />
        </div>
      </main>
    );
  }
}

export default NaslovnaKalendar;
