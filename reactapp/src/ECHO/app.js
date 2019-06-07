import React, { Component } from "react";
import "./app.css";
import LeftMenu from "./components/LeftMenu.js";
import NaslovnaTermin from "./components/naslovnaTermin";
import NaslovnaKalendar from "./components/naslovnaKalendar.js";

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
      <div className="App">
        <h2 id="naslov">ECHO</h2>
        <div id="mainECHO">
          <div id="leftECHO">
            <LeftMenu triggerChangeActiveId={this.onChangeActiveId} />
          </div>
          <div id="rightECHO">
            <div
              id="terminDiv"
              style={{
                display: this.state.activeContentId == 1 ? "inherit" : "none"
              }}
            >
              <NaslovnaTermin />
            </div>
            <div
              id="Sale"
              style={{
                display: this.state.activeContentId == 2 ? "inherit" : "none"
              }}
            >
              {/*DODATI KOMPONENTU SALE UNUTAR KOJE SE DEFINISE IZGLED TABOVA */}
            </div>
            <div
              id="Kalendar"
              style={{
                display: this.state.activeContentId == 3 ? "inherit" : "none"
              }}
            >
              <NaslovnaKalendar />
              {/*DODATI KOMPONENTU KALENDAR UNUTAR KOJE SE DEFINISE IZGLED TABOVA */}
            </div>
            <div
              id="PretragaProfesora"
              style={{
                display: this.state.activeContentId == 4 ? "inherit" : "none"
              }}
            >
              {/*DODATI KOMPONENTU PRETRAGA UNUTAR KOJE SE DEFINISE IZGLED TABOVA */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
