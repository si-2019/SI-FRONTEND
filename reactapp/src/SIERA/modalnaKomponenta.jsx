import React, { Component } from "react";
import "./bootstrap.css";
import Modal from "react-bootstrap/Modal";

class modalnaKomponenta extends Component {
  state = {};

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
          <label class="col-form-label" for="inputDefault">
            {this.props.nazivPromjene}:
          </label>
          <input
            type="text"
            class="form-control"
            placeholder={this.props.nazivPromjene}
            id="inputDefault"
          />
        </Modal.Body>
        <Modal.Footer>
          <button class="btn btn-primary" onClick={this.props.onHide}>
            Pošalji zahtjev
          </button>
          <button class="btn btn-secondary" onClick={this.props.onHide}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default modalnaKomponenta;
