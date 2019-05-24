import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Predmet from "./components/Predmet";
import PredmetZavrsniRad from './components/Predmet/PredmetZavrsniRad';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Predmeti:</h1>
        <BrowserRouter>
          <Route path="/delta" exact component={Predmet} />
          <Route path="/Delta/ZavrsniRad" exact component={PredmetZavrsniRad} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;