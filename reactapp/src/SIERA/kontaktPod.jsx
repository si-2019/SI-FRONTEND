import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Stranice from "./stranice.jsx";

class KontaktPod extends Component {
  state = {
    StudentID: 1,
    adresa: "lala",
    email: "isajdi",
    brTel: "98426"
  };
  componentDidMount() {
    axios
      .get(`http://localhost:31918/studenti/` + this.state.StudentID)
      .then(res => {
        const br = res.data.map(obj => obj.telefon);
        this.setState({ brTel: br });

        const eml = res.data.map(obj => obj.email);
        this.setState({ email: eml });

        const adr = res.data.map(obj => obj.adresa);
        this.setState({ adresa: adr });
      });
  }
  render() {
    return (
      <div
        className="card mb-3"
        style={{ minWidth: "300px", maxWidth: "500px" }}
      >
        <ul class="list-group list-group-flush">
          <li class="card-header">Kontakt Podaci</li>
          <li class="list-group-item">Telefon: {this.state.brTel}</li>
          <li class="list-group-item">Adresa: {this.state.adresa}</li>
          <li class="list-group-item">Email: {this.state.email}</li>
        </ul>
        <Stranice />
      </div>
    );
  }
}

export default KontaktPod;
