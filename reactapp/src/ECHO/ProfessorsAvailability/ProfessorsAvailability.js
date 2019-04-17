import React, {Component, Fragment} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import './ProfessorsAvailability.css';

class ProfessorsAvailability extends Component {
    constructor(){
        super();
        this.state={
            professorsList: professorsList,
            page: 1,
            input: '',
        }
    }
    onChangeHandler(e){
        this.setState({
            input: e.target.value,
        });
        this.getTeachingStaffPagination();
    }

    getTeachingStaffPagination() {
        fetch("http://localhost:8080/si2019/echo/getTeachingStaff", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:{
                'page': this.state.input,
                'size': 10,
                'search': this.state.input,
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        professorsList: result,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
     var professors = this.state.professorsList
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
