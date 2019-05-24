import React from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Potvrda from "./Potvrda";
class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentID: 1,
            greska: null,
            brojac: 0
        }
        this.handlePutEvent = this.handlePutEvent.bind(this);
    }
    handlePutEvent(event) {
        event.preventDefault();
        if (this.props.noviInput.promjenaAdresa == null && this.props.noviInput.promjenaEmail == null && this.props.noviInput.promjenaBrtel == null) {
            this.setState({ greska: true });
        }
        else {
            if (this.props.noviInput.promjenaAdresa) {
                axios
                    .put(
                        `http://localhost:31918/studenti/update/adresa/` +
                        this.state.studentID,
                        {
                            adresa: this.props.noviInput.adresa
                        }
                    )
                    .then(res => {
                        this.setState({ greska: false });
                    });
            }
            if (this.props.noviInput.promjenaEmail) {
                axios
                    .put(
                        `http://localhost:31918/studenti/update/mail/` +
                        this.state.studentID,
                        {
                            mail: this.props.noviInput.email
                        }
                    )
                    .then(res => {
                        this.setState({ greska: false });
                    });
            }
            if (this.props.noviInput.promjenaBrtel) {
    
                axios
                .put(
                    `http://localhost:31918/studenti/update/tel/` +
                    this.state.studentID,
                    {
                        tel: this.props.noviInput.brtel
                    }
                )
                .then(res => {
                    this.setState({ greska: false });
                });

        }
    }

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
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.naslovModala}
                    </Modal.Title>
                </Modal.Header>
                <form onSubmit={this.handlePutEvent}>
                    <Modal.Body>
                        <h4>{this.props.nazivPromjene}</h4>
                        <div class="form-group">
                            {this.props.tijeloModala}
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" class="btn btn-outline-danger" onClick={this.props.onHide}>Odustani</button>
                        <button type="submit" id="spasiBtn" class="btn btn-primary">Spasi Promjene</button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}
export default ModalComponent;

//
/*
PROPS: modalBody, onHide (funkcija), modalTitle, nazivPromjene, noviInput (json)
*/