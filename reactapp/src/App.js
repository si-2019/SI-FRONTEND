import React, { Component } from "react";
import "./App.css";
import Header from "./component/header";
import MainContent from "./component/mainContent";
import Footer from "./component/footer";

const App = () => (
  <div className="App">
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default App;
