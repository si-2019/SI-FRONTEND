import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Predmet from "./components/Predmet";
import PredmetZavrsniRad from './components/Predmet/PredmetZavrsniRad';
import ListaPredmeta from './components/ListaPredmeta/ListaPredmeta';
import Pocetna from './components/Predmet/Pocetna'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Predmeti:</h1>

        <BrowserRouter>
          <Route path="/Delta" exact component={Pocetna} />
          <Route path="/Delta/SI" exact component={Predmet} />
          <Route path="/Delta/ZavrsniRad" exact component={PredmetZavrsniRad} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;