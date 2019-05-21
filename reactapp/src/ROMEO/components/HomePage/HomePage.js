import React, { Component } from 'react';
import './homePage.css';

class Login extends Component {

  state = {
      
  }

  componentWillMount() {
    document.title = 'Home Page'
  }
	
  render () {
    return (
      <div className="App">
        <div className="header">
      
        </div>
        <div className="main">
      
        </div>
        <div className="menu">
      
        </div>
        <div className="footer">
          Elektrotehnički fakultet u Sarajevu
        </div>
      </div>
    );
  }
}

export default Login;
