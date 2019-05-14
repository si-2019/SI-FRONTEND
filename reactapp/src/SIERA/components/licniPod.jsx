
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

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

            <div className="card border-info mb-3" style={{maxWidth:"20rem"}}>
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h4 className="card-title">Info card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        );
    }
}


export default LicniPod;
