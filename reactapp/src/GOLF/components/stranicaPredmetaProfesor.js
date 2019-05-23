import React, { Component } from 'react'
import OPredmetuProfesor from './oPredmetuProfesor'
import LiteraturaProfesor from './literaturaProfesor'
import Sedmica from './sedmica'
import axios from 'axios'

class stranicaPredmetaProfesor extends Component {
    constructor(props){
        super(props);
        this.state = {          
          idPredmeta: props.match.params.idPredmeta,
          naziv: "",
          sedmice: [],
          file: [],
          literatura: [],
          oPredmetu: []
        };
    }    

    componentDidMount(){
        axios.get(`http://localhost:31907/r5/dajNaziv/${this.state.idPredmeta}`).then(res =>{
            axios.get(`http://localhost:31907/r1/semestar/${this.state.idPredmeta}`).then(res2 =>{
                axios.get(`http://localhost:31907/r1/sedmice/${res2.data.semestar}`).then(res3 => {
                    axios.get(`http://localhost:31907/r3/dajLiteraturu/${this.state.idPredmeta}`).then(res4 =>{
                        axios.get(`http://localhost:31907/r3/dajOPredmetu/${this.state.idPredmeta}`).then(res5 =>{
                            this.setState({
                                naziv:res.data.naziv,
                                sedmice: res3.data.sedmice,
                                literatura: res4.data.file,
                                oPredmetu: res.data.file
                            })
                        })
                    })
                })
            }) 
        })


        {/*axios.get(`http://localhost:31907/r3/dajObjave/${this.state.idPredmeta}`).then(res =>{
            this.setState({

            })
        })*/}
    }
    render(){
        
        return(
            <div>
                <h1>{this.state.naziv}</h1>
                <OPredmetuProfesor predmet={this.state.oPredmetu}></OPredmetuProfesor>
                <LiteraturaProfesor nesto={this.state.literatura}></LiteraturaProfesor>
              {this.state.sedmice.map(sedmica => <Sedmica naslov={sedmica.pocetakSedmice+' - '+sedmica.krajSedmice} fileovi = {this.state.file}></Sedmica>)}
            </div>
        )
    }
}

export default stranicaPredmetaProfesor