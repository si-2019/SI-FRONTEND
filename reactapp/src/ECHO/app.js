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
      <div>
        <h2>ECHO</h2>
        <div className="App">
          <div className="row">
            <div id="mainECHO">
              <div id="leftECHO">
              <LeftMenu triggerChangeActiveId={this.onChangeActiveId} />
              </div>
              <div id="rightECHO">
              <div id="terminDiv"
                  style={{
                  display:
                  this.state.activeContentId == 1 ? "inherit" : "none"
                  }}
              ><NaslovnaTermin />
              </div>
              <div id = "Sale" 
         style={{display : this.state.activeContentId == 2 ? 'inherit' : 'none'}}
        ><ul class="nav nav-tabs">
        <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#">
        Unos sale
        </a>
        </li>
        <li class="nav-item">
        <a class="nav-link disable" data-toggle="tab" href="#">
        Prikaz sala
        </a>
        </li>
        </ul>
        <div id="prva">
        </div>
        <div id="druga" />
        </div>
        <div 
         id = "Kalendar" 
         style={{display : this.state.activeContentId == 3 ? 'inherit' : 'none'}}
        >
        <div id="prva">
        
        </div>
        </div>
        <div 
         id = "PretragaProfesora" 
         style={{display : this.state.activeContentId == 4 ? 'inherit' : 'none'}}
        >
        <div id="prva">
        </div>
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
