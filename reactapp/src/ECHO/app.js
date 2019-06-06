import React, { Component } from "react";
import "./app.css";
import LeftMenu from "./components/LeftMenu.js";
import NaslovnaTermin from "./components/naslovnaTermin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeContentId: 1
    };
  }

  onChangeActiveId = id => {
    this.setState({
      activeContentId: id
    });
  };

  render() {
    const { open } = this.state;
    return (
      <div id = "najglavnijiodsviju">
        <h2>ECHO</h2>
        <div className="App">
          <div className="row">
            <div id="mainECHO">
              <div id="leftECHO">
                <LeftMenu triggerChangeActiveId={this.onChangeActiveId} />
              </div>
              <div id="rightECHO">
                <div
                  id="terminDiv"
                  style={{
                    display:
                      this.state.activeContentId == 1 ? "inherit" : "none"
                  }}
                >
                  <NaslovnaTermin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
