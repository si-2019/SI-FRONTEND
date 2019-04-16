import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import {withRouter} from 'react-router-dom';

class ReturnButton extends Component {
  
    render() {
      var currentLocation = this.props.location.pathname;
      if(currentLocation==="/"){
        return (
          <Nav.Link disabled href="/">Nazad na početnu</Nav.Link>
        )
      }
      return (
        <Nav.Link href="/">Nazad na početnu</Nav.Link>
      )
    }
  }
  export default withRouter(ReturnButton);