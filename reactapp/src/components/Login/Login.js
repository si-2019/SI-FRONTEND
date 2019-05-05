import React, { Component } from 'react';
import './login.css';

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
  alert("validations passed");
  return true;
 }
  Submitaj = (e) => {
	if(!this.validirajFormu()){
	e.preventDefault();
	return;
	}
	const {korisnickoIme, sifra} = this.state;
	alert('Logovan sa korisnickim imenom: ${korisnickoIme} sifrom: ${sifra}');
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

        </div>
        <div id="footer">
          Elektrotehnički fakultet u Sarajevu
        </div>
      </div>
    );
  }
}

export default Login;
