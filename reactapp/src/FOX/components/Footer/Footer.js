import React, { Component } from 'react';
import ReturnButton from '../ReturnButton/ReturnButton';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends Component {
    render() {
      return (
        <div className="Footer" style={{position: "absolute", bottom: "0", width: "100%", marginTop: "70px"}}>           
            <Navbar expand="lg" variant="light" bg="primary" className="justify-content-center" style={{height: "50px"}}>
                <ReturnButton/>
            </Navbar>
        </div>
      );
    }
  }
  
  export default Footer;