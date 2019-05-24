import React, { Component } from 'react';

class oPredmetuStudent extends Component {
  render() {
  	
  	
    return (
        
        <div class='divsaokvirom'>
            <h4 class='naslov'> O predmetu </h4>
            <p class='opis'> {this.props.opis} </p>
            <div class='linkovi'>
              {this.props.fileovi.map(file => [<a href='#' class='card-link' key='1'>{file}</a>,<br key='2'></br>])}
            </div>
        </div>
    );
  }
}

export default oPredmetuStudent;