import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div className="container">
        ROMEO
        <BrowserRouter>
          <Route
            path="/romeo/login"
            exact
            component={Login}
          />
          <Route path="/romeo" exact component={Login} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
