
import React, { Component } from 'react';

class uredjivanjeLiteratura extends Component {
 render(){

    return (
        
			<textarea class="opis-uredjivanje" id="uredjivanjeTextLiteratura" placeholder="Tekst/sažetak literature" rows="3"></textarea>
			<input className="dugmic" type="file" multiple></input>
        
        
    );
  }
}
export default uredjivanjeLiteratura
