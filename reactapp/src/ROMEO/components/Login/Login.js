﻿import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './login.css';

var error = 'Greska';

class Login extends Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem("token")

    let logiran = true
    if(token == null) {
      logiran = false
    }

    this.state = {
      korisnickoIme: '',
      sifra: '',
      logiran
    }
}

  componentWillMount() {
    document.title = 'Login stranica'
  }

  pratiPromjenuKorisnickogImena = (e) => {
    this.setState({korisnickoIme: e.target.value});
  }

  pratiPromjenuSifre = (e) => {
    this.setState({sifra: e.target.value});
  }
  
  validirajFormu() {
    var passwordRegex = /^[0-9a-z]+$/
    if(this.state.sifra.length < 8) {
      error='Sifra mora imati preko 7 karaktera'; 
      return false;
    }
    if(!this.state.korisnickoIme.match(passwordRegex)) {
      error='Korisnicko ime ima nedozvoljen karakter';
      return false;
    }
    if(!this.state.sifra.match(passwordRegex)) {
      error='Sifra ima nedozvoljen karakter';
      return false;
    }
    return true;		
  }
   
  Submitaj = (e) => {
    e.preventDefault();
	  if(!this.validirajFormu()) {
	    document.getElementById('greske').innerText = error;
	  } else {
      //autentikacija uspjesna
      this.setState({
        logiran: true
      })
      localStorage.setItem("token", "hardcoded for now")
      return <Redirect to="/romeo/home" />
    }
  }
	
  render () {
    if(this.state.logiran) {
      return <Redirect to="/romeo/home" />
    }

    return (
      <div className="body">
        <div className="card text-white bg-primary mb-3">
          <form onSubmit = {this.Submitaj} className="loginForma">
            <label htmlFor="korisnickoIme">Korisničko ime:</label>
            <input type="text" name="korisnickoIme" className="korisnickoIme" onChange={this.pratiPromjenuKorisnickogImena} required />
            <label htmlFor="password">Password:</label>
            <input type="password" name="sifra" className="sifra" onChange={this.pratiPromjenuSifre} required/>

            <button type="button" className="btn btn-secondary">LOGIN</button>
          </form>
          
        </div>
        <div className="alert alert-dismissible alert-danger">
  <button type="button" className="close" data-dismiss="alert">&times;</button>
  <strong>Greška!</strong>
</div>
        <div className="footer">
        &copy; 2019 Elektrotehnički fakultet u Sarajevu
        </div>
      </div>
    );
  }
}

export default Login;
