import React, { Component } from 'react';


class OdslusaniPredmeti extends Component{
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item active"><h4 className="font-weight-bold" >Odslušani predmeti</h4></li>
                    <li className="list-group-item">Osnove elektrotehnike</li>
                    <li className="list-group-item">Osnove računarstva</li>
                    <li className="list-group-item">Inženjerska fizika 1</li>
                </ul>
            </div>
        );
    }    
}

export default OdslusaniPredmeti;
