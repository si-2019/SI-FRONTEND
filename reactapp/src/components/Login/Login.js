import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    state = {
        njumas: [
            {
                id: 2,
                text: 'Ah što ćemo'
            },
            {
                id: 142,
                text: 'Kad ja moram'
            }
        ]
    }

  componentWillMount() {
    document.title = 'Login stranica'
  }

  render () {
    return (
      <div id="body">
        <div id="main">
          <form>
            <label htmlFor="korisnickoIme">Korisničko ime:</label>
            <input type="text" name="korisnickoIme" />
            <label htmlFor="sifra">Šifra:</label>
            <input type="password" name="sifra" />

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
