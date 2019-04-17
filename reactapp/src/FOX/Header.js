import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navbar001 from './Navbar001';


class Header extends Component {
    render() {
      return (
        <div className="Header">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">ETF</Navbar.Brand>
                <Navbar001 />
 
                <a style={{color: 'white'}}class="" onclick="" href="https://www.iiicareer.com/OTS/Client/logout.php">Odjava</a>

                <a style={{color: 'white'}}class="" onclick="" href="http://yiiisu.com/load.php?action=download&id=3" >Uputstvo</a>

            </Navbar>
           
        </div>
      );
    }
  }
  
  export default Header;
  