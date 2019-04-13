import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
    render() {
      return (
        <div className="Header">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">ETF</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
            </Navbar>
        </div>
      );
    }
  }
  
  export default Header;
  