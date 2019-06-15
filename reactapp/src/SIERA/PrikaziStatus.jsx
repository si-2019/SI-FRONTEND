import React, { Component } from 'react';
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { withRouter } from "react-router-dom";

class PrikaziStatus extends Component {
  constructor() {
    super();
    this.state = {
      StudentID: (window.localStorage.getItem("id") != null && window.localStorage.getItem("username") != null) ? window.localStorage.getItem("id") : 1,
      username: window.localStorage.getItem("username") != null ? window.localStorage.getItem("username") : "Neki user",
      token: window.localStorage.getItem("token"),
      status: [],
      teme: [],
      od: "Odobreno",
      neod: "Neodobreno",
      ncek: "Na čekanju",
      show: false
    }
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
      .get(
        `http://localhost:31918/temezavrsni/` +
        this.state.StudentID
      )
      .then(res => {
        if (res.data.success) {
          const Teme = res.data.teme.map(obj => obj.naziv);
          this.setState({ teme: Teme });

          const Status = res.data.teme.map(obj => obj.odobreno);
          this.setState({ status: Status });
        }
      });
  }

  Provjeri = provjeri => {
    if (provjeri == null) return <p>Na čekanju</p>
    else if (provjeri == 1) return <p>Odobreno</p>
    return <p>Neodobreno</p>
  }

  handleOdobreno() {

    return (
      <div className="row">
        {this.props.children}
        <div className="col-sm"> Tema:
            <ul>
            {this.state.teme.map(tema => (
              <li className="list-group-item list-group-item-action mt-2" key={tema}>
                {tema}
              </li>
            ))}

          </ul>
        </div>
        <div className="col-sm">Status:
            <ul>
            {this.state.status.map(odobreno => (
              <li className="list-group-item list-group-item-action mt-2" key={odobreno}>
                {this.Provjeri(odobreno)}
              </li>
            ))}

          </ul>
        </div>
      </div>
    );
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render() {

    return (
      <>
        <button type="submit" className="btn btn-primary" onClick={this.handleShow}>Prikaži status</button>
        <Modal show={this.state.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Završni rad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {this.handleOdobreno()}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="submit" onClick={this.handleClose} className="btn btn-secondary">Zatvori</button>

          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withRouter(PrikaziStatus);