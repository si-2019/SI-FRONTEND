import React from "react";
import { thisExpression } from "@babel/types";

class DetaljiZadatka extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

        this.popuniDetaljeZadatka=this.popuniDetaljeZadatka.bind(this);
    }
      
    render() {
        return (
            <form id="detaljiZadatka" class="container-fluid" >
                <label class="form-text"> idProjekta: {this.state.id_projekta}</label> 
                <br/>
                <label class="form-text">Opis zadatka: {this.state.opis_zadatka}</label>
                <br/>
                <label class="form-text">Datum pocetka: {this.state.datum_pocetka}</label>
                <br/>
                <label class="form-text">Datum zavrsetka: {this.state.datum_zavrsetka}</label>
                <br/>
                <label class="form-text">Zavrsen: {this.state.zavrsen}</label>
                <br/>
                <label class="form-text">Komentar asistenta: {this.state.komentar_asistenta}</label>
                <br/>
            </form>
        );
    }
    popuniDetaljeZadatka() {
        
    }
}
export default DetaljiZadatka;
