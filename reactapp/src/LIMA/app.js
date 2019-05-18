import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

//US
import US_23 from "./US_23";
import I_US_27 from "./I_US_27";
import US_21 from "./US_21";
import US_18 from "./US_18";

class App extends Component {
  render() {
    return (
      <div className="containter">
        <h1>LIMA</h1>
        <BrowserRouter>
          <Route path="/Lima/US_23" exact component={US_23} />
          <Route path="/Lima/I_US_27" exact component={I_US_27} />
          <Route path="/Lima/US_21" exact component={US_21} />
          <Route path="/Lima/US_18" exact component={US_18} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
