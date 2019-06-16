import React, { Component } from 'react';
import axios from 'axios';
import "./bootstrap.min.css"
import ModalComponent from "./ModalLicni"
import Kontakt from "./kontaktPod"
import Stranice from "./stranice";
import {withRouter} from "react-router-dom";

class LicniPod extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            ime: "",
            prezime: "",
            datumRodjenja: "",
            mjestoRodjenja: "",
            Index: "",
            imePrezimeOca: "",
            imePrezimeMajke: "",
            Drzavljanstvo: "",
            StudentID: (window.localStorage.getItem("id") != null && window.localStorage.getItem("username") != null) ? window.localStorage.getItem("id") : 2,
            username: window.localStorage.getItem("username") != null ? window.localStorage.getItem("username") : "Neki user",
            token: window.localStorage.getItem("token"),
            fotka: null,
            modalShow: false,
        }
    }

    saveState = (type, state) => {
        switch (type) {
            case "modalShow":
                this.setState({
                    modalShow: state
                });
                break;
            case "podaciKorisnika":
                this.setState(state, () => {
                    this.setState({
                        modalShow: false
                    });
                });
                break;
            default:
                break;
        }
    }
    handleGet = ()=>{
         axios
            .get(
                `https://si2019siera.herokuapp.com/studenti/` +
                this.state.StudentID
            )
            .then(res => {
                const ime = res.data.map(obj => obj.ime);
                this.setState({ ime: ime });
                const prezime = res.data.map(obj => obj.prezime);
                this.setState({ prezime: prezime });
                const datumRodjenja = res.data.map(obj => obj.datumRodjenja);
                this.setState({ datumRodjenja: datumRodjenja });
                const mjestoRodjenja = res.data.map(obj => obj.mjestoRodjenja);
                this.setState({ mjestoRodjenja: mjestoRodjenja });
                const index = res.data.map(obj => obj.indeks);
                this.setState({ Index: index });
                const imePrezimeOca = res.data.map(obj => obj.imePrezimeOca);
                this.setState({ imePrezimeOca: imePrezimeOca });
                const imePrezimeMajke = res.data.map(obj => obj.imePrezimeMajke);
                this.setState({ imePrezimeMajke: imePrezimeMajke });
                const drz = res.data.map(obj => obj.drzavljanstvo);
                this.setState({ Drzavljanstvo: drz });
                const help = res.data.map(obj => obj.fotografija);
                this.setState({ fotka: help });
            })
            .catch(err => {
                console.log(err);
                console.log("catch licni");
            });
    }
    componentDidMount() {
        if (window.localStorage.getItem("id") != null) {
            var ajax = new XMLHttpRequest();
            ajax.onreadystatechange = () => {
                if (this.readyState == 4 && this.status == 200) {
                    //radi sta hoces
                    this.handleGet();
                }
                else {
                    //vrati na login
                    this.props.history.push("/Romeo");
                }
            }
            ajax.open("GET", "https://si2019romeo.herokuapp.com/users/validate/data?username=" + this.state.username, true);
            ajax.setRequestHeader("Authorization", this.state.token);
            ajax.send();
        }
        else this.handleGet();
    }
    render() {
        return (
            <>
                <div className="container-fluid" style={{ marginTop: "30px" }}>
                    <h2 style={{ marginBottom: "30px" }}>Profil</h2>
                    <div className="card align-items-center">
                        <div className="card-body" style={{ minWidth: "100%" }}>
                            <div className="row justify-content-lg-around justify-content-md-start">
                                <div className="col-lg-3 col-sm-12 col-md-6 justify-content-sm-center ">
                                    <h4 className="card-title">Lični podaci</h4>
                                    <div style={{ textAlign: "left" }}>
                                        <div className="form-group">
                                            <label className="col-form-label">Ime i Prezime</label>
                                            <br></br>
                                            <h4>{this.state.ime} {this.state.prezime}</h4>
                                            <label className="col-form-label">Mjesto rodjenja</label>
                                            <br></br>
                                            <h4>{this.state.mjestoRodjenja}</h4>
                                            <label className="col-form-label" htmlFor="inputDefault">Drzavljanstvo</label>
                                            <br></br>
                                            <h4>{this.state.Drzavljanstvo}</h4>
                                            <label className="col-form-label" htmlFor="inputDefault">Index</label>
                                            <h4>{this.state.Index}</h4>
                                            <label className="col-form-label" htmlFor="inputDefault">Ime i prezime oca</label>
                                            <h4>{this.state.imePrezimeOca}</h4>
                                            <label className="col-form-label" htmlFor="inputDefault">Ime i prezime majke</label>
                                            <h4>{this.state.imePrezimeMajke}</h4>
                                        </div>
                                        <button type="button" className="btn btn-link" id="editBtn" onClick={() => this.setState({ modalShow: true })}>Uredi</button>
                                    </div>
                                </div>
                                <div className="col-auto justify-content-center">
                                    <div style={{ display: "inline-block" }}>
                                        <img className="rounded-circle" style={{ height: "350px", width: "350px", display: "block" }} src={this.state.fotka} />
                                    </div>

                                </div>
                                <div className="col-lg-3 col-sm-12 col-md-6 justify-content-sm-center">
                                    <div style={{ textAlign: "left" }}>
                                        <Kontakt />
                                    </div>
                                    <Stranice />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalComponent
                    saveState={this.saveState}
                    show={this.state.modalShow}
                    naslovModala="Lični Podaci"
                    podaciKorisnika={this.state}
                    btnPotvrdi="Spasi promjene"
                />
            </>
        );
    }
}



export default withRouter(LicniPod);
