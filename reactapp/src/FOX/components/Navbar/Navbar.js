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
            {/*<a href="student">Student</a>
            <a href="unos_podataka">Unos podataka</a>
            <a href="ispiti">Ispiti</a>
            <a href="obavijesti">Obavijesti</a>
            <a href="ankete">Ankete</a>
            <a href="statistika">Statistika</a>
            <a href="forum">Forum</a>
            <a href="ispit">Ispit</a>*/}
            <a style= {astyle} href="materijali">Materijali</a>
            <a style={astyle} href="zadace">Zadace</a>
            <a style={astyle} href="ankete">Ankete</a>
            <a style= {astyle} href="raspored">Raspored</a>
            <a style ={astyle} href="chat">Chat</a>
        </div>
      );
    }
  }
  
  export default Navbar001;