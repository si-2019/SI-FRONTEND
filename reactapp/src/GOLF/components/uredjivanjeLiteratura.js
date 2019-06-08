
import React, { Component } from 'react';

class uredjivanjeLiteratura extends Component {
 render(){

    return (
        <div>
			<textarea class="opis-uredjivanje" id="uredjivanjeTextLiteratura" placeholder="Tekst/sažetak literature" rows="3"></textarea>
			<input className="dugmic" type="file" multiple></input>
        </div>
        
    );
  }
}
export default uredjivanjeLiteratura
