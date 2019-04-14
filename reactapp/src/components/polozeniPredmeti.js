import React, { Component } from 'react';


class polozeniPredmeti extends Component{

    
    render() {
        return (
            <div>
            <ul className="list-group">
                <li className="list-group-item active"><h4 className="font-weight-bold" >Polozeni predmeti</h4></li>
                <li className="list-group-item"><a href="#">Logicki dizajn</a></li>
                <li className="list-group-item"><a href="#">Racunarske arhitekture</a></li>
                <li className="list-group-item"><a href="#">Osnove racunarstva</a></li>
                <li className="list-group-item"><a href="#">Tehnike pogramiranja</a></li>
                <li className="list-group-item"><a href="#">Osnove elektrotehnike</a></li>
            </ul>
            </div>
        );
    }    
}

export default polozeniPredmeti;
