import React, { Component } from "react";

import "./App.css";
import Dani from "./dani.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dan: "Ponedjeljak"
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }
  render() {
    return <Dani next={this.next} prev={this.prev} danas={this.state.dan} />;
  }
  next() {
    if (this.state.dan === "Ponedjeljak") {
      this.setState({
        dan: "Utorak"
      });
    } else if (this.state.dan === "Utorak") {
      this.setState({
        dan: "Srijeda"
      });
    } else if (this.state.dan === "Srijeda") {
      this.setState({
        dan: "Četvrtak"
      });
    } else if (this.state.dan === "Četvrtak") {
      this.setState({
        dan: "Petak"
      });
    } else if (this.state.dan === "Petak") {
      this.setState({
        dan: "Ponedjeljak"
      });
    }
  }
  prev() {
    if (this.state.dan === "Ponedjeljak") {
      this.setState({
        dan: "Petak"
      });
    } else if (this.state.dan === "Utorak") {
      this.setState({
        dan: "Ponedjeljak"
      });
    } else if (this.state.dan === "Srijeda") {
      this.setState({
        dan: "Utorak"
      });
    } else if (this.state.dan === "Četvrtak") {
      this.setState({
        dan: "Srijeda"
      });
    } else if (this.state.dan === "Petak") {
      this.setState({
        dan: "Četvrtak"
      });
    }
  }
}

export default App;
