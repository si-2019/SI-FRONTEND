import React from 'react';
import CategoryComponent from './CategoryComponent.js';
import axios from 'axios'

class NoviIssueForma extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            issueText: '',
            issueTitle: 'Indeksi', //Postavili smo vrijednost da na pocetku budu selektovani Indeksi
            fileTooBig: false
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

    fileChangedHandler = (event) => {
        if(event.target.files[0] == null){
            this.setState({fileTooBig : false});
        }
        else{
            if(event.target.files[0].size/1024/1024 > 25){
                this.setState({fileTooBig : true});
                alert("Ne možete poslati fajl veći od 25 MB");
            }
            else{
                this.setState({fileTooBig : false});
            }
        }
        //let file_name = event.target.files[0].name;
        };

    render() {
        return (

                <form id = "formNoviIssue" onSubmit={this.handleSubmit}>

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

                        <button type="button" type = "close" id = "closeIssueForm">X</button>

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
                                onChange={this.fileChangedHandler}
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
                            disabled={!this.state.issueText || this.state.fileTooBig}
                            onClick={this.onSubmit}
                        >Send issue
                        </button>
                        
                    </div>
                </form>

        
        );
    }
}

export default NoviIssueForma;



