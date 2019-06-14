import React, { Component } from "react";
import axios from "axios";
import ModalnaKomponenta from "./modalnaKomponenta";

class Stranice extends Component {
  constructor(...args) {
    super(...args);
    var id = 1;
    if (window.localStorage.getItem("id") != null && window.localStorage.getItem("id") != undefined) {
      id = window.localStorage.getItem("id");
    }
    this.state = {
      StudentID: id,
      LinkedIn: "",
      Website: "",
      otvorenModalLinkedIn: false,
      otvorenModalWebsite: false
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:31918/studenti/` + this.state.StudentID)
      .then(res => {
        if (res.data != undefined) {
          const In = res.data.map(obj => obj.linkedin);
          this.setState({ LinkedIn: In });

          const web = res.data.map(obj => obj.website);
          this.setState({ Website: web });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  otvoriModalLinkedIn() {
    this.setState({ otvorenModalLinkedIn: true });
  }

  otvoriModalWebsite() {
    this.setState({ otvorenModalWebsite: true });
  }

  render() {
    let zatvoriModalLinkedIn = () =>
      this.setState({ otvorenModalLinkedIn: false });
    let zatvoriModalWebsite = () =>
      this.setState({ otvorenModalWebsite: false });

    return (
      <div>

        <div style={{ flexDirection: "column", textAlign: "left" }}>
          <h4 className="card-title" style={{ textAlign: "left" }}>Stranice</h4>
          <div className="form-group">
            <label className="col-form-label" for="inputDefault"> LinkedIn:&nbsp;</label>
            <br></br>
            <h4><a href={this.state.LinkedIn} className="card-link">{this.state.LinkedIn}</a></h4>
          </div>

          <button className="btn btn-link" onClick={() => this.otvoriModalLinkedIn()}>Edit</button>
          <div className="form-group">
            <label className="col-form-label" for="inputDefault">  Website:&nbsp;</label>
            <br></br>
            <h4><a href={this.state.Website} className="card-link">{this.state.Website}</a></h4>
          </div>
          <button className="btn btn-link" onClick={() => this.otvoriModalWebsite()}> Edit </button>
        </div>

        <ModalnaKomponenta
          show={this.state.otvorenModalLinkedIn}
          onHide={zatvoriModalLinkedIn}
          nazivpromjene="LinkedIn"
        />
        <ModalnaKomponenta
          show={this.state.otvorenModalWebsite}
          onHide={zatvoriModalWebsite}
          nazivpromjene="Website"
        />
      </div >
    );
  }
}

export default Stranice;
