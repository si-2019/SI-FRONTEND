import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navbar001 from './Navbar001';


class Header extends Component {
  constructor(props) {
    super(props);
    {/*Promijeni na true za header početne stranice, false za header stranice predmeta */}
    this.state = {isPocetna: props.isPocetna} 
   }
    render() {
      const isPocetna = this.state.isPocetna;
      let meni;
      if (isPocetna) {
        meni = <div>
          <Navbar.Brand href="#home">ETF</Navbar.Brand>
          <a style={{color: 'white'}}class="" onclick="" href="https://www.iiicareer.com/OTS/Client/logout.php">Odjava</a>
          <a style={{color: 'white'}}class="" onclick="" href="http://yiiisu.com/load.php?action=download&id=3" >Uputstvo</a>
        </div>  
      }
      else {meni = <Navbar001 />;}
      return (
        <div className="Header">
            <Navbar bg="dark" variant="dark">               
                {meni}
            </Navbar>
           
        </div>
      );
    }
  }
  
  export default Header;
  