import React, { Component } from "react";
import FormCharlie from "../SharedComponents/FormCharlie";
import { Link } from 'react-router-dom';
import DatePicker from "react-datetime";

class KreirajIspitDetalji extends Component {
  state = { napomenaGreska: false };

  render() {
    return (
      <div className='container'>
        <form>
        <div className="row">
          <div class="card" style={{marginLeft:"16px", width: "60%"}}>
          <div class="card-body" style={{textAlign:"left"}}>
                <h4 class="card-title" style={{textAlign: "center"}}>Unošenje detaljnih informacija za kreiranje termina ispita</h4>
            
              <label htmlFor="rokPrijave" class="col-form-label">Rok prijave: </label> 
              <DatePicker
                        id="rokPrijave"
                        
                
              />                    
              <label class="col-form-label" htmlFor="vrijemeTrajanja">Vrijeme trajanja: </label> <br/>
              <input type="number" className="form-control" id="vrijemeT" />
              <label class="col-form-label" htmlFor="Kapacitet">Kapacitet: </label> <br />
              <input type="number" className="form-control" id="kapacitet" />
              <FormCharlie
                autoFocus
                labelTitle="Napomena za ispit"
                id="ispitnaNapomena"
                placeholder="Nemojte zaboraviti indeks..."
                validations={["required"]}
              />
           
           
         
            <Link to="/charlie">
              <button type="button" class="btn btn-primary" id="btnSpasi" style={{ float: "right" }}>Kreiraj ispit</button>
            </Link>
            <Link to="/charlie">
              <button type="button" class="btn btn-secondary" id="btnPovratak" style={{float:"right", marginTop: "10px"}}>Odustani</button>
            </Link>
           
          </div>
        </div>
        </div>
        </form>
        </div>
    );
  }
}

export default KreirajIspitDetalji;
