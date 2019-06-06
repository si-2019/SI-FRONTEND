import React from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Potvrda from "../helpers/Potvrda.js";

class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            greska: null,
            brojac: 0,
            naziv: "",
            tekst: "",
            noviInput: {
                naziv:null,
                tekst:null
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const {name, value} = event.target;
        let state = JSON.parse(JSON.stringify(this.state.noviInput));
        state[name] = value;
        this.setState({
            noviInput: state
        });
    }
    handleClose = () => {
        this.props.saveState("modalShow", false);
    }
    handleExit = () => {
        const {Naziv, Tekst} = this.state.noviInput;
        let podaci = JSON.parse(JSON.stringify(this.props.novFAQ));

            this.props.saveState("noviFAQ", podaci);
        
    }
    handleSubmit(event) {
        event.preventDefault();
        //ukoliko neki rezultira greskom, postavite greska na true
        const { naziv, tekst } = this.state;
        axios.post('http://localhost:31902/frequentIssue/add', null, { params: { naziv, tekst } })
            .then(result => {
                if(result.data==="Uspjesan upis!")
                {this.setState({ greska: false, naziv:"",tekst:" " });}
            })
            .catch(err => {
                console.log(err);
                this.setState({ greska: true });
            });

    }
   
      
    
    renderujPotvrdu() {
        if (this.state.greska == false) {
            return (
                <Potvrda
                    key={this.brojac}
                    successful="true"
                    msg="Uspjesno ste objavili rjesenje issue-a"
                />
            );
        } 
     else if(this.state.greska){
        return(
            <Potvrda
                key={this.brojac}
                successful="false"
                //VEDAD ->PRVI SPRINT
                msg="Vaš objava nije uspjela! Pokusajte ponovo!"
            />
        );
    }
    return null;
}

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={this.handleExit}
            > {this.renderujPotvrdu()}

                <Modal.Header closeButton>

                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.naslovModala}
                    </Modal.Title>

                </Modal.Header>

                <form onSubmit={this.handleSubmit}>
                    <Modal.Body>

                        <div className="form-group">
                            <>
                                <label className="col-form-label" for="inputDefault" >Issue:</label>
                                <input type="text"
                                    className="form-control"
                                    name="naziv"
                                    value={this.state.naziv}
                                    onChange={this.handleChange}
                                    placeholder="Naslov issue-a"
                                />
                                <label className="col-form-label" for="inputDefault" >Odgovor:</label>
                                <textarea
                                    className="form-control"
                                    name="tekst"
                                    value={this.state.tekst}
                                    onChange={this.handleChange}
                                    rows="10"
                                    placeholder="Odgovor na issue"></textarea>
                               
                                </>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                       <button type="submit"
                            id="spasiBtn"
                            class="btn btn-primary"
                            disabled={!this.state.tekst || !this.state.naziv}
                        >{this.props.btnPotvrdi}
                        </button>

                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}
export default ModalComponent;
