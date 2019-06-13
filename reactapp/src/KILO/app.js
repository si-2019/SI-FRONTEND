
import React, { Component } from "react";
import "./AppKilo.css";
import Header from "./component/header";
import MainContent from "./component/mainContent";
import Footer from "./component/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{minWidth:"100%"}}>

        <div id="mainKilo" className="row" style={{ margin: "0px", padding: "0px" }}>
        <div id="leftKilo"
        className="col-lg-2 col-md-3 col-sm-12" style={{
          backgroundColor: "#2C3E50",
          minHeight: "100%",
          padding: "0px",
          margin: "0px"
          
        }}  
        > 
        <Header />
        </div>
        <div    id="rightKilo" 
                className="col-lg flex-grow-1 col-sm-12 col-md" style={{
                backgroundColor: "white",
                minHeight: "calc(100vh - 80px)",
                margin: "0px",
                padding: "0px"
}}>
        <MainContent />
        </div>
        <Footer />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
