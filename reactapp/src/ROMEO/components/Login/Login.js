import React, { Component } from 'react';
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

  componentDidMount() {
    document.getElementById('dioGreske').style.display = "none";
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
      document.getElementById('dioGreske').style.display = "block";
	  } else {
      //autentikacija uspjesna
      this.setState({
        logiran: true
      })
      localStorage.setItem("token", "hardcoded for now")
      return <Redirect to="/romeo/home" />
    }
  }

  UkloniGresku = (e) => {
    document.getElementById('greske').innerText = "";
      document.getElementById('dioGreske').style.display = "none";
  }
	
  render () {
    if(this.state.logiran) {
      return <Redirect to="/romeo/home" />
    }

    return (
      <div className="body">
        <div className="header">
          <img 
            src="http://etf.unsa.ba/etf/css/images/etf-dugi.gif"
            alt="new"
          />
        </div>
        <div className="card text-white bg-primary " >
          <form className="loginForma">
          <label for="exampleInputEmail1">Korisnicko ime:</label>
          <input type="email" className="korisnickoIme" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Unesi korisnicko ime" onChange={this.pratiPromjenuKorisnickogImena} required></input>
<br></br>
          <label for="exampleInputPassword1">Password:</label>
      <input type="password" className="sifra" id="exampleInputPassword1" placeholder="Unesi password" onChange={this.pratiPromjenuSifre} required></input>
            

            <button type="button" className="btn btn-secondary" onClick = {this.Submitaj} >LOGIN</button>
          </form>
          
        </div>
        <div className="alert alert-dismissible alert-danger mb-0" id="dioGreske">
          <button type="button" className="close" data-dismiss="alert" onClick = {this.UkloniGresku} >&times;</button>
          <div id="greske"></div>
        </div>
        <div className="footer">
          &copy; 2019 Elektrotehnički fakultet u Sarajevu
        </div>
      </div>
    );
  }
}

export default Login;
