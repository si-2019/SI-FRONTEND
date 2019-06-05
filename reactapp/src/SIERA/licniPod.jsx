import React, { Component } from 'react';
import axios from 'axios';
import "./bootstrap.min.css"
import Fotografija from "./fotografija.jsx"
import ModalComponent from "./Modal"
import Kontakt from "./kontaktPod"
import Stranice from "./stranice";

class LicniPod extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            ime: "DamirMasina",
            prezime: "Nekic",
            datumRodjenja: "30.07.1997",
            mjestoRodjenja: "Sarajevo",
            Index: "17807",
            imePrezimeOca: "Nekila",
            imePrezimeMajke: "Nekic",
            Drzavljanstvo: "Bih",
            StudentID: 1,
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
                console.log(state);
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

    componentDidMount() {
        axios
            .get(
                `http://localhost:31918/studenti/` +
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
            });
    }



    render() {

        return (
            <>
                <div class="card">

                    <div className="card-body">
                        <h1 class="card-title">{this.state.ime} {this.state.prezime}</h1>
                        <div class="row">
                            <div className="d-flex justify-content-start" style={{ width: "40%", textAlign: "left", flexDirection: "column" }}>
                                <div className="d-flex align-items-start" style={{ flexDirection: "column" }}>
                                    <div className="form-group">
                                        <label class="col-form-label" for="inputDefault">Mjesto rodjenja</label>
                                        <br></br>
                                        <h4>{this.state.mjestoRodjenja}</h4>
                                    </div>
                                    <div className="form-group">
                                        <label class="col-form-label" for="inputDefault">Drzavljanstvo</label>
                                        <br></br>
                                        <h4>{this.state.Drzavljanstvo}</h4>
                                    </div>
                                    <div className="form-group">
                                        <label class="col-form-label" for="inputDefault">Index</label>
                                        <h4>{this.state.Index}</h4>

                                    </div>
                                    <div className="form-group">
                                        <label class="col-form-label" for="inputDefault">Ime i prezime oca</label>
                                        <h4>{this.state.imePrezimeOca}</h4>
                                    </div>
                                    <div className="form-group">
                                        <label class="col-form-label" for="inputDefault">Ime i prezime majke</label>
                                        <h4>{this.state.imePrezimeMajke}</h4>
                                    </div>
                                    <button type="button" class="btn btn-link" id="editBtn" onClick={() => this.setState({ modalShow: true })}>Edit</button>
                                    <Kontakt />
                                </div>
                            </div>
                            <div class="d-flex justify-content-end" >
                                <div class="d-flex align-items-center" style={{flexDirection:"column"}}>
                                <Fotografija fotografija={this.state.fotka} />

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



export default LicniPod;
