import React from "react";
import Modal from "react-bootstrap/Modal";

class ModalComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            greska: null,
            studentID: 1
        }

        this.handleClose = this.handleClose.bind(this);
        this.handlePostRequest = this.handlePostRequest.bind(this);
        this.promjenaInputa = this.promjenaInputa.bind(this);
    }
    handleClose() {
        this.setState(() => {
            return {
                isOpen: false
            }
        })
    }
    handlePostRequest() {

    }

    promjenaInputa(event) {
        this.setState({ noviInput: event.target.value });
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.modalTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{this.props.nazivPromjene}</h4>
                    <div class="form-group" onSubmit={this.promjenaInputa}>
                        {this.props.modalBody}
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-outline-danger" onClick={this.props.onHide}>Odustani</button>
                    <button type="button" class="btn btn-primary">Spasi Promjene</button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ModalComponent;

//
/*
PROPS: modalBody, onHide (funkcija), modalTitle, nazivPromjene
*/