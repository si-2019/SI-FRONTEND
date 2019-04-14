import React, { Component } from 'react';

var bgColors = { 
    "Siva": "#f2f2f2",
    "Plava": "#e6f2ff",
    
};

class OpisPredmeta extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="opisPr" style={{backgroundColor:bgColors.Plava, width : 300, height:'fit-content', padding: 3, fontWeight: 'lighter'}}>
                	
Svrha ovog predmeta je uvođenje studenta u principe različitih vrsta i namjena računarskih arhitektura. On ima za cilj da pomogne studentima u razumjevanju strukture i načina rada savremenih mikroprocesora opšte i specijalne nemjene (DSP, mikrokontroleri, grafički procesori), viseprocesorskih i višeračunarskih struktura, kao i mjerenja njihovih performansi i određivanja uskih grla.
            </div>
         );
    }
}
 
export default OpisPredmeta;