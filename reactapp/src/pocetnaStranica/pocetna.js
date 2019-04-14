import React, { Component } from 'react';
import './pocetna.css';
class AnketePocetna extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> ANKETE</h1>
        </header>
         <button className="App-edit" id = "kreiranje"><h1>Kreiraj anketu</h1></button>
        <button className="App-edit" id = "popunjavanje"><h1>Popuni anketu</h1></button>
        <button className="App-edit" id = "mojeAnkete"><h1>Moje ankete</h1></button>
        <button className="App-edit" id = "javneAnkete"><h1>Javne ankete</h1></button>
        <button className="App-edit" id = "rezultati"><h1>Rezultati anketa</h1></button>
      </div>
    );
  }
}
export default AnketePocetna;