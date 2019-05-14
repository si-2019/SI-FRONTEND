import React, { Component } from "react";
import "./bootstrap.css";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Potvrda from "./Potvrda";

class modalnaKomponenta extends Component {
  state = {
    vrijednostInputa: "",
    greska: null,
    brojac: 1,
    trenutnoLogovaniStudentID: 1
  };

  constructor(props) {
    super(props);
    this.promjenaInputa = this.promjenaInputa.bind(this);
  }

  posaljiZahtjev() {
    if (this.state.vrijednostInputa == "") {
      this.setState({ greska: true });
      this.forceUpdate();
    } else {
      this.setState({ greska: false });
      this.forceUpdate();
      console.log("Vrijednost inputa je " + this.state.vrijednostInputa);
    }
  }

  promjenaInputa(event) {
    this.setState({ vrijednostInputa: event.target.value });
  }

  renderujPotvrdu() {
    if (this.state.greska == false) {
      console.log("Prvi uslov");
      return (
        <Potvrda key="1" successful="true" msg="Zahtjev je uspjesno poslan" />
      );
    } else if (this.state.greska == true) {
      console.log("Drugi uslov");
      return (
        <Potvrda key="2" successful="false" msg="Polje ne smije biti prazno" />
      );
    }
    return "";
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {this.renderujPotvrdu()}
        <Modal.Header closeButton class="modal-header">
          <Modal.Title id="contained-modal-title-vcenter" class="modal-title">
            Unesite novu vrijednost polja
          </Modal.Title>
        </Modal.Header>
        <Modal.Body class="modal-body">
          <label class="col-form-label">{this.props.nazivpromjene}:</label>
          <input
            type="text"
            class="form-control"
            placeholder={this.props.nazivpromjene}
            id="inputDefault"
            onChange={this.promjenaInputa}
          />
        </Modal.Body>
        <Modal.Footer>
          <button class="btn btn-primary" onClick={() => this.posaljiZahtjev()}>
            Pošalji zahtjev
          </button>
          <button class="btn btn-secondary" onClick={this.props.onHide}>
            Zatvori
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default modalnaKomponenta;
