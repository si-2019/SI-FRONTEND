import React, { Component } from 'react';
import ReturnButton from '../ReturnButton/ReturnButton';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends Component {
    render() {
      return (
        <div className="Footer">           
            <Navbar expand="lg" fixed="bottom" variant="light" bg="light" className="justify-content-center">
                <ReturnButton/>
            </Navbar>
        </div>
      );
    }
  }
  
  export default Footer;