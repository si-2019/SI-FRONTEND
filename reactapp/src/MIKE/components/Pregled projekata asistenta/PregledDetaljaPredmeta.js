import React, {Component, Form} from 'react';
import { Fragment } from 'react';

class PregledDetaljaPredmeta extends Component {
    constructor() {
        super();
        let predmeti=["PIS", "OOAD", "SI"];
        let odabran_predmet=null;
        if (predmeti.length>0) odabran_predmet=predmeti[0];

        this.state = {
            predmeti:predmeti,
            odabran_predmet:odabran_predmet
        };

        this.detaljiPredmeta = this.detaljiPredmeta.bind(this);
    }

    detaljiPredmeta() {
        return (
            this.state.odabran_predmet!=null ?
            <form id="detalji">
                <label>Id predmeta: {this.state.odabran_predmet.id}</label>
                <br/>
                <label>Id asistenta: {this.state.odabran_predmet.idAsistent}</label>
                <br/>
                <label>Id profesora: {this.state.odabran_predmet.idProfesor}</label>
                <br/>
                <label>Naziv predmeta: {this.state.odabran_predmet.naziv}</label>
                <br/>
                <label>ECTS: {this.state.odabran_predmet.ects}</label>
                <br/>
                <label>Ukupan broj predavanja na predmetu: {this.state.odabran_predmet.brojPredavanja}</label>
                <br/>
                <label>Ukupan broj vjezbi na predmetu: {this.state.odabran_predmet.brojVjezbi}</label>
                <br/>
                <label>Opis predmeta: {this.state.odabran_predmet.opis}</label>
                <br/>
            </form> : null
        );
    }

    prebaciNaDrugi(a) {
        this.setState({ odabran_predmet: a.target.value });
    }


    render() {
        return(
            
            <form id="predmeti">
                {/*<label>Svi predmeti na kojim ste asistent </label>
                <br/>
                <select type="select" id="listaPredmeta" onChange={this.prebaciNaDrugi.bind(this)} value={this.state.odabran_predmet}>
                    
                    {this.state.predmeti.map((predmet) => {
                        return (<option key={predmet.id} value={predmet.id}>{predmet.naziv}</option>)
                        })
                    }
                </select>
                */}
                <br/>
                <label>Detalji odabranog predmeta</label>
                {this.detaljiPredmeta()}
            </form>
            
        );
    }

}

export default PregledDetaljaPredmeta;