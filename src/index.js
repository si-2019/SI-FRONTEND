import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { Header } from "./components/Header";
import { Predmet } from "./components/Predmet";
import { Footer } from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container" id="header">
          <div className="row">
            <div className="col-xs-10-offset-1">
              <Header />
            </div>
          </div>
        </div>
        <div className="container" id="predmet">
          <div className="row">
            <Predmet />
          </div>
        </div>
        <div className="container" id="footer">
          <div className="row">
            <div className="col-xs-10-offset-1">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
