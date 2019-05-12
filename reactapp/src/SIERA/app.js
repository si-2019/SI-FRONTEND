import React, { Component } from 'react';
import Potvrda from "./Potvrda";
import PopUp from "./PopUp"


class App extends Component {
  //komponenta potvrda ne treba ovdje da se poziva
  render() {
    return (
      <div>
        <h1>SIERA</h1>
        <Potvrda 
          successful="false" 
          msg="hello"/> 
      </div>
    );
  }
}

export default App;
