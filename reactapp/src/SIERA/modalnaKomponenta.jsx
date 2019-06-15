import React, { Component } from "react";
import "./bootstrap.css";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Potvrda from "./Potvrda";
import {withRouter} from "react-router-dom";

class modalnaKomponenta extends Component {
  state = {
    vrijednostInputa: "",
    greska: null,
    trenutnoLogovaniStudentID: (window.localStorage.getItem("id") != null && window.localStorage.getItem("username") != null) ? window.localStorage.getItem("id") : 1,
    username: window.localStorage.getItem("username") != null ? window.localStorage.getItem("username") : "Neki user",
    token: window.localStorage.getItem("token"),
  };

  constructor(props) {
    super(props);
    this.promjenaInputa = this.promjenaInputa.bind(this);
    this.brojac = 0;
  }

  posaljiZahtjev() {
    if (this.state.vrijednostInputa == "") {
      this.setState({ greska: true });
    } else {
      if (this.props.nazivpromjene == "LinkedIn") {
        axios
          .put(
            `http://localhost:31918/studenti/update/linkedin/` +
            this.state.trenutnoLogovaniStudentID,
            { linkedin: this.state.vrijednostInputa }
          )
          .then(res => {
            this.setState({ greska: false });
            window.location.reload();
          });
      } else if (this.props.nazivpromjene == "Website") {
        axios
          .put(
            `http://localhost:31918/studenti/update/website/` +
            this.state.trenutnoLogovaniStudentID,
            { website: this.state.vrijednostInputa }
          )
          .then(res => {
            this.setState({ greska: false });
            window.location.reload();
          });
      }
    }
  }
  handleAuth = ()=>{
    if (window.localStorage.getItem("id") != null) {
      var ajax = new XMLHttpRequest();
      ajax.onreadystatechange = () => {
          if (this.readyState == 4 && this.status == 200) {
              //radi sta hoces
              this.posaljiZahtjev();
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
  else this.posaljiZahtjev();

  }
  promjenaInputa(event) {
    this.setState({ vrijednostInputa: event.target.value });
  }

  renderujPotvrdu() {
    if (this.state.greska == false) {
      return (
        <Potvrda
          key={this.brojac}
          successful="true"
          msg="Zahtjev je uspjesno poslan"
        />
      );
    } else if (this.state.greska == true) {
      return (
        <Potvrda
          key={this.brojac}
          successful="false"
          msg="Polje ne smije biti prazno"
        />
      );
    }
    return "";
  }

  render() {
    ++this.brojac;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {this.renderujPotvrdu()}
        <Modal.Header closeButton className="modal-header">
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
            Unesite novu vrijednost polja
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <label className="col-form-label">{this.props.nazivpromjene}:</label>
          <input
            type="text"
            className="form-control"
            placeholder={this.props.nazivpromjene}
            id="inputDefault"
            onChange={this.promjenaInputa}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={() => this.posaljiZahtjev()}>
            Pošalji zahtjev
          </button>
          <button className="btn btn-secondary" onClick={this.props.onHide}>
            Zatvori
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default withRouter(modalnaKomponenta);
