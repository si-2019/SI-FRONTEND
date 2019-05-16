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
        if (this.props.noviInput.promjenaIme == null && this.props.noviInput.promjenaDrz == null && this.props.noviInput.promjenaFoto == null) {
            this.setState({ greska: true });
        }
        else {
            if (this.props.noviInput.promjenaIme) {
                axios
                    .put(
                        `http://localhost:31918/studenti/update/imeprezime/` +
                        this.state.studentID,
                        {
                            ime: this.props.noviInput.ime,
                            prezime: this.props.noviInput.prezime
                        }
                    )
                    .then(res => {
                        this.setState({ greska: false });
                    });
            }
            if (this.props.noviInput.promjenaDrz) {
                axios
                    .put(
                        `http://localhost:31918/studenti/update/drzavljanstvo/` +
                        this.state.studentID,
                        {
                            drzavljanstvo: this.props.noviInput.drz
                        }
                    )
                    .then(res => {
                        this.setState({ greska: false });
                    });
            }
            if (this.props.noviInput.promjenaFoto) {
                const formData = new FormData();
                formData.append('foto', this.props.noviInput.foto);
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                };
                axios
                    .put(
                        `http://localhost:31918/studenti/update/foto/` + this.state.studentID, formData, config)
                    .then(res => {
                        this.setState({ greska: false });
                    })
                    .catch(res => {
                        console.log("ne valja braca");
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