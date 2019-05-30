import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Predmet from "./components/Predmet";
import BodoviZadaca from '../KILO/component/bodoviZadaca';
import Bodovi from './components/bodovi/Bodovi';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Predmeti:</h1>
        <BrowserRouter>
          <Route path="/delta" exact component={Predmet} />
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;