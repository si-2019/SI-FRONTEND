
import React, { Component } from 'react';
import axios from 'axios';
import "./bootstrap.min.css"
import Fotografija from "./fotografija.jsx"
import ModalComponent from "./Modal"

class LicniPod extends Component {
    constructor() {
        super();
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
            modalShow: false,
            noviInput: ""
        }
        
        this.handlePutRequest = this.handlePutRequest.bind(this);
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
            });
        
    }

    handlePutRequest(event) {
        /*
        console.log("lalalal");
        event.preventDefault();
       // console.log(event.target.elements.[name].value) 
       const novoIme = event.currentTarget.ime.value;
        axios.put(
            "http://localhost:31918/studenti/update/imeprezime/" + this.state.studentID,
            {
                "ime":novoIme,
                "prezime":event.target.prezime.value
            }
        ).then(res=>{
            console.log(res.msg + ", " + res.success)
        });
        */
    }
    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <>
                <div className="card mb-3" style={{ minWidth: "300px", maxWidth: "500px" }}>
                    <h3 className="card-header">Student</h3>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.ime} {this.state.prezime}</h5>
                        <h6 className="card-subtitle text-muted"></h6>
                    </div>
                    <Fotografija />
                    <ul class="list-group list-group-flush" style={{ width: "100%", display: "inline-block" }}>
                        <li class="card-header">
                            Lični Podaci
                            <button type="button" class="btn btn-link" onClick={() => this.setState({ modalShow: true })} >Edit</button>
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
                        <form>
                            <label class="col-form-label" for="inputDefault" >Ime</label>
                            <input type="text" class="form-control" name="ime" />
                            <label class="col-form-label" for="inputDefault" >Prezime</label>
                            <input type="text" class="form-control" name="prezime" />
                            <label class="col-form-label" for="inputDefault">Ime I Prezime Oca</label>
                            <input type="text" class="form-control" name="imePrezimeOtac" />
                            <label class="col-form-label" for="inputDefault">Ime I Prezime Majke</label>
                            <input type="text" class="form-control" name="imePrezimeMajka" />
                            <label class="col-form-label" for="inputDefault">Državljanstvo</label>
                            <input type="text" class="form-control" name="drzavljanstvo" />
                            <label class="col-form-label" for="inputDefault">Datum I Mjesto Rođenja</label>
                            <input type="text" class="form-control" name="dat" />
                            <label class="col-form-label" for="inputDefault">Index</label>
                            <input type="text" class="form-control" name="index" />
                            </form>
                    }
                    handlePutRequest = {this.handlePutRequest}
                />
            </>
        );
    }
}


export default LicniPod;
