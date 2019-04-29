import React, { Component } from "react";
import PocetnaStranica from "./pocetnaStranica";
import "./app.css";
class App extends Component {
  render() {
    return (
      <div id="glavniDivEcho">
        <h1>ECHO</h1>
        <PocetnaStranica />
      </div>
    );
  }
}

export default App;
