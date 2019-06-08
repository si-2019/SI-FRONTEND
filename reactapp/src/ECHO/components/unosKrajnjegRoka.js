// Let's use moment static reference in the Datetime component.
import React, { Component } from 'react';
import Datetime from 'react-datetime';
import "./unosKrajnjegRoka.css";


class UnosKrajnjegRoka extends Component{
    render() {
        return (
            <div className="divFormaKrajnjegRoka">
                
                <form>
                <div class="card">
                    <div class="card-body">
                    <p class="card-text">Unesite krajnji rok za unos i promjenu slobodnih termina nastavnog osoblja:</p>
                <br></br>
                    <Datetime input={ false } isValidDate={ valid }   />
                    <div id="dugmeKalendar">
                    <button type="button" id="Potvrda" class="btn btn-primary">Unesi</button>
                    </div>
                </div>
                </div>
                </form>
            
            </div>
        );
    }
}
    

    var yesterday = Datetime.moment().subtract(1, 'day');
    var valid = function( current ){
    return current.isAfter( yesterday );
    }


export default UnosKrajnjegRoka;

