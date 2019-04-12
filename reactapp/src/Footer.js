import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Footer extends Component {
    render() {
      return (
        <div className="Footer">           
            <Navbar expand="lg" fixed="bottom" variant="light" bg="light">
                <Nav.Link href="#">Return</Nav.Link>
            </Navbar>
        </div>
      );
    }
  }
  
  export default Footer;
  