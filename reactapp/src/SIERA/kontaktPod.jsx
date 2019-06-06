
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import ModalComponent from "./Modal1";
import Stranice from "./stranice.jsx";

class KontaktPod extends Component {
    state = {
        StudentID: 1,
        adresa: "lala",
        email: "isajdi",
        brTel: "98426",
        modalShow: false,
        noviInput: {
            adresa: null,
            email: null,
            brtel: null,
            promjenaAdresa: null,
            promjenaBrtel: null,
            promjenaEmail: null,
        }
    }
    componentDidMount() {
        axios
            .get(
                `http://localhost:31918/studenti/` +
                this.state.StudentID
            )
            .then(res => {

                const br = res.data.map(obj => obj.telefon);
                this.setState({ brTel: br });
                const eml = res.data.map(obj => obj.email);
                this.setState({ email: eml });
                const adr = res.data.map(obj => obj.adresa);
                this.setState({ adresa: adr });
            })
            .catch(err=>{
                console.log(err);
            });
    }
    render() {
        let modalClose = () => {
            this.setState({ modalShow: false });

            window.location.reload();
        }
        return (
            <>
            <h4 className="card-title" style={{ textAlign: "left" }}>Kontakt podaci</h4>
                        <div className="form-group">
                            <label class="col-form-label" for="inputDefault">Telefon</label>
                            <br></br>
                            <h4>{this.state.brTel}</h4>
                        </div>
                        <div className="form-group">
                            <label class="col-form-label" for="inputDefault">Adresa</label>
                            <br></br>
                            <h4>{this.state.adresa}</h4>
                        </div>
                        <div className="form-group">
                            <label class="col-form-label" for="inputDefault">Email</label>
                            <br></br>
                            <h4>{this.state.email}</h4>
                        </div>
                        <button type="button" class="btn btn-link" id="editBtn" onClick={() => this.setState({ modalShow: true })} >Edit</button>
    
                <ModalComponent
                    show={this.state.modalShow}
                    onHide={modalClose}
                    naslovModala="Kontakt podaci"
                    tijeloModala={
                        <>
                            <br></br>
                            <label class="col-form-label" for="inputDefault" >Telefon</label>
                            <input type="text" class="form-control" name="brtel"
                                onChange={
                                    (event) => {
                                        this.setState({
                                            noviInput: {
                                                adresa: this.state.noviInput.adresa,
                                                email: this.state.noviInput.email,
                                                promjenaAdresa: this.state.noviInput.promjenaAdresa,
                                                promjenaEmail: this.state.noviInput.promjenaEmail,
                                                promjenaBrtel: true,
                                                brtel: event.target.value,
                                            }

                                        });
                                    }
                                } />

                            <label class="col-form-label" for="inputDefault" >Adresa</label>
                            <input type="text" class="form-control" name="adresa"
                                onChange={
                                    (event) => {
                                        this.setState({
                                            noviInput: {
                                                adresa: event.target.value,
                                                email: this.state.noviInput.email,
                                                promjenaAdresa: true,
                                                promjenaEmail: this.state.noviInput.promjenaEmail,
                                                promjenaBrtel: this.state.noviInput.promjenaBrtel,
                                                brtel: this.state.noviInput.brtel,
                                            }

                                        });
                                    }
                                } />

                            <label class="col-form-label" for="inputDefault">Email</label>
                            <input type="text" class="form-control" name="email"
                                onChange={
                                    (event) => {
                                        this.setState({
                                            noviInput: {
                                                adresa: this.state.noviInput.adresa,
                                                email: event.target.value,
                                                promjenaAdresa: this.state.noviInput.promjenaAdresa,
                                                promjenaEmail: true,
                                                promjenaBrtel: this.state.noviInput.promjenaBrtel,
                                                brtel: this.state.noviInput.brtel,
                                            }
                                        });
                                    }
                                } />
                        </>
                    }
                    noviInput={this.state.noviInput}
                />
            </>



        );
    }

}

export default KontaktPod;
