import React, { Component } from 'react';

class LiteraturaStudent extends Component {
 render(){

 	const literatura = [
 	{
 		naslovLiterature: 'Osnove računarskih arhitektura, Novica Nosović, Sarajevo, 2003, ETF'
 	}]

    return (
        <div class="divsaokvirom">
        	<h4 class='naslov'>Literatura</h4>
					<div className = "linkovi">
						{this.props.nesto.map(file =>[<a href = "#">{file.naziv}</a>,<br/>])}
					</div>
        </div>
        
    );
  }
}

export default LiteraturaStudent