import React, { Component } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import KreiranjeZadace from "./kreiranjeZadace";
import AzuriranjeZadace from "./azuriranjeZadace";
import BrisanjeZadace from "./brisanje";

import history from "../utils/history";

const idPredmeta = 3;

class MainContent extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path={"/KILO/kreiranjeZadace/"} component={KreiranjeZadace} />
          <Route
            path={"/KILO/azuriranjeZadace/"}
            component={AzuriranjeZadace}
          />
          <Route
            path={"/KILO/brisanjeZadace/"}
            component={BrisanjeZadace}
          />
          <Redirect to={"/KILO/kreiranjeZadace/?idPredmeta=" + idPredmeta} />
        </Switch>
      </Router>
    );
  }
}

export default MainContent;
