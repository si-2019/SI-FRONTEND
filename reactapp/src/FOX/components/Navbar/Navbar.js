import React, { Component } from 'react';
import './Navbar.css';

const astyle= {
  padding: '10px',
  color: 'white'
};

class Navbar001 extends Component {
  state = {}
    render() {
      return (
        <div className="navbar001_class">
            <a style={astyle} href="student">Student</a>
            <a style={astyle} href="unos_podataka">Unos podataka</a>
            <a style={astyle} href="ispiti">Ispiti</a>
            <a style={astyle} href="obavijesti">Obavijesti</a>
            <a style={astyle} href="zadace">Zadace</a>
            <a style={astyle} href="ankete">Ankete</a>
            <a style={astyle} href="statistika">Statistika</a>           
            <a style={astyle} href="raspored">Raspored</a>
            <a style={astyle} href="chat">Chat</a>
            <a style={astyle} href="forum">Forum</a>
            <a style={astyle} href="materijali">Materijali</a>
        </div>
      );
    }
  }
  
  export default Navbar001;