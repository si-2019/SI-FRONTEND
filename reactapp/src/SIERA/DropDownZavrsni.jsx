import React from "react";
import axios from "axios";
import Modal from "./Modal";
class DropDownZavrsni extends React.Component {

    constructor() {
        super();
        this.state = {
            profesori: [],
            teme: [],
            studentId: 1,
            profId: 1, 
            temaId: null,
            modalShow: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeTema = this.handleChangeTema.bind(this);
    }
    componentDidMount() {
       
        axios
            .get("http://localhost:31918/profesori")
            .then(res=>{
                this.setState(
                    {
                        profesori: res.data.data,
                        profId: res.data.data[0].id
                    });
                    console.log("profesori: " + this.state.profesori);
                    console.log("profId: " + this.state.profId);
            })
            .catch(res=>{
                console.log("Doslo je do greske! " + res.data);
            });
            //teme koje se vezu za 1 mentora
        axios
            .get("http://localhost:31918/profesori/temeZavrsni/" + this.state.profId)
            .then(res=>{
                this.setState({
                    teme: res.data.data
                });
                console.log(this.state.teme);
                if(this.state.teme.length==0){
                    this.setState({
                        temaId: null
                    })
                }
                else{
                    this.setState({
                        temaId: res.data.data[0].id
                    })
                }
            })
            .catch(
                res=>{
                    console.log("nesto ne valja");
                    console.log(res.error);
                }
            );
        
    }
    handleChangeTema(selectedId){
       
       axios
            .get("http://localhost:31918/profesori/temeZavrsni/" + selectedId)
            .then(res=>{
                this.setState({
                    teme: res.data.data,
                    profId: selectedId
                });
                if(this.state.teme.length==0){
                    this.setState({
                        temaId: null
                    })
                }
                else{
                    this.setState({
                        temaId: res.data.data[0].id
                    })
                }
            })
            .catch(
                res=>{
                    console.log("nesto ne valja");
                    console.log(res.error);
                }
            );
    }
    handleClick(){
        let modalClose = () => {
            this.setState({ modalShow: false });
            
            window.location.reload();
        }
        if(this.state.temaId == null){
            //ispisi gresku
            console.log("greska!");
        }
        else if(this.state.temaId!=null){
            return(
                <Modal 
                    show={this.state.modalShow}
                    onHide={modalClose}
                    naslovModala="haj!" />
            );
        }
        else return "";
    }
    render() {
        
        return (

            <div class="row" style={{ margin: "0px"}}>
                <div class="col"></div>
                <div class="col" style={{ textAlign: "center",  minWidth:"400px" }}>
                    <div class="card" style={{ display: "inline-block" }}>
                        <div class="card-body">
                            <h3 class="card-title">Završni rad</h3>
                            <h6 class="card-subtitle mb-2 text-muted">Ovdje možete vidjeti sve profesore koje možete odabrati za svog mentora, kao i teme koje nude.</h6>
                            <div style={{ textAlign: "left" }}>
                                <label class="col-form-label col-form-label-lg" for="inputLarge">Mentori</label>
                            </div>

                            <select class="custom-select" onChange={event=>{this.handleChangeTema(event.target.value)}}>
                                {this.state.profesori.map(
                                    (prof)=>
                                        <option key={prof.id} value={prof.id}>{prof.ime} {prof.prezime}</option>
                                )}
                            </select>
                            <div style={{ textAlign: "left" }}>
                                <label class="col-form-label col-form-label-lg" for="inputLarge">Teme</label>
                            </div>
                            <select class="custom-select" >
                                {this.state.teme.map(
                                    (teme)=>
                                        <option key={teme.id} value={teme.id}>{teme.naziv}</option>
                                )}
                            </select>
                            <div style={{ visibility: "hidden" }}>dssffds</div>
                            
                            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.handleClick}>Prijavi završni</button>

                        </div>
                    </div>
                </div>
                <div class="col"></div>
            </div>

        );
    }
}

export default DropDownZavrsni;
