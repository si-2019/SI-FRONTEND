import React, { Component } from "react";
import axios from "axios";
import ModalnaKomponenta from "./modalnaKomponenta";
import { withRouter } from "react-router-dom";

class Stranice extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      StudentID: (window.localStorage.getItem("id") != null && window.localStorage.getItem("username") != null) ? window.localStorage.getItem("id") : 1,
      username: window.localStorage.getItem("username") != null ? window.localStorage.getItem("username") : "Neki user",
      token: window.localStorage.getItem("token"),
      LinkedIn: "",
      Website: "",
      otvorenModalLinkedIn: false,
      otvorenModalWebsite: false
    };
  }

  componentDidMount() {
    if (window.localStorage.getItem("id") != null) {
      var ajax = new XMLHttpRequest();
      ajax.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
          this.handleGet();
        }
        else {
          //vrati na login
          this.props.history.push("/Romeo");
        }
      }
      ajax.open("GET", "https://si2019romeo.herokuapp.com/users/validate/data?username=" + this.state.username, true);
      ajax.setRequestHeader("Authorization", this.state.token);
      ajax.send();
    }
    else this.handleGet();
  }

  handleGet = () => {
    axios
      .get(`https://si2019siera.herokuapp.com/studenti/` + this.state.StudentID)
      .then(res => {
        if (res.data.success) {
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

export default withRouter(Stranice);
