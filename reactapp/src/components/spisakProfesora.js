import React, { Component } from 'react';


class spisakProfesora extends Component{
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item active"><h4 className="font-weight-bold" >Profesori</h4></li>
                    <li className="list-group-item">Sasa Mrdovic</li>
                    <li className="list-group-item">Zikrija</li>
                    <li className="list-group-item">Novica Nosovic</li>
                    <li className="list-group-item">Almir Karabegovic</li>
                </ul>
            </div>
        );
    }    
}

export default spisakProfesora;
