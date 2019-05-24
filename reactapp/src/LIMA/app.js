import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";
import PotvrdeRouter from './Potvrde/PotvrdeRouter.js';
import IzvjestajiRouter from './Izvjestaji/IzvjestajiRouter.js';

function App() {
  return (
    <Fragment>
      <Route path="/Lima/potvrde" component={PotvrdeRouter}/>
      <Route path="/Lima/izvjestaji" component={IzvjestajiRouter} />
      <Route exact path="/Lima/" component={Paths} />
    </Fragment>
  );
}

function Paths() {
  return (
    <ul>
      <li>
        <Link to="/Lima/izvjestaji"><div className="btn btn-primary">Izvjestaji</div></Link>
        <Link to="/Lima/potvrde"><div className="btn btn-primary">Potvrde</div></Link>
      </li>
    </ul>
  );
}

export default App;