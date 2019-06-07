import React, { Component } from 'react';
import NavbarFox from '../Navbar/Navbar';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
  constructor(props) {
    super(props);
    /*Promijeni na true za header početne stranice, false za header stranice predmeta */
    this.state = {isPocetna: props.isPocetna} 
   }

    render() {
      const isPocetna = this.state.isPocetna;
      let meni;

      if (isPocetna) {
        meni =
          <Navbar bg="primary" variant="dark" className="justify-content-end">
            <Nav className="mr-auto" className="justify-content-end">
              <Nav.Link href="https://www.iiicareer.com/OTS/Client/logout.php">Odjava</Nav.Link>
              <Nav.Link href="http://yiiisu.com/load.php?action=download&id=3">Uputstvo</Nav.Link>
            </Nav>    
          </Navbar>
      }
      else {
        meni = <NavbarFox />;
      }

      return (
        <div className="Header">
            {meni}
        </div>
      );
    }
  }
  
  export default Header;
  