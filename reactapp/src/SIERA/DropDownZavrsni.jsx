import React from "react";
import axios from "axios";

class DropDownZavrsni extends React.Component {

    constructor() {
        super();
        this.state = {
            profesori: [],
            teme: [],
            studentId: 1,
            profId: 1, 
            temaId: null,
            profOpcije: [],
            temeOpcije: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
        let profe = this.state.profesori.map(prof => {return{value:prof, display:prof}});
        let teme = this.state.teme.map(teme =>{return{value:teme, display:teme}});
        this.setState({profOpcije: profe});
        this.setState({temeOpcije:teme});
    }
    handleSubmit(){
        
    }
    render() {
        return (

            <div class="row" style={{ margin: "0px" }}>
                <div class="col"></div>
                <div class="col" style={{ textAlign: "center" }}>
                    <div class="card" style={{ display: "inline-block" }}>
                        <div class="card-body">
                            <h3 class="card-title">Završni rad</h3>
                            <h6 class="card-subtitle mb-2 text-muted">Ovdje možete vidjeti sve profesore koje možete odabrati za svog mentora, kao i teme koje nude.</h6>
                            <div style={{ textAlign: "left" }}>
                                <label class="col-form-label col-form-label-lg" for="inputLarge">Mentori</label>
                            </div>

                            <select class="custom-select" required>
                                {this.state.profOpcije.map(
                                    (prof)=>
                                        <option key={prof.value} value={prof.value}>{prof.display}</option>)}
                            </select>
                            <div style={{ textAlign: "left" }}>
                                <label class="col-form-label col-form-label-lg" for="inputLarge">Teme</label>
                            </div>
                            <select class="custom-select" required>
                                {this.state.temeOpcije.map(
                                    (tema)=>
                                        <option key={tema.value} value={tema.value}>{tema.display}</option>)}
                            </select>
                            <div style={{ visibility: "hidden" }}>dssffds</div>
                            
                            <button type="submit" class="btn btn-primary btn-lg btn-block" onSubmit={this.handleSubmit}>Prijavi završni</button>

                        </div>
                    </div>
                </div>
                <div class="col"></div>
            </div>

        );
    }
}

export default DropDownZavrsni;
