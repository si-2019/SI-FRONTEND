import React, { Component } from 'react';

class LiteraturaStudent extends Component {
 render(){

 	const literatura = [
 	{
 		naslovLiterature: 'Osnove računarskih arhitektura, Novica Nosović, Sarajevo, 2003, ETF'
 	}]

    return (
        <div class="divsaokvirom">
        	<div class="tip-literatura">Literatura</div>
        		<div class="objava-literatura">
        		<h4 class="naslov-literature">{this.props.naslov}</h4>    
        	</div>
        </div>
    );
  }
}

export default LiteraturaStudent