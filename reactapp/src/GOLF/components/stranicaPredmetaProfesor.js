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
          sedmice: []
        };
    }    
    componentDidMount(){
        axios.get(`http://localhost:31907/r5/dajNaziv/${this.state.idPredmeta}`).then(res =>{
            axios.get(`http://localhost:31907/r1/semestar/${this.state.idPredmeta}`).then(res2 =>{
                axios.get(`http://localhost:31907/r1/sedmice/${res2.data.semestar}`).then(res3 => {
                    this.setState({
                        naziv:res.data.naziv,
                        sedmice: res3.data.sedmice
                    })
                })
            })
         
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.naziv}</h1>
                <OPredmetuProfesor opis='sdsf' fileovi={['prvi.pdf','drugi.pdf','treci.pdf']}></OPredmetuProfesor>
                <LiteraturaProfesor/>
              {this.state.sedmice.map(sedmica => <Sedmica naslov={sedmica.pocetakSedmice+' - '+sedmica.krajSedmice}></Sedmica>)}
            </div>
        )
    }
}

export default stranicaPredmetaProfesor