import React from 'react'
import { Button } from '@material-ui/core';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import ModalComponent from './NewFAQModal.js';

class FAQ extends React.Component {
    constructor() {
        super();
        this.state = {
            issues: [ ],
            id: 4,
            modalShow: false,
            isLoading: true,
            naziv:"",
            tekst:""
        }
        
    }

    modalClose = () => {
        this.setState({ modalShow: false });
       this.forceUpdate();
    }

    onChangeActiveId = (id) => {
        this.setState({
            activeContentId: id,
        })
    }

    componentDidMount() {
        this.setState({isLoading: true});
        axios.get('http://localhost:31902/frequentIssue/get').then(res => {
            if (!(typeof res.data === 'string' || res.data instanceof String)){
                this.setState({ issues:res.data, isLoading: false });}
                 /* if(res.data !== "Greška prilikom citanja iz baze!"){
                    this.setState({ issues:res.data, loading: true });
                 }else{alert(res.data);}*/
                });
    }
    
    saveState = (type, state) => {
        switch (type) {
            case "modalShow":
                this.setState({
                    modalShow: state
                });
                break;
            case "noviFAQ":
                console.log(state);
                this.setState(state, () => {
                    this.setState({
                        modalShow: false
                    });
                });
                break;
            default:
                break;
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Spinner animation='border' role='status'>
                    <span className="sr-only">Loading...</span>
                </Spinner>
            );
        }
      
        let issues = this.state.issues;
       
        return (
            <div className="col-12" >


                <br></br>
                
                 <h4 >Frequently asked questions</h4>
                    
                    
                <div className="faq-issue">
                {issues.map((issue) =>
                <div class="card">
                   <div class="card-body">
                   <div className="row align-items-start">
                    <h5 className="card-title"> Naslov: {issue.naziv}</h5>
                    </div>
                    <div className="row align-items-start">
                    <p className="card-text">Odgovor: {issue.tekst}</p>
                    </div> 
                    </div>
                    </div>
                        

                   


                )}
                
                 </div>
                 <br></br>
                 
                 <button
                            id="buttonObjavi"
                            type="submit"
                            className="btn btn-primary float-right btn-lg "
                            onClick={() => this.setState({ modalShow: true })}
                        >Istakni novi issue
                        </button>
              

                 <ModalComponent
                    
                    show={this.state.modalShow}
                    naslovModala="Objavi rjesenje novog issue-a"
                    btnPotvrdi="Objavi issue"
                    saveState={this.saveState}
                    noviFAQ={this.state}

                />
            </div>






        );
    }
}
export default FAQ