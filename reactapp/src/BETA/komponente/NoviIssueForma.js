import React from 'react';
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

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { issueTitle, issueText } = this.state;

        axios.post('/issue/send', { issueTitle, issueText})
        .then((result) => {
            alert("Uspjesno upisan issue"); //Ovdje treba pokupiti odgovor od backend-a, ali ne znam kako !!!!!
        });
    };

    onChangeIssueText = (object) => {
        this.setState({issueText: object.target.value})
    };

    onChangeTitleInCategoryComponent = (title) => {
        this.setState({
            issueTitle: title
        })
    };
    
    render() {
        return (

            <div>

                <form id = "formNoviIssue"
                      onSubmit={() => {}}
                >

                    <div id=" naslovDiv">

                        <label 
                            id="naslov"
                            style={{
                            marginLeft: '12px', 
                            marginTop: '16px'
                            }}
                        >Title:
                        </label>

                        <CategoryComponent triggerGetTitleFromCategoryComponent = {this.onChangeTitleInCategoryComponent}
                        />

                        <button
                            type="button"
                            className = "close"
                            id = "closeIssueForm"
                            onClick={this.props.onCloseModal}
                        >X</button>

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

                        <div className="custom-file col-8">
                            <input 
                                type="file" 
                                className="form-control-file class1" 
                                id="exampleInputFile"
                                aria-describedby="fileHelp"
                            />
                        </div>

                        <button 
                            id = "buttonDraft"
                            className="btn btn-primary class1"
                        >Save as draft
                        </button>

                        <button
                            id = "buttonSend"
                            type="submit"
                            className="btn btn-primary class1"
                            disabled={!this.state.issueText}
                            onClick={this.onSubmit}
                        >Send issue
                        </button>
                        
                    </div>
                </form>

            </div>
        
        );
    }
}

export default NoviIssueForma;



