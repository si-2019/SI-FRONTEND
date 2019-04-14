import React, {Component, Fragment} from 'react';

var professorsList = ['Profesor 1', 'Profesor 2', 'Profesor 3', 'Profesor 4', 'Profesor 5'];
class ProfessorsAvailabiliy extends Component {
    render() {
        const professors = professorsList.map(prof => {
            return(
                <Fragment>
                    <tr>
                        <td className="col-11">{prof}</td>
                        <td className="col-1"><i className="material-icons">edit</i></td>
                    </tr>
                </Fragment>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    <table className="table table-bordered professors-table">
                        <thead>
                        <tr>
                            <th className="col-11">Name</th>
                            <th className="col-1"></th>
                        </tr>
                        </thead>
                        <tbody>
                            {professors}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProfessorsAvailabiliy;
