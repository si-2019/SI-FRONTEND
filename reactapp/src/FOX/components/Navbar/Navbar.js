import React, { Component } from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const astyle= {
  padding: '10px',
  color: 'white'
};

class Navbar001 extends Component {
  state = {}
    render() {
      return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">FOX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="student">Student</Nav.Link>
              <NavDropdown bg="dark" title="Unos podataka" id="basic-nav-dropdown">
                <NavDropdown.Item href="UnosPrisustva">Prisustvo</NavDropdown.Item>
                <NavDropdown.Item href="UnosBodova">Ispiti</NavDropdown.Item>
                <NavDropdown.Item href="UnosOcjene">Ocjene</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Teme</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="ispiti">Ispiti</Nav.Link>
              <Nav.Link href="obavijesti">Obavijesti</Nav.Link>
              <Nav.Link href="zadace">Zadaće</Nav.Link>
              <Nav.Link href="ankete">Ankete</Nav.Link>
              <Nav.Link href="statistika">Statistika</Nav.Link>
              <Nav.Link href="raspored">Raspored</Nav.Link>
              <Nav.Link href="chat">Chat</Nav.Link>
              <Nav.Link href="forum">Forum</Nav.Link>
              <Nav.Link href="materijail">Materijali</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
  
  export default Navbar001;