import React, { Component } from "react";
import PocetnaStranica from "./pocetnaStranica";
import "./app.css";
import {Route} from "react-router";
import ProfAvailability from "./ProfessorsAvailability/ProfessorsAvailability";
import unosTerminaAdmin from "./unosTerminaAdmin";
import pocetnaStranica from './pocetnaStranica'
import {BrowserRouter as Router} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div id="glavniDivEcho">
        <h1>ECHO</h1>
          <Router>
                  <Route path="/echo" exact component={pocetnaStranica} />
                  <Route path="/echo/professors" exact component={ProfAvailability} />
                  <Route path="/echo/unos-termina" exact component={unosTerminaAdmin} />
          </Router>
      </div>
    );
  }
}

export default App;
