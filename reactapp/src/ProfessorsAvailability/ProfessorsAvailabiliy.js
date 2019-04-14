import React, {Component, Fragment} from 'react';
import EditIcon from '@material-ui/icons/Edit'

var professorsList = [
    {
        name: 'Profesor 1',
        email: 'profesor1@etf.unsa.ba'
    },
    {
        name: 'Profesor 2',
        email: 'profesor2@etf.unsa.ba'
    },
    {
        name: 'Profesor 3',
        email: 'profesor3@etf.unsa.ba'
    },
    {
        name: 'Profesor 4',
        email: 'profesor4@etf.unsa.ba'
    },
    {
        name: 'Profesor 5',
        email: 'profesor5@etf.unsa.ba'
    },
]
class ProfessorsAvailabiliy extends Component {
    render() {
        const professors = professorsList.map(prof => {
            return(
                <Fragment>
                    <tr>
                        <td>{prof.name}</td>
                        <td>{prof.email}</td>
                        <td><EditIcon/></td>
                    </tr>
                </Fragment>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    <table className="table table-bordered table-hover professors-table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {professors}
                        </tbody>
                    </table>
                    <div className="col-6">Bla </div>
                    <div className="col-6">Bla</div>
                </div>
            </div>
        );
    }
}

export default ProfessorsAvailabiliy;
