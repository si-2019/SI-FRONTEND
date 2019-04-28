import React, { Component } from 'react';

var bgColors = { 
  "Siva": "#f2f2f2",
  "Plava": "#e6f2ff",
  
};

class Predmet extends Component {
  state={}
  render () {
    return (
        <div>
            <p>Predmet</p>

            <div style={{backgroundColor: bgColors.Siva, width:300, padding: 3}} className="imeProf" >
              Profesor: Novica Nosovic
            </div>

            <div className="opisPr" style={{backgroundColor:bgColors.Plava, width : 300, height:'fit-content', padding: 3, fontWeight: 'lighter'}}>
              Opis predmeta: Svrha ovog predmeta je uvođenje studenta u principe različitih vrsta i namjena računarskih arhitektura. On ima za cilj da pomogne studentima u razumjevanju strukture i načina rada savremenih mikroprocesora opšte i specijalne nemjene (DSP, mikrokontroleri, grafički procesori), viseprocesorskih i višeračunarskih struktura, kao i mjerenja njihovih performansi i određivanja uskih grla.
            </div>

            <div className="brojBod" style={{backgroundColor:bgColors.Plava, width : 300, height: 'fit-content', padding:3 }}>
               Broj ETCS bodova: 5 
            </div>

            <div className="konacnaOcjena" style={{backgroundColor:bgColors.Plava, width : 300, height: 'fit-content', padding:3 }}>
               Konačna ocjena: 9
            </div>

        </div>
                             
    );
  }
}

export default Predmet;


