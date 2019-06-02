
import React, { Component } from "react";
import "./App.css";
import Header from "./component/header";
import MainContent from "./component/mainContent";
import Footer from "./component/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>KILO</h1>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
