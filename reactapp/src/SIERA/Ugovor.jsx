import React, { Component } from 'react';
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Ugovor extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            studentId: 1,
            pdfUrl: null,
            numPages: null,
            pageNumber: 1
        }
        this.handleCreate = this.handleCreate.bind(this);
        this.handlePrikaz = this.handlePrikaz.bind(this);
    }

    handleCreate() {
        //saljemo post zahtjev s forme


    }
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:31918/ugovori/url/" + this.state.studentId,

        })
            .then(res => {
                this.setState({
                    pdfUrl: res.data.link
                });
            })
            .catch(res => {
                console.log(res.error);
            });
    }
    handlePrikaz() {
        const win = window.open("","_blank");
        let html = '';
        
        html += '<html>';
        html += '<body style="margin:0!important">';
        html += '<embed width="100%" height="100%" src="' + this.state.pdfUrl + '" type="application/pdf" />';
        html += '</body>';
        html += '</html>';
        
        setTimeout(() => {
          win.document.write(html);
        }, 0);
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
                <div class="row" style={{ margin: "0px" }}>
                    <div class="col"></div>
                    <div class="col" style={{ textAlign: "center" }}>
                        <div class="card" style={{ display: "inline-block" }}>
                            <div class="card-body">
                                <div style={{ visibility: "hidden" }}>dssffds</div>
                                <div style={{ visibility: "hidden" }}>dssffds</div>
                                <button type="submit" class="btn btn-primary btn-lg btn-block" onClick={this.handleShow}>Kreiraj ugovor</button>
                                <div style={{ visibility: "hidden" }}>dssffds</div>
                                <div style={{ visibility: "hidden" }}>dssffds</div>

                                <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.handlePrikaz}>Prikazi ugovor</button>

                            </div>
                        </div>
                    </div>
                    <div class="col">

                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton style={{ backgroundColor: "green" }}>
                        <Modal.Title>Ugovor uspješno kreiran!</Modal.Title>
                    </Modal.Header>
                </Modal>


            </>
        );
    }
}

export default Ugovor;