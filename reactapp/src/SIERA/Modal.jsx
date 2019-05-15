import React from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Potvrda from "./Potvrda";
class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            studentID: 1,
            greska: null,
            brojac: 0
        }
        this.handleClose = this.handleClose.bind(this);
        this.handlePutEvent = this.handlePutEvent.bind(this);
    }
    handleClose() {
        this.setState(() => {
            return {
                isOpen: false
            }
        })
    }
    handlePutEvent() {
        if(this.props.noviInput.promjenaIme==null && this.props.noviInput.promjenaDrz==null && this.props.noviInput.promjenaFoto==null){
            this.setState({ greska: true });
        }
        else{
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
                        console.log(res);
                        console.log(res.data);
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
            if(this.props.noviInput.promjenaFoto){
                axios
                    .put(
                        `http://localhost:31918/studenti/update/foto/` +
                        this.state.studentID,
                        {
                            foto: this.props.noviInput.foto
                        }
                    )
                    .then(res => {
                        this.setState({ greska: false });
                        console.log("editovana slika");
                    })
                    .catch(res=>{
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
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.naslovModala}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{this.props.nazivPromjene}</h4>
                    <div class="form-group">
                        {this.props.tijeloModala}
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-outline-danger" onClick={this.props.onHide}>Odustani</button>
                    <button type="button" class="btn btn-primary" onClick={this.handlePutEvent}>Spasi Promjene</button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ModalComponent;

//
/*
PROPS: modalBody, onHide (funkcija), modalTitle, nazivPromjene, noviInput (json)
*/