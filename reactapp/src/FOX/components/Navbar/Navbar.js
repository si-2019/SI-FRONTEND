import React, { Component } from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class NavbarFox extends Component {
    render() {
      return (
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="/fox">FOX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
              <Nav.Link href="StranicaPredmeta">Student</Nav.Link>
              <NavDropdown bg="dark" title="Unos podataka" id="basic-nav-dropdown">
                <NavDropdown.Item href="unosPrisustva">Prisustvo</NavDropdown.Item>
                <NavDropdown.Item href="unosBodova">Ispiti</NavDropdown.Item>
                <NavDropdown.Item href="unosOcjene">Ocjene</NavDropdown.Item>
                <NavDropdown.Item href="unosTeme">Teme</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="ispiti">Ispiti</Nav.Link>
              <Nav.Link href="obavijesti">Obavijesti</Nav.Link>
              <Nav.Link href="zadace">Zadaće</Nav.Link>
              <Nav.Link href="ankete">Ankete</Nav.Link>
              <Nav.Link href="statistika">Statistika</Nav.Link>
              <Nav.Link href="raspored">Raspored</Nav.Link>
              <Nav.Link href="chat">Chat</Nav.Link>
              <Nav.Link href="forum">Forum</Nav.Link>
              <Nav.Link href="materijali">Materijali</Nav.Link>
            </Nav>
            <Nav className="mr-auto" className="justify-content-end">
              <Nav.Link href="https://www.iiicareer.com/OTS/Client/logout.php">Odjava</Nav.Link>
              <Nav.Link href="http://yiiisu.com/load.php?action=download&id=3">Uputstvo</Nav.Link>
            </Nav> 
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
  
  export default NavbarFox;