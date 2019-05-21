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
	  if(!this.validirajFormu()) {
	    document.getElementById('greske').innerText = error;
	    e.preventDefault();
	    return;
	  }
  }
	
  render () {
    return (
      <div class="body">
        <div class="card text-white bg-primary mb-3">
          <form onSubmit = {this.Submitaj} class="loginForma">
            <label htmlFor="korisnickoIme">Korisničko ime:</label>
            <input type="text" name="korisnickoIme" class="korisnickoIme" onChange={this.pratiPromjenuKorisnickogImena} required />
            <label htmlFor="password">Password:</label>
            <input type="password" name="sifra" class="sifra" onChange={this.pratiPromjenuSifre} required/>

            <button type="button" class="btn btn-secondary">LOGIN</button>
          </form>
          
        </div>
        <div class="alert alert-dismissible alert-danger">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>Greška!</strong>
</div>
        <div class="footer">
        &copy; 2019 Elektrotehnički fakultet u Sarajevu
        </div>
      </div>
    );
  }
}

export default Login;
