import React, { Component } from 'react';


class predmetiKojeTrenutnoSlusa extends Component{
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item active"><h4 className="font-weight-bold" >Trenutni predmeti</h4></li>
                    <li className="list-group-item"><a href="#">Dizajn i arhitektura softverskih sistema</a></li>
                    <li className="list-group-item"><a href="#">Projektovanje informacionih sistema</a></li>
                    <li className="list-group-item"><a href="#">Softver inženjering</a></li>
                    <li className="list-group-item"><a href="#">Vještačka inteligencija</a></li>
                </ul>
            </div>
        );
    }    
}

export default predmetiKojeTrenutnoSlusa;