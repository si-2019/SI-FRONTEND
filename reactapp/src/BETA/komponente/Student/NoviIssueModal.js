import React from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Potvrda from "../helpers/Potvrda.js";
import CategoryComponent from './CategoryComponent.js';

class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            greska: null,
            brojac: 0,
            issueText: "",
            issueTitle: "asdadas", //Postavili smo vrijednost da na pocetku budu selektovani Indeksi
            allowedFiles: ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "application/x-zip-compressed", "application/vnd.ms-excel", "text/plain", "image/png", "image/jpg", "image/jpeg"],
            fileWrong: false,
            fileTooBig: false,
            procitaoStudent: 1,
            procitalaSS: 0,
            draft:false,

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
    }

    onChangeTitleInCategoryComponent = (title) => {
        this.setState({
            issueTitle: title
        })
    };
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        //ukoliko neki rezultira greskom, postavite greska na true
        const { issueTitle, issueText } = this.state;

        axios.post('http://localhost:31902/issue/send/s?issueTitle='+issueTitle+'&issueText='+issueText)
            .then(result => {
                if (result.data === "Uspjesan upis!") { { this.setState({ greska: false, issueTitle: "", issueText: " ", draft:false }); } }
                else{
                    { this.setState({ greska: true})}
                    alert(JSON.stringify(result.data));
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({ greska: true });
            });

    }

    saveAsDraft = () => {
            
        const {issueTitle, issueText, procitaoStudent, procitalaSS} = this.state;

            axios.post('http://localhost:31902/issues/draft/add', { issueTitle, issueText, procitaoStudent, procitalaSS})
            .then((result) => {if (result.data === "Successfully saved issue as draft!") { { this.setState({ greska: false,draft: true }); } }
            else{
                { this.setState({ greska: true})}
                alert(JSON.stringify(result.data));
            }
        })
        .catch(err => {
            console.log(err);
            this.setState({ greska: true });
        });
     }

     fileChangedHandler = (event) => {
        if(event.target.files[0] == null){
            this.setState({fileTooBig : false});
            this.setState({fileWrong : false});
        }
        else{
            if(event.target.files[0].size/1024/1024 > 25){
                this.setState({fileTooBig : true});
                //OVDJE TREBA JOS PRIKAZATI ALERT
                 
            }
            else{
                this.setState({fileTooBig : false});
            }
            
            this.setState({fileWrong : true});
            for(var i=0;i<this.state.allowedFiles.length;i++)
                if(event.target.files[0].type == this.state.allowedFiles[i]){
                    this.setState({fileWrong : false});
                    break;
                }
        }
        //let file_name = event.target.files[0].name;
        };

    renderujPotvrdu() {
        if(this.state.fileTooBig){
            return(
            <Potvrda
                    key={this.brojac}
                    successful="false"
                    msg="Ne možete poslati fajl veći od 25 MB"
                />
            );
        }
        else if(this.state.fileWrong){
            return(
            <Potvrda
                    key={this.brojac}
                    successful="false"
                    msg="Ne možete poslati fajl ovog tipa"
                />
            );
        }
        else if (this.state.greska == false && this.state.draft == false) {
            return (
                <Potvrda
                    key={this.brojac}
                    successful="true"
                    msg="Uspjesno ste poslali issue"
                />
            );
        }
        else if(this.state.greska == false && this.state.draft == true){
            return (
                <Potvrda
                    key={this.brojac}
                    successful="true"
                    msg="Uspjesno ste sacuvali issue kao draft!"
                />
            );
        }
        else if (this.state.greska) {
            return (
                <Potvrda
                    key={this.brojac}
                    successful="false"
                    msg="Vaš issue nije poslan! Pokušajte ponovo!"
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
                                <label className="col-form-label" for="inputDefault" >Title:</label>
                                <div className="col-form-label">
                                    <CategoryComponent triggerGetTitleFromCategoryComponent={this.onChangeTitleInCategoryComponent}
                                    />
                                </div>

                                <textarea
                                    className="form-control"
                                    name="issueText"
                                    value={this.state.issueText}
                                    onChange={this.handleChange}
                                    rows="10">

                                </textarea>


                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="exampleInputFile"
                                    aria-describedby="fileHelp"
                                    onChange={this.fileChangedHandler}
                                />
                               

                            </>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.saveAsDraft}
                            disabled={!this.state.issueText || this.state.fileTooBig || this.state.fileWrong}
                        >Save as draft
                        </button>

                        <button type="submit"
                            id="spasiBtn"
                            className="btn btn-primary"
                            disabled={!this.state.issueText || this.state.fileTooBig || this.state.fileWrong}

                        >{this.props.btnPotvrdi}
                        </button>


                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}
export default ModalComponent;
