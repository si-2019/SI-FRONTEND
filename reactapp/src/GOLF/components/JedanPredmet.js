import React, { Component } from 'react'
import './golf.css'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import axios from 'axios'

class JedanPredmet extends Component {

  constructor(props){
    super(props);
    this.state = {
      idKorisnika: 1,
      link: "",
      privilegija: 0
    };
  }


 componentDidMount(){
   axios.get(`http://localhost:31907/r3/dajPrivilegije/${this.state.idKorisnika}/${this.props.predmet.id}`).then(res =>{
     const nesto = res.data;
     console.log(nesto);
      if(nesto.privilegija == 1){
        var varijabla = "/Golf/stranicaPredmetaProfesor/" + this.props.predmet.id + "/" + this.state.idKorisnika
        this.setState({
          link: varijabla
        })
      }
      else {
        var varijabla = "/Golf/stranicaPredmetaStudent/" + this.props.predmet.id + "/" + this.state.idKorisnika
        this.setState({
          link: varijabla
        })
      }
     this.setState({
        privilegija: nesto.privilegija
     })
   })
 }

  render() {
    return (
    <div>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title"><Link id="nazivPredmeta" to={this.state.link}>{this.props.predmet.naziv}</Link></h4>
          {this.props.predmet.opis}
        </div>
      </div>
    </div>

  
    )

  }
}

export default JedanPredmet
