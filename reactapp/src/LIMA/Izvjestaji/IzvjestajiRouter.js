import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

import I_US_27 from "./I_US_27";
import I_US_30 from "./I_US_30";
import PrisustvoPoPredmetu from "./components/Dijagrami/PrisustvoPoPredmetu";
import I_US_25 from "./I_US_25";
import I_US_26 from "./I_US_26";
import I_US_47 from "./I_US_47";
import I_US_56 from "./I_US_56";
import I_US_60 from "./I_US_60";

import IzvjestajPoGodinama from "./I_US_23_I_35/Izvjestaj_prosjeka_ocjena_po_godinama";
import I_US_48 from "./I_US_48";

function IzvjestajiRouter() {
  return (
    <Fragment>
      <Route path="/Lima/izvjestaji/I_US_27" component={I_US_27} />
      <Route path="/Lima/izvjestaji/I_US_30" component={I_US_30} />
      <Route
        path="/Lima/izvjestaji/prisustvo"
        component={PrisustvoPoPredmetu}
      />
      <Route path="/Lima/izvjestaji/I_US_25" component={I_US_25} />
      <Route path="/Lima/izvjestaji/I_US_26" component={I_US_26} />
      <Route path="/Lima/izvjestaji/I_US_47" component={I_US_47} />
      <Route path="/Lima/izvjestaji/I_US_56" component={I_US_56} />
      <Route path="/Lima/izvjestaji/I_US_60" component={I_US_60} />

      <Route
        path="/Lima/izvjestaji/IzvjestajProsjeka"
        component={IzvjestajPoGodinama}
      />
      <Route exact path="/Lima/izvjestaji" component={Paths} />
      <Route path="/Lima/izvjestaji/I_US_48" component={I_US_48} />
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
        <Link to="/Lima/izvjestaji/prisustvo">
          <div className="btn btn-primary">Dijagram prisustva</div>
        </Link>
        <Link to="/Lima/izvjestaji/I_US_27">
          <div className="btn btn-primary">I_US_27</div>
        </Link>
        <Link to="/Lima/izvjestaji/I_US_30">
          <div className="btn btn-primary">I_US_30</div>
        </Link>
        <Link to="/Lima/izvjestaji/I_US_25">
          <div className="btn btn-primary">I_US_25</div>
        </Link>
        <Link to="/Lima/izvjestaji/I_US_26">
          <div className="btn btn-primary">I_US_26</div>
        </Link>
        <Link to="/Lima/izvjestaji/I_US_47">
          <div className="btn btn-primary">I_US_47</div>
        </Link>
        <Link to="/Lima/izvjestaji/I_US_56">
          <div className="btn btn-primary">I_US_56</div>
        </Link>
        <Link to="/Lima/izvjestaji/I_US_60">
          <div className="btn btn-primary">I_US_60</div>
        </Link>
        <Link to="/Lima/izvjestaji/IzvjestajProsjeka">
          <div className="btn btn-primary">Prosjek ocjena po godinama</div>
        </Link>
        <Link to="/Lima/izvjestaji/I_US_48">
          <div className="btn btn-primary">I_US_48</div>
        </Link>
      </li>
    </ul>
  );
}

export default IzvjestajiRouter;
