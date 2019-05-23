import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

import I_US_27 from "./I_US_27";
import I_US_30 from "./I_US_30";
import IzvjestajPoGodinama from "./I_US_23_I_35/Izvjestaj_prosjeka_ocjena_po_godinama";

function IzvjestajiRouter() {
  return (
    <Fragment>
      <Route path="/Lima/izvjestaji/I_US_27" component={I_US_27} />
      <Route path="/Lima/izvjestaji/I_US_30" component={I_US_30} />
      <Route
        path="/Lima/izvjestaji/IzvjestajProsjeka"
        component={IzvjestajPoGodinama}
      />
      <Route exact path="/Lima/izvjestaji" component={Paths} />
    </Fragment>
  );
}

function Paths() {
  return (
    <ul>
      <li>
        <Link to="/Lima/izvjestaji/I_US_27">
          <div className="btn btn-primary">I_US_27</div>
        </Link>
        <Link to="/Lima/izvjestaji/I_US_30">
          <div className="btn btn-primary">I_US_30</div>
        </Link>
        <Link to="/Lima/izvjestaji/IzvjestajProsjeka">
          <div className="btn btn-primary">Prosjek ocjena po godinama</div>
        </Link>
      </li>
    </ul>
  );
}

export default IzvjestajiRouter;
