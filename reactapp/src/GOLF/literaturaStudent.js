import React, { Component } from 'react';

class LiteraturaStudent extends Component {
 render(){

 	const literatura = [
 	{
 		naslovLiterature: 'Osnove računarskih arhitektura, Novica Nosović, Sarajevo, 2003, Elektrotehnički fakultet Sarajevo'
 	}]

    return (
        <div class="divsaokvirom">
        <h4 class="card-title">{this.props.naslov}</h4>    
        </div>
    );
  }
}

export default LiteraturaStudent