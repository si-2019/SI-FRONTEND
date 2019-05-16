import React, { Component } from 'react';
import axios from 'axios';
import "./bootstrap.min.css"
import Fotografija from "./fotografija.jsx"
import ModalComponent from "./Modal"



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
            noviInput: {
                ime: null,
                prezime: null,
                drz: null,
                promjenaIme: null,
                promjenaDrz: null,
                promjenaFoto: null,
                foto: null
            }
        }
    }
   
    componentDidMount() {
        axios
            .get(
                `http://localhost:31918/studenti/` +
                this.state.StudentID
            )
            .then(res => {
                console.log("ev me u getu");
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
        let modalClose = () => {
            this.setState({ modalShow: false });
            
            window.location.reload();
        }

        return (
            <>
                <div className="card mb-3" style={{ minWidth: "300px", maxWidth: "500px" }}>
                    <h3 className="card-header">Student</h3>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.ime} {this.state.prezime}</h5>
                        <h6 className="card-subtitle text-muted"></h6>
                    </div>
                    <Fotografija fotografija={this.state.fotka} />
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
                <ModalComponent
                    show={this.state.modalShow}
                    onHide={modalClose}
                    naslovModala="Lični Podaci"
                    tijeloModala={
                        <>
                             <label class="col-form-label" for="inputDefault" >Nova fotografija</label>
                            <br></br>
                            <input type="file" class="form-control-file" name="foto" aria-describedby="fileHelp"
                                onChange={
                                    (event) => {
                                        this.setState(
                                            {
                                                noviInput:
                                                {
                                                    ime: this.state.noviInput.ime,
                                                    prezime: this.state.noviInput.prezime,
                                                    promjenaIme: this.state.noviInput.promjenaIme,
                                                    promjenaDrz: this.state.noviInput.promjenaDrz,
                                                    drz: this.state.noviInput.drz,
                                                    foto: event.target.files[0],
                                                    promjenaFoto: true
                                                }
                                            }

                                        );
                                    }}
                            />
                            <br></br>
                            <label class="col-form-label" for="inputDefault" >Ime</label>
                            <input type="text" class="form-control" name="ime"
                                onChange={
                                    (event) => {
                                        this.setState({
                                            noviInput: {
                                                ime: event.target.value,
                                                prezime: this.state.noviInput.prezime,
                                                drz: this.state.noviInput.drz,
                                                promjenaDrz: this.state.noviInput.promjenaDrz,
                                                promjenaIme: true,
                                                promjenaFoto: this.state.noviInput.promjenaFoto,
                                                foto: this.state.noviInput.foto
                                            }

                                        });
                                    }
                                } />
                            <label class="col-form-label" for="inputDefault" >Prezime</label>
                            <input type="text" class="form-control" name="prezime"
                                onChange={
                                    (event) => {
                                        this.setState({
                                            noviInput: {
                                                ime: this.state.noviInput.ime,
                                                prezime: event.target.value,
                                                drz: this.state.noviInput.drz,
                                                promjenaDrz: this.state.noviInput.promjenaDrz,
                                                promjenaIme: true,
                                                promjenaFoto: this.state.noviInput.promjenaFoto,
                                                foto: this.state.noviInput.foto
                                            }

                                        });
                                    }
                                } />

                            <label class="col-form-label" for="inputDefault">Državljanstvo</label>
                            <input type="text" class="form-control" name="drzavljanstvo"
                                onChange={
                                    (event) => {
                                        this.setState({
                                            noviInput: {
                                                ime: this.state.noviInput.ime,
                                                prezime: this.state.noviInput.prezime,
                                                drz: event.target.value,
                                                promjenaDrz: true,
                                                promjenaIme: this.state.noviInput.promjenaIme,
                                                promjenaFoto: this.state.noviInput.promjenaFoto,
                                                foto: this.state.noviInput.foto
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



export default LicniPod;
