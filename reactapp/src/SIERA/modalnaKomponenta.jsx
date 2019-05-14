import React, { Component } from "react";
import "./bootstrap.css";
import Modal from "react-bootstrap/Modal";

class modalnaKomponenta extends Component {
  state = {
    vrijednostInputa: ""
  };

  constructor(props) {
    super(props);
    this.promjenaInputa = this.promjenaInputa.bind(this);
  }

  posaljiZahtjev() {
    console.log("Vrijednost inputa je " + this.state.vrijednostInputa);
    this.props.onHide();
  }

  promjenaInputa(event) {
    this.setState({ vrijednostInputa: event.target.value });
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
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
