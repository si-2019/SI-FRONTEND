import React from 'react'
import { Button } from '@material-ui/core';
import axios from 'axios';
import Modal from 'react-responsive-modal'; //paket za gotove modale odnosno popup-e
import FormaNewFAQ from '../SS/FormaNewFAQ.js'



class FAQ extends React.Component {
    constructor() {
        super();
        this.state = {
            issues: [

            ],
            id: 4,
            open: false
        }
        this.onOpenModal = this.onOpenModal.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)
    }

    //Funkcija kojom se otvara forma
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    isClickedX = () => {
        this.setState({
            open: false
        })
    }

    //Funkcija kojom se zatvara forma (ovo se moze iskoristiti npr da se forma zatvori kad se klikne
    //na bilo sta izvan forme, ali mi to necemo jer nam treba da se zatvara samo na X, pa je funk prazna
    onCloseModal = () => {
    };

    onCloseModal2 = (open) => {
        this.setState({
            open: false,
            id: 1
        })
    }

    onChangeActiveId = (id) => {
        this.setState({
            activeContentId: id,
        })
    }

    componentDidMount() {
        axios.get('http://localhost:31902/frequentIssue/get').then(res => {


            this.setState({ issues: res.data, loading: true });
        })
        .catch(function (error) {
            console.log("error");
          })
    }



    render() {
        let issues = this.state.issues;
        const { open } = this.state;
        return (
            <div>


                <div className="row align-items-start">
                    <div className="col-sm-10"><h4 >Frequently asked questions</h4></div>
                    <div className="col-sm-2">
                        <button
                            id="buttonObjavi"
                            type="submit"
                            className="btn btn-success btn-lg"
                            onClick={this.onOpenModal}
                        >Istakni novi issue
                        </button>
                    </div>
                </div>
                <hr className="my-4"></hr>
                {issues.map((issue) =>
                    <div className="card border-dark mb-3"  >

                        <div className="card-header" >
                            <div className="row align-items-start">
                                <h5> Naslov: {issue.naziv}</h5>
                            </div>
                        </div>
                        <div className="card-body"  >
                            <div className="row align-items-start">
                                <p> Odgovor: {issue.tekst}</p>
                            </div>
                        </div>

                    </div>


                )}
                <Modal
                    open={open}
                    close={this.onCloseModal}
                    center id="modal" >
                    <div id="overlay">
                        <FormaNewFAQ triggerOnCloseModal2={this.onCloseModal2} />
                    </div>
                </Modal>

            </div>






        );
    }
}
export default FAQ