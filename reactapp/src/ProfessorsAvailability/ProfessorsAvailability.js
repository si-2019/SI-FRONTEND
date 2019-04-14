import React, {Component, Fragment} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import './ProfessorsAvailability.css';

var professorsList = [
    {
        name: 'Profesor 1',
        email: 'profesor1@etf.unsa.ba',
        title: 'Professor'
    },
    {
        name: 'Profesor 2',
        email: 'profesor2@etf.unsa.ba',
        title: 'Professor'
    },
    {
        name: 'Profesor 3',
        email: 'profesor3@etf.unsa.ba',
        title: 'Professor'
    },
    {
        name: 'Profesor 4',
        email: 'profesor4@etf.unsa.ba',
        title: 'Professor'
    },
    {
        name: 'Profesor 5',
        email: 'profesor5@etf.unsa.ba',
        title: 'Professor'
    },
    {
        name: 'Assistant 1',
        email: 'asistant1@etf.unsa.ba',
        title: 'Assistant'
    },
];
class ProfessorsAvailability extends Component {
    constructor(){
        super();
        this.state={
            professorsList: professorsList,
            input: ''
        }
    }
    onChangeHandler(e){
        this.setState({
            input: e.target.value,
        })
    }
    render() {
        const professors = this.state.professorsList
            .filter(prof => this.state.input === '' ||
                prof.name.toLowerCase().includes(this.state.input.toLowerCase()) ||
                prof.email.toLowerCase().includes(this.state.input.toLowerCase()) ||
                prof.title.toLowerCase().includes(this.state.input.toLowerCase()))
            .map(prof => {
            return(
                <Fragment>
                    <tr>
                        <td>{prof.name}</td>
                        <td>{prof.email}</td>
                        <td>{prof.title}</td>
                        <td><a href="#"><EditIcon/></a></td>
                    </tr>
                </Fragment>
            )
        });
        return (
            <div className="container">
                <div className="row search-teachers shadow-border">
                    <input type="text" placeholder="Search.." onChange={this.onChangeHandler.bind(this)}/>

                </div>
                <div className="row">
                    <table className="table table-bordered table-hover professors-table shadow-border">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Title</th>
                            <th></th>
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

export default ProfessorsAvailability;
