
import React, { Component } from 'react';
import axios from 'axios';
import "./bootstrap.min.css"
import Fotografija from "./fotografija.jsx"
class LicniPod extends Component {
    state = {
        ime: "DamirMasina",
        prezime: "Nekic",
        datumRodjenja: "30.07.1997",
        mjestoRodjenja: "Sarajevo",
        Index: "17807",
        imePrezimeOca: "Nekila",
        imePrezimeMajke: "Nekic",
        Drzavljanstvo: "Bih",
        StudentID: 1
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

    render() {
        return (
            <div className="card mb-3" style={{minWidth: "300px"}}>
                <h3 className="card-header">Student</h3>
                <div className="card-body">
                    <h5 className="card-title">{this.state.ime} {this.state.prezime}</h5>
                    <h6 className="card-subtitle text-muted"></h6>
                </div>
                <Fotografija/>
                <ul class="list-group list-group-flush">
                    <li class="card-header">Lični Podaci</li>
                    <li class="list-group-item">Datum i mjesto rođenja: {this.state.mjestoRodjenja} </li>
                    <li class="list-group-item">Index: {this.state.Index}</li>
                    <li class="list-group-item">Ime i prezime oca: {this.state.imePrezimeOca}</li>
                    <li class="list-group-item">Ime i prezime majke: {this.state.imePrezimeMajke}</li>
                    <li class="list-group-item">Državljanstvo: {this.state.Drzavljanstvo}</li>
                </ul>
                <ul class="list-group list-group-flush">
                    <li class="card-header">Kontakt Podaci</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
                <ul class="list-group list-group-flush">
                    <li class="card-header">Web Stranice</li>
                    <li>
                        <div class="card-body">
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </li>
                </ul>

                <div class="card-footer text-muted">
                    2 days ago
  </div>
            </div>
        );
    }
}


export default LicniPod;
