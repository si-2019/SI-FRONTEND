import React, { Component } from "react";
import axios from "axios";
import ModalnaKomponenta from "./modalnaKomponenta";

class Stranice extends Component {
  constructor(...args) {
    super(...args);
  }

  state = {
    StudentID: 1,
    LinkedIn: "la",
    Website: "bla",
    otvorenModal: false
  };
  componentDidMount() {
    axios
      .get(`http://localhost:31918/studenti/` + this.state.StudentID)
      .then(res => {
        const In = res.data.map(obj => obj.linkedin);
        this.setState({ LinkedIn: In });

        const web = res.data.map(obj => obj.website);
        this.setState({ Website: web });
      });
  }

  posaljiZahtjevZaLinkedIn() {}

  otvoriModal() {
    console.log("Otvoreno");
    this.setState({ otvorenModal: true });
  }

  render() {
    let modalClose = () => this.setState({ otvorenModal: false });
    return (
      <div style={{ display: "inline-block" }}>
        <ul
          class="list-group list-group-flush"
          style={{ width: "100%", display: "inline-block" }}
        >
          <li class="card-header">Web Stranice</li>
          <li class="list-group-item">
            LinkedIn:&nbsp;
            <a href={this.state.LinkedIn} class="card-link">
              {this.state.LinkedIn}
            </a>
            <button
              class="btn btn-warning float-right"
              stlyle={{ float: "right" }}
              onClick={() => this.otvoriModal()}
            >
              Izmijeni
            </button>
          </li>
          <li class="list-group-item">
            Website:&nbsp;
            <a href={this.state.Website} class="card-link">
              {this.state.Website}
            </a>
          </li>
        </ul>
        <div>
          <ModalnaKomponenta
            show={this.state.otvorenModal}
            onHide={modalClose}
          />
        </div>
      </div>
    );
  }
}

export default Stranice;
