import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PregledPotvrde from "./components/PregledPotvrde";

function PotvrdeRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Header}/>
        <Route exact path="/:potvrdaId" component={PregledPotvrde} />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/123">Dummy potvrda</Link>
      </li>
    </ul>
  );
}

export default PotvrdeRouter;