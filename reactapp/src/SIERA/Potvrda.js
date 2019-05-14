import React from "react";
import PopUp from "./PopUp";
import axios from "axios";

class Potvrda extends React.Component {
  constructor() {
    super();
    this.state = {
      idLogovanogStudenta: 1, //placeholder - treba API od autentifikacije
      visible: "block",
      isActive: false
    };
    this.handleVisible = this.handleVisible.bind(this);
  }

  handleVisible() {
    this.setState(prevstate => {
      if (!prevstate.isActive) {
        return {
          visible: "none",
          isActive: true
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
        <div className="col-2">
          <PopUp
            class="alert alert-dismissible alert-success"
            style={{
              backgroundColor: "#14bb9d",
              borderColor: "#14bb9d",
              color: "white",
              display: this.state.visible
            }}
            boldiraniTekst="Ok!"
            ostaliTekst={msg}
            onClick={this.handleVisible}
          />
        </div>
      );
    } else {
      obj = (
        <div className="col-2">
          <PopUp
            class="alert alert-dismissible alert-danger"
            style={{
              backgroundColor: "#e74b3c",
              borderColor: "#e74b3c",
              color: "white",
              display: this.state.visible
            }}
            boldiraniTekst="Greška!"
            ostaliTekst={msg}
            onClick={this.handleVisible}
          />
        </div>
      );
    }
    return obj;
  }
}

export default Potvrda;
