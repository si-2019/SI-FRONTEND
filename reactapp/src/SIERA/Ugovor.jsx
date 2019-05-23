import React, { Component } from 'react';
import axios from "axios";
import Modal from "react-bootstrap/Modal";


class Ugovor extends Component {
    state = {  
        show: false
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
                            <div class="row">
                            <div class="col">
                            <button type="submit" class="btn btn-primary btn-lg btn-block" >Prikazi ugovor</button>
                            </div>
                       
                            <div class="col">
                            <button type="submit" class="btn btn-primary btn-lg btn-block">Preuzmi ugovor</button>
                            </div>
                             </div>
                        </div>
                    </div>
                </div>
                <div class="col">

                </div>
            </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton style={{backgroundColor:"green"}}>
                <Modal.Title>Ugovor uspješno kreiran!</Modal.Title>
            </Modal.Header>
        </Modal>



            </>
         );
    }
}
 
export default Ugovor;