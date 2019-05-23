import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

import PregledPotvrde from "./components/PregledPotvrde/PregledPotvrde.js";

import US_23 from "./US_23";
import US_21 from "./US_21";
import US_18 from "./US_18";

function PotvrdeRouter() {
  return (
    <Fragment>
      <Route path="/Lima/potvrde/US_23" component={US_23} />
      <Route path="/Lima/potvrde/US_21" component={US_21} />
      <Route path="/Lima/potvrde/US_18" component={US_18} />
      <Route path="/Lima/potvrde/id/:potvrdaId" component={PregledPotvrde} />
      <Route exact path="/Lima/potvrde" component={Paths} />
    </Fragment>
  );
}

function Paths() {
  return (
    <ul>
      <li>
        <Link to="/Lima/potvrde/US_23"><div className="btn btn-primary">US_23</div></Link>
        <Link to="/Lima/potvrde/US_21"><div className="btn btn-primary">US_21</div></Link>
        <Link to="/Lima/potvrde/US_18"><div className="btn btn-primary">US_18</div></Link>
        <Link to="/Lima/potvrde/id/133"><div className="btn btn-primary">Pregled potvrde</div></Link>
      </li>
    </ul>
  );
}

export default PotvrdeRouter;