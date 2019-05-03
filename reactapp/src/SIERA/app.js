import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import DatumRodjenja from "./DatumRodjenja";

class App extends Component {
  render() {
    return (
      <div>
        <h1>SIERA</h1>
        <BrowserRouter>
          <Route exact path="/Siera/datum-rodjenja" component={DatumRodjenja}></Route>
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
