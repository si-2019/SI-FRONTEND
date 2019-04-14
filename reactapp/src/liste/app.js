import React, { Component } from 'react';
import './stil.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{padding: '25px'}}>
        <h1 id="naslov">Moje ankete</h1>
        <hr/>
        <div className="anketa">
            <label className="element"><h6>Hamo</h6></label>
            <button className="dugmeUredi">Uredi</button>
             <button className="dugmeObrisi">Obrisi</button>
          </div>
             <br></br>
         <div className="anketa">
            <label className="element"><h6>ahmo</h6></label>
            <button className="dugmeUredi">Uredi</button>
             <button className="dugmeObrisi">Obrisi</button>
          </div>
        <hr/>
      </div>
    );
  }
}

export default App;