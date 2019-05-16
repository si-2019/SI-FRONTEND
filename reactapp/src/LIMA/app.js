import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

//US
import US_18 from "./US_18";

class App extends Component {
  render() {
    return (
      <div className="containter">
        <h1>LIMA</h1>
        <BrowserRouter>
          <Route path="/Lima/US_18" exact component={US_18} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
