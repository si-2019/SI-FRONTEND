import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import ReturnButton from './ReturnButton';


class Footer extends Component {
    render() {
      return (
        <div className="Footer">           
            <Navbar expand="lg" fixed="bottom" variant="light" bg="light">
                <ReturnButton/>
            </Navbar>
        </div>
      );
    }
  }
  
  export default Footer;
  