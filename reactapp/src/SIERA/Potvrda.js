import React from "react";
import PopUp from "./PopUp";
import axios from "axios";

class Potvrda extends React.Component {
  constructor() {
    super();
    this.state = {
      idLogovanogStudenta: 1, //placeholder - treba API od autentifikacije
      isActive: false,
      prikazi: true
    };
    this.handleVisible = this.handleVisible.bind(this);
  }

  handleVisible() {
    this.setState(prevstate => {
      if (!prevstate.isActive) {
        return {
          isActive: true,
          prikazi: false
        };
      }
    });
  }
  render() {
    const successful = this.props.successful;
    const msg = this.props.msg;
    let obj = {};
    if (successful == "true") {
      obj = (
        <div className="col-4">
          <PopUp
            class="alert alert-dismissible alert-success"
            style={{
              backgroundColor: "#14bb9d",
              borderColor: "#14bb9d",
              color: "white"
            }}
            boldiraniTekst="Ok!"
            ostaliTekst={msg}
            show={this.state.prikazi}
            onClick={this.handleVisible}
          />
        </div>
      );
    } else {
      obj = (
        <div className="col-4">
          <PopUp
            class="alert alert-dismissible alert-danger"
            style={{
              backgroundColor: "#e74b3c",
              borderColor: "#e74b3c",
              color: "white"
            }}
            boldiraniTekst="Greška!"
            ostaliTekst={msg}
            show={this.state.prikazi}
            onClick={this.handleVisible}
          />
        </div>
      );
    }
    return obj;
  }
}

export default Potvrda;
