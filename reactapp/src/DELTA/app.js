import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Predmet from "./components/Predmet";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route path="/delta" exact component={Predmet} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;