import React, { Component } from 'react';
import axios from 'axios';
import "./bootstrap.min.css"
import Fotografija from "./fotografija.jsx"
import ModalComponent from "./Modal"
import { async } from 'q';



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
        switch(type) {
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
                <div className="container-fluid">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">{this.state.ime} {this.state.prezime}</h4>
                            <Fotografija fotografija={this.state.fotka} />
                            <h6 class="card-subtitle mb-2 text-muted">Student</h6>

                            <input type="text" class="form-control" placeholder="Default input" id="inputDefault"></input>
                            
                        </div>
                    </div>
                    <div className="card mb-3" style={{ minWidth: "300px", maxWidth: "500px" }}>
                        
                        <ul class="list-group list-group-flush" style={{ width: "100%", display: "inline-block" }}>
                            <li class="card-header">
                                Lični Podaci
                            <button type="button" class="btn btn-link" id="editBtn" onClick={() => this.setState({ modalShow: true })} >Edit</button>
                            </li>
                            <li class="list-group-item" >
                                <div><span class="badge badge-info">Datum i mjesto rođenja</span></div>
                                {this.state.mjestoRodjenja}
                            </li>
                            <li class="list-group-item">
                                <div><span class="badge badge-info" >Index</span></div>
                                {this.state.Index}
                            </li>
                            <li class="list-group-item">
                                <div><span class="badge badge-info" >Ime i prezime oca</span></div> {this.state.imePrezimeOca}</li>
                            <li class="list-group-item"><div><span class="badge badge-info" >Ime i prezime majke</span></div> {this.state.imePrezimeMajke}</li>
                            <li class="list-group-item"><div><span class="badge badge-info">Državljanstvo</span></div> {this.state.Drzavljanstvo}</li>
                        </ul>
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
