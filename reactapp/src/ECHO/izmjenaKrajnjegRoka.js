// Let's use moment static reference in the Datetime component.
import React, { Component } from 'react';
import Datetime from 'react-datetime';
import "./izmjenaKrajnjegRoka.css";


class IzmjenaKrajnjegRoka extends Component{
    render() {
        return (
            <div className="divFormaIzmjenaKrajnjegRoka">
                <form>
                <label>Izmijenite trenutni krajnji rok za unos i promjenu slobodnih termina za nastavno osoblje:</label>
                <br></br>

                <div id="KalendarZaUnos">
                <Datetime input={ false } isValidDate={ valid }   />
                </div>
                <button id="Potvrda">Unesi</button>
                </form>
            
            </div>
        );
    }
}
    

    var yesterday = Datetime.moment().subtract(1, 'day');
    var valid = function( current ){
        return current.isAfter( yesterday );
    }


export default IzmjenaKrajnjegRoka;

