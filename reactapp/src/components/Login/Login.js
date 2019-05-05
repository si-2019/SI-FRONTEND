import React, { Component } from 'react';
import './login.css';
var error = 'Greska';
class Login extends Component {
    state = {
        korisnickoIme: '',
        sifra: ''
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
  
  validirajFormu(){
	var passwordRegex = /^[0-9a-z]+$/
	if(this.state.sifra.length < 8){
		error='Sifra mora imati preko 7 karaktera'; 
		return false;
		}
	if(!this.state.korisnickoIme.match(passwordRegex)){error='Korisnicko ime ima nedozvoljen karakter'; return false;}
	if(!this.state.sifra.match(passwordRegex)){error='Sifra ima nedozvoljen karakter'; return false;}
	return true;		
 	}
  Submitaj = (e) => {
	if(!this.validirajFormu()){
	document.getElementById('greske').innerText = error;
	e.preventDefault();
	return;
	}
  }
	

  render () {
    return (
      <div id="body">
        <div id="main">
          <form onSubmit = {this.Submitaj}>
            <label htmlFor="korisnickoIme">Korisničko ime:</label>
            <input type="text" name="korisnickoIme" onChange={this.pratiPromjenuKorisnickogImena} required />
            <label htmlFor="sifra">Šifra:</label>
            <input type="password" name="sifra" onChange={this.pratiPromjenuSifre} required/>

            <input type="submit" name="submit" value="Prijava"/>
          </form>
          
        </div>
        <div id="greska">
	<label id="greske"></label>
        </div>
        <div id="footer">
          Elektrotehnički fakultet u Sarajevu
        </div>
      </div>
    );
  }
}

export default Login;
