import React, { Component } from 'react';


class Navbar001 extends Component {
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
            <a href="materijali">Materijali</a>
            <a href="ispit">Ispit</a>*/}
            <a style={{ padding: '10px'}}href="zadace">Zadace</a>
            <a href="ankete">Ankete</a>
            <a >Raspored</a>
            <a href="chat">Chat</a>
        </div>
      );
    }
  }
  
  export default Navbar001;