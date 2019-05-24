import React, {Component,Fragment} from 'react';

class UnosPodatakaONovomProjektu extends Component {
    formaZaUnos() {
/*ostali podaci kao sto si id projekta, id korisnika i id predmeta se dodaju automatski
 u zavisnosti od toga ko je prijavljen, i koji ste predmet odabrali, a id projekta je autoincrement*/

        return (
            <div>
                <form id="formaUnosProjekta">
                    <label>Naziv projekta: </label>
                    <input type="text" name="naziv"/>
                    <br/>
                    <label>Progress projekta: </label>
                    <input type="number" name="progress"/>
                    <br/>
                    <label>Opis projekta: </label>
                    <input type="text" name="opis"/>
                    <br/>
                    <label>Broj mogucih bodova na projektu: </label>
                    <input type="number" name="bodovi"/>
                    <br/>
                    <label>Rok prokekta: </label>
                    <input type="date" name="datum"/>
                    <br/>
                </form>
            </div>
        );
    }

    render() {
        return(
            <form id="noviProjekat">
                <label>Forma za unos podataka o novom projektu</label>
                {this.formaZaUnos()}

                <button id="potvrdaUnosa">Potvrdi unos</button>
            </form>
        );
    }
}



export default UnosPodatakaONovomProjektu;