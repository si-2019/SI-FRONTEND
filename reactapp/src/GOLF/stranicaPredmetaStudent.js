import React, { Component } from 'react'
import axios from 'axios'
class stranicaPredmetaStudent extends Component {
    constructor(props){
        super(props);
        this.state = {          
          idPredmeta: props.match.params.idPredmeta,
          naziv: "",
          text: "",
          idKorisnik: 0,
          idPredmet: 0
        };
    }    
    componentDidMount(){
        axios.get(`http://localhost:31907/r5/dajNaziv/${this.state.idPredmeta}`).then(res =>{
            this.setState({naziv:res.data.naziv})
        })

        var url = window.location.href;
        
        var idKorisnika = 0;
        var pom1 = 1;
        var i;
        for(i = url.length-1; i >= 0; i--) {
            if(url.charAt(i).includes('/')) break;
            idKorisnika = idKorisnika + parseInt(url.charAt(i)) * pom1;
            pom1 = pom1 * 10;
        }

    }
    render(){
        return(
            <div className="card border-info mb-3">
                <h1 className="card-header">  {this.state.naziv}</h1>
                <button onClick={this.klikNaDugme.bind(this)}>{this.state.text}</button>
            </div>
        )
    }
}

export default stranicaPredmetaStudent