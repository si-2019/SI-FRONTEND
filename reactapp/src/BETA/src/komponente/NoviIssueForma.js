import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import CategoryComponent from '../komponente/CategoryComponent.js';
import axios from 'axios'

class NoviIssueForma extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            issueText: '',
            issueTitle: 'Indeksi', //Postavili smo vrijednost da na pocetku budu selektovani Indeksi
        }
    }
    
    onButtonCloseClicked = () => {
        this.props.triggerOnCloseModal2('false') 
    }
 
    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { issueTitle, issueText } = this.state;

        axios.post('/issue/send', { issueTitle, issueText})
        .then((result) => {
            alert("Uspjesno upisan issue"); //Ovdje treba pokupiti odgovor od backend-a, ali ne znam kako !!!!!
        });
    }

    onChangeIssueText = (object) => {
        this.setState({[object.target.name]: object.target.value})
    };

    onChangeTitleInCategoryComponent = (title) => {
        this.setState({
            issueTitle: title
        })
    };
    
    render() {
        return (

            <div id = "noviIssue">

                <form onSubmit={this.handleSubmit} >

                    <div className="row" style={{marginTop:'30px', marginBottom:'20px'}}>

                        <label 
                            className="col-3 col-sm-2 col-md-2 col-lg-1" 
                            style={{
                            marginLeft: '12px', 
                            marginTop: '16px'
                            }}
                        >Naslov:
                        </label>

                        <CategoryComponent triggerGetTitleFromCategoryComponent = {this.onChangeTitleInCategoryComponent}
                        />                        

                    </div>

                    <div 
                        className="form-group row col-12" 
                        style={{
                            marginTop: '5px', 
                            marginLeft: '2px'
                        }}
                    >
                        <textarea
                            className="form-control"
                            id="exampleTextarea"
                            rows="10"
                            name="issueText"
                            value={this.state.issueText}
                            onChange={this.onChangeIssueText}
                        />
                    </div>

                    <div className="form-group row col-12">

                            <div className="custom-file col-md-5 col-sm-11 col-lg-5">
                                <input 
                                    type="file" 
                                    className="form-control-file" 
                                    id="exampleInputFile"
                                    aria-describedby="fileHelp"
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-outline-primary col-md-3 col-sm-11 col-lg-3 col-11"
                                style={{marginLeft:'15px'}}
                            >Snimi kao skicu
                            </button>

                            <button
                                type="submit"
                                className="btn btn-outline-primary col-md-3 col-sm-11 col-lg-3 col-11"
                                disabled={!this.state.issueText}
                                style={{marginLeft:'15px'}}
                                onClick={this.onSubmit}
                            >Pošalji
                            </button>
                        
                    </div>
                </form>
            </div>
        
        );
    }
}

export default NoviIssueForma;



