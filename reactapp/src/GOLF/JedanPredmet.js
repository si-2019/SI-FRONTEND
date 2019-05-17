import React, { Component } from 'react'
import './golf.css'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import axios from 'axios'

class JedanPredmet extends Component {

  constructor(props){
    super(props);
    this.state = {
      idKorisnika: 239,
      link: "",
      privilegija: 0
    };

    /*this.funkcija = this.funkcija.bind(this);*/
  }

 /*funkcija(korisnik){
   console.log(korisnik);
   if(korisnik == 1) {
    var nesto = "/Golf/stranicaPredmetaProfesor/" + this.props.predmet.id + "/" + this.state.idKorisnika;
     this.setState({
      link: nesto
     });
     
   }
   else {
     console.log("Ušao u else");
     var nesto = "/Golf/stranicaPredmetaStudent/" + this.props.predmet.id + "/" + this.state.idKorisnika
     console.log(nesto);
     this.setState({
        link: nesto
    });
    console.log(nesto);
     console.log(this.state.link);
   }
 }*/

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
        <div id="predmet_kartica" class="card border-info mb-3" >
        <div class="card-header">
        <Link to={this.state.link}>{this.props.predmet.naziv}</Link>
        {/*<a href='/Golf/mojiPredmeti'>{this.props.predmet.naziv}</a>*/}
        </div>
        <div class="card-body">
        <p class="card-text">{this.props.predmet.opis}</p>
        </div>
        </div>

  
    )
  }
}

export default JedanPredmet
