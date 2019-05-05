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

  Submitaj = (e) => {
    e.preventDefault();
     //treba validirati ulaze
  }

  render () {
    return (
      <div id="body">
        <div id="main">
          <form>
            <label htmlFor="korisnickoIme">Korisničko ime:</label>
            <input type="text" name="korisnickoIme" onChange={this.pratiPromjenuKorisnickogImena} />
            <label htmlFor="sifra">Šifra:</label>
            <input type="password" name="sifra" onChange={this.pratiPromjenuSifre} />

            <input type="submit" name="submit" value="Prijava" onSubmit={this.Submitaj}/>
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
