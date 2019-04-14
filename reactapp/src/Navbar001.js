import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navbar001 extends Component {
    render() {
      return (
        <Nav className="navbar001_class">
            <Nav.Link href="student">Student</Nav.Link>
            <Nav.Link href="unos_podataka">Unos podataka</Nav.Link>
        </Nav>
      );
    }
  }
  
  export default Navbar001;