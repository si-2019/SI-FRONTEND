import React, { Component } from 'react'
import axios from 'axios'
class stranicaPredmetaStudent extends Component {
    constructor(props){
        super(props);
        this.state = {          
          idPredmeta: props.match.params.idPredmeta,
          naziv: ""
        };
    }    
    componentDidMount(){
        axios.get(`http://localhost:31907/r5/dajNaziv/${this.state.idPredmeta}`).then(res =>{
            this.setState({naziv:res.data.naziv})
        })
    }
    render(){
        return(
            <div className="card border-info mb-3">
                <h1 className="card-header">  {this.state.naziv}</h1>
            </div>
        )
    }
}

export default stranicaPredmetaStudent