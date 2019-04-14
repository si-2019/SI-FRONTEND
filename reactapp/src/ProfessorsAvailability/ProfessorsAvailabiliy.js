import React, { Component } from 'react';

var professorsList = ['Profesor 1', 'Profesor 2', 'Profesor 3', 'Profesor 4', 'Profesor 5'];
class ProfessorsAvailabiliy extends Component {
    render() {
        const professors = professorsList.map(prof => {
            return(
                <React>
                <td>{prof}</td>
                    <td><i className="material-icons">test</i></td>
                </React>
            )
        });
        return (
            <div>
                <table className="professors-table">
                    <thead>
                    <tr>
                        <th className="col-xs-11">Name</th>
                        <th className="col-xs-1"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {professors}
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProfessorsAvailabiliy;
