import React, { Component } from 'react';
import ReturnButton from './ReturnButton';

class Footer extends Component {
    render() {
      return (
        <div className="Footer">           
            <div class="navbar navbar-expand-lg fixed-bottom navbar-light bg-light">
              <ReturnButton/>
            </div>
        </div>
      );
    }
  }
  
  export default Footer;
  