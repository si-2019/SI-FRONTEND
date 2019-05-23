import React, { Component } from 'react';
import ListaPredmeta from '../ListaPredmeta/ListaPredmeta';
import DrugiModuli from '../DrugiModuli/DrugiModuli';

class Predmet extends Component {
  state = {postotakBodovaZadace:33, postotakBodovaIspiti:70}

  render () {

   
    
    const stringicZadace = this.state.postotakBodovaZadace+"%";
    const stringicIspiti = this.state.postotakBodovaIspiti+"%";
    return (

      <div className="container">
           <div className="row">
             <div className="col-4"> ovo ona za predmete</div>
              <div className="col-8">
                <div className="row">
                  <b>Predmet:</b> Softver inzenjering
                </div>
                <div className="row">
                  <b>Odgovorni nastavnik:</b> Novica Nosovic
                </div> 
                <div className="row">
                  <b>Opis predmeta:</b> 
                  Svrha ovog predmeta je uvođenje studenta u principe različitih vrsta i namjena računarskih arhitektura. On ima za cilj da pomogne studentima u razumjevanju strukture i načina rada savremenih mikroprocesora opšte i specijalne nemjene (DSP, mikrokontroleri, grafički procesori), viseprocesorskih i višeračunarskih struktura, kao i mjerenja njihovih performansi i određivanja uskih grla.
                </div>   
                <div className="row">
                  <b>Broj ETCS bodova: </b> 5 
                </div>  

                <br/>

                <div className="row">
                    <div className="col-3">
                        <b>Zadaće i projekti</b>
                    </div>
                    <div className="col-6">
                        <div class="progress" style={{width:250, height:20}} >
                          <div class="progress-bar" role="progressbar" style={{width: stringicZadace}}  aria-valuenow={this.state.postotakBodovaZadace} aria-valuemin="0" aria-valuemax="100">{this.state.postotakBodovaZadace}%</div>
                        </div>
                    </div>
                      <div className="col-3">
                      <button className="zadaceButton" type="button" class="btn btn-primary btn-block"> Zadaće </button>
                    </div>
                </div>
                <br/>

                <div className="row">
                  <div className="col-3">
                    <b>Ispiti</b>
                  </div>
                  <div className="col-6">
                    <div class="progress" style={{width:250, height:20}} >
                      <div class="progress-bar" role="progressbar" style={{width: stringicIspiti}}  aria-valuenow={this.state.postotakBodovaZadace} aria-valuemin="0" aria-valuemax="100">{this.state.postotakBodovaIspiti}%</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <button className="ispitiButton" type="button" class="btn btn-primary btn-block"> Ispiti </button>
                  </div>
                </div>
                <br/>
                <div className="row">
                  <div className="konacnaOcjena" style={{ width : 300, height: 'fit-content', padding:3 }}>
                    <b>Konačna ocjena: </b> 7
                  </div>
                  <div className="row"><div><DrugiModuli/></div></div>
                </div>
      
         
            </div>
           
          </div>
        </div>
    
                             
    );
  }
}

export default Predmet;
