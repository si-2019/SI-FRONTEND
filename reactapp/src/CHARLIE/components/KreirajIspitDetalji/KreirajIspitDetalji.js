import React, { Component } from "react";
import FormCharlie from "../SharedComponents/FormCharlie";
import { Link } from 'react-router-dom';
import DatePicker from "react-datetime";

class KreirajIspitDetalji extends Component {
  constructor() {
    super();
    this.state = {
      rokPrijave: new Date(),
      termin: new Date(),
      sale: [],
      vrijemeTrajanja: 0,
      kapacitet: 0,
      napomena: "",
      validno: true,
      greske: ["", "", "", "", "", ""]
    };
  }

    

  render() {
    return (
      <div class="container-fluid" style={{marginTop: "30px"}}>
      <h2 style={{marginBottom: "30px"}}>Kreiraj ispit detalji</h2>

      <div class="card align-items-center">
        <div class="card-body" style={{minWidth: "100%"}}>
        <div class="row justify-content-lg-around justify-content-md-center">
        <div class="col-lg-4 col-sm-12 col-md-6 justify-content-sm-center ">
          <h4 class="card-title">Kreiranje ispita</h4>
          <h6 class="card-subtitle mb-2 text-muted">Ovdje je potrebno unijeti sve informacije kako biste mogli kreirati termin ispita.</h6>
            <div style={{textAlign: "left"}}>  
              <label htmlFor="rokPrijave" class="col-form-label col-form-label-lg">Rok prijave: </label> 
            </div>
              <DatePicker
                        id="rokPrijave"
                        
                
              />  
              <div style={{textAlign: "left"}}>  
              <label htmlFor="sala" class="col-form-label col-form-label-lg">Sala:</label>
              </div>
              <select
                multiple
                class="custom-select"
                id="sala"                
                            
              >
                <option>VA</option>
                <option>MA</option>
                <option>S0</option>
                <option>S1</option>
                <option>S3</option>
              </select>
              <div style={{textAlign: "left"}}>  
              <label htmlFor="termin" class="col-form-label col-form-label-lg">Termin: </label> 
            </div>
              <DatePicker
                        id="termin"                        
                                   
              /> 
              <div style={{textAlign: "left"}}>                
              <label class="col-form-label col-form-label-lg" htmlFor="vrijemeTrajanja">Vrijeme trajanja: </label> </div>
              <input type="number" className="form-control" id="vrijemeT" />
              <div style={{textAlign: "left"}}>
              <label class="col-form-label col-form-label-lg" htmlFor="Kapacitet">Kapacitet: </label> </div>
              <input type="number" className="form-control" id="kapacitet" />
              <div style={{textAlign: "left"}}>
              <label class="col-form-label col-form-label-lg" htmlFor="Kapacitet">Napomena: </label> </div>
              
           <textarea
                    
                    className="form-control"
                    id="ispitnaNapomena"
                    placeholder="Ovdje unesite napomenu..."
                    rows="15"
                   
        />
           
           <div style={{float: "right"}}>
            
              <button type="button" class="btn btn-primary" id="btnSpasiCharlie" name="btnSpasiCharlie" style={{marginTop:"20px", marginRight: "10px"}}>Kreiraj ispit</button>
           
              <button type="button" class="btn btn-secondary" id="btnPovratak" style={{marginTop: "20px"}} onClick={() => this.props.onChangeActiveId(0)}>Odustani</button>
            
           </div>

          </div>
        </div>
        </div>
        </div>
        </div>
    );
  }
}

export default KreirajIspitDetalji;
