import React from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
class ModalComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            studentID: 1
        }
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState(() => {
            return {
                isOpen: false
            }
        })
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
                    <button type="button" class="btn btn-primary" onClick={this.props.handlePutRequest}>Spasi Promjene</button>
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