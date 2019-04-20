import React, { Component } from 'react';
import logo from './logo.svg';
import NovaTema from './novaTema';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>TANGO</h1>
       <NovaTema/>
      </div>
    );
  }
}

export default App;
