import React, { Component } from 'react'

import Axios from 'axios';
import DatePicker from "react-datetime";

class InformacijeOIspitu extends Component {

  state ={ispit:{}}

  async componentDidMount() {
    // vratit ce ispit kad se uradi backend
    // this.setState({ ispit: Axios.get("http://si2019charlie.herokuapp.com/ispiti/:idIspit") });
  }

  render() {
    return (
    <div class="container-fluid" style={{marginTop: "30px"}}>
      <h2 style={{marginBottom: "30px"}}>Informacije o ispitu</h2>
      <div class="card align-items-center">
          <div class="card-body" style={{minWidth: "100%"}}>
          <div class="row justify-content-lg-around justify-content-md-center">
          <div class="col-lg-4 col-sm-12 col-md-6 justify-content-sm-center ">
            <h4 class="card-title">Prikaz informacija o ispitu</h4>
            <h6 class="card-subtitle mb-2 text-muted">Ovdje možete vidjeti sve informacije o ispitu koji ste izabrali.</h6>
            <div style={{textAlign: "left"}}>  
              <label htmlFor="rokPrijave" class="col-form-label col-form-label-lg">Rok prijave: </label> 
            </div>
              <DatePicker
                        id="rokPrijave"
                        value={this.state.ispit.rokPrijave}
                        disabled
                
              /> 
              <div style={{textAlign: "left"}}>  
              <label htmlFor="sala" class="col-form-label col-form-label-lg">Sala:</label>
              </div>
              <select
                multiple
                class="custom-select"
                id="sala"                
                disabled               
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
                        id="termin2"                        
                        disabled                
              /> 
               <div style={{textAlign: "left"}}>                
              <label class="col-form-label col-form-label-lg" htmlFor="vrijemeTrajanja">Vrijeme trajanja: </label> </div>
              <input type="number" className="form-control" id="vrijemeT2" disabled />
              <div style={{textAlign: "left"}}>
              <label class="col-form-label col-form-label-lg" htmlFor="Kapacitet">Kapacitet: </label> </div>
              <input type="number" className="form-control" id="kapacitet2" disabled/>
              <div style={{textAlign: "left"}}>
              <label class="col-form-label col-form-label-lg" htmlFor="Kapacitet">Napomena: </label> </div>
              
           <textarea
                    
                    className="form-control"
                    id="ispitnaNapomena2"
                    placeholder="Ovdje unesite napomenu..."
                    rows="15"
                    disabled
                   
        />
          <div style={{float: "right"}}>
            
              
           
            <button type="button" class="btn btn-primary" id="btnPovratak2" style={{marginTop: "20px"}} onClick={() => this.props.onChangeActiveId(4)}>Nazad</button>
          
         </div>
       </div>
       
       </div>
       </div>
       </div>

      </div>)
  }
}

export default InformacijeOIspitu