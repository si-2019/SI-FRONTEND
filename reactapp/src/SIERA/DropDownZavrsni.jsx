import React from "react";
import axios from "axios";
import ModalComponent from "./Modal";
class DropDownZavrsni extends React.Component {

    constructor() {
        super();
        this.state = {
            profesori: [],
            teme: [],
            studentId: 1,
            profId: 1,
            temaId: null,
            otvori: false,
            selProf: null,
            selTema:null
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeProf = this.handleChangeProf.bind(this);
        this.handleChangeTema = this.handleChangeTema.bind(this);
        this.otvori = this.otvori.bind(this);
    }
    otvori() {
        let trenutniProf = this.state.profesori.find(x=>x.id==this.state.profId);
        
        let trenutnaTema = this.state.teme.find(x=>x.id == this.state.temaId);
       
        this.setState({
             otvori: true,
             selProf: trenutniProf.ime + " " + trenutniProf.prezime,
             selTema: trenutnaTema.naziv
            });
        
    }
    componentDidMount() {

        axios
            .get("http://localhost:31918/profesori")
            .then(res => {
                this.setState(
                    {
                        profesori: res.data.data,
                        profId: res.data.data[0].id,
                        selProf: res.data.data[0]
                    });
            })
            .catch(res => {
                console.log("Doslo je do greske! " + res.data);
            });
        //teme koje se vezu za 1 mentora
        axios
            .get("http://localhost:31918/profesori/temeZavrsni/" + this.state.profId)
            .then(res => {
                this.setState({
                    teme: res.data.data
                });
                if (this.state.teme.length == 0) {
                    this.setState({
                        temaId: null
                    })
                }
                else {
                    this.setState({
                        temaId: res.data.data[0].id
                    })
                }
            })
            .catch(
                res => {
                    console.log("nesto ne valja");
                    console.log(res.error);
                }
            );

    }
    handleChangeProf(selectedId) {

        axios
            .get("http://localhost:31918/profesori/temeZavrsni/" + selectedId)
            .then(res => {
                this.setState({
                    teme: res.data.data,
                    profId: selectedId
                    
                });
                if (this.state.teme.length == 0) {
                    this.setState({
                        temaId: null
                    })
                }
                else {
                    this.setState({
                        temaId: res.data.data[0].id
                    })
                }
            })
            .catch(
                res => {
                    console.log("nesto ne valja");
                    console.log(res.error);
                }
            );
           
    }
    handleChangeTema(selected)
    {
    }
    handleClick() {

        

        if (this.state.temaId == null) {
            //ispisi gresku
            console.log("greska!");
        }
        else if (this.state.temaId != null) {

        }
    }
    render() {
        let zatvoriModal = () => this.setState({ otvori: false });
        return (
            <>

                <div class="row" style={{ margin: "0px" }}>
                    <div class="col"></div>
                    <div class="col" style={{ textAlign: "center", minWidth: "400px" }}>
                        <div class="card" style={{ display: "inline-block" }}>
                            <div class="card-body">
                                <h3 class="card-title">Završni rad</h3>
                                <h6 class="card-subtitle mb-2 text-muted">Ovdje možete vidjeti sve profesore koje možete odabrati za svog mentora, kao i teme koje nude.</h6>
                                <div style={{ textAlign: "left" }}>
                                    <label class="col-form-label col-form-label-lg" for="inputLarge">Mentori</label>
                                </div>

                                <select class="custom-select" onChange={event => { this.handleChangeProf(event.target.value) }}>
                                    {this.state.profesori.map(
                                        (prof) =>
                                            <option key={prof.id} value={prof.id}>{prof.ime} {prof.prezime}</option>
                                            
                                    )}
                                </select>
                                <div style={{ textAlign: "left" }}>
                                    <label class="col-form-label col-form-label-lg" for="inputLarge">Teme</label>
                                </div>
                                <select class="custom-select" onChange={event =>{ this.handleChangeTema(event.target.value)}} >
                                    {this.state.teme.map(
                                        (teme) =>
                                            <option key={teme.id} value={teme.id}>{teme.naziv}</option>
                                    )}
                                </select>
                                <div style={{ visibility: "hidden" }}>dssffds</div>

                                <button type="button" class="btn btn-primary btn-lg btn-block" onClick={() => this.otvori()}>Prijavi završni</button>

                            </div>
                        </div>
                    </div>
                    <div class="col"></div>
                </div>
                <ModalComponent
                    show={this.state.otvori}
                    onHide={zatvoriModal}
                    btnPotvrdi="Potvrdi"
                    naslovModala="Prijava završnog rada"
                    nazivPromjene="Da li ste sigurni da želite prijaviti završni rad?"
                    tijeloModala={
                        <div class="form-group">
                            <label class="col-form-label" for="inputDefault">Mentor: {this.state.selProf}</label>
                            <br></br>
                            <label class="col-form-label" for="inputDefault">Tema: {this.state.selTema}</label>
                        </div>
                    }
                />
            </>
        );
    }
}

export default DropDownZavrsni;
