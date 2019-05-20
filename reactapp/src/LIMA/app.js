import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {Link,Routes} from "bootstrap";
import { Button, Navbar } from 'react-bootstrap'

//US
import US_23 from "./US_23";
import I_US_27 from "./I_US_27";
import US_21 from "./US_21";
import I_US_30 from "./I_US_30";

class App extends Component {
  render() {
    return (
        <>
        <h1>LIMA</h1>
        <div className="App container">
            <a href="http://localhost:3000/Lima/US_23">UserStory 23</a> 
            <a href="http://localhost:3000/Lima/US_21">UserStory 21</a> 
            <a href="http://localhost:3000/Lima/I_US_27">UserStory Izvještaji_27</a> 
            <a href="http://localhost:3000/Lima/I_US_30">UserStory Izvještaji_30</a> 
        </div>

<div className="containter">
        <BrowserRouter>
          <Route path="/Lima/US_23" exact component={US_23} />
          <Route path="/Lima/I_US_27" exact component={I_US_27} />
          <Route path="/Lima/US_21" exact component={US_21} />
          <Route path="/Lima/I_US_30" exact component={I_US_30} />
          <Route path="/Lima/US_18" exact component={US_18} />
        </BrowserRouter>
      </div>
      </>
    );
  }
}

export default App;
