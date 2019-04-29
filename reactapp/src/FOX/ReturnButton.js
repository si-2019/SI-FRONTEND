import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class ReturnButton extends Component {
  
    render() {
      var currentLocation = this.props.location.pathname;
      if(currentLocation==="/"){
        return (
          <a disabled href="/">Nazad na početnu</a>
        )
      }
      return (
        <a href="/fox">Nazad na početnu</a>
      )
    }
  }
  export default withRouter(ReturnButton);