import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from 'axios';
import "./../bootstrap.css";

class OsnovniPodaci extends Component {
  render() {
    const { title } = this.props;
   /* var tekstOPrethodnojPostavci = "";
    if(this.props.podaci.state.radnja === "Azuriranje") {
      axios.get(`http://localhost:31911/getImeFajla/${this.props.podaci.state.idZadaca}`, ).then(res => {
        if(res.data === "") { // nema fajla postavke za odabranu zadacu 
          tekstOPrethodnojPostavci = "Nema fajla postavke za odabranu zadaću";
        } else { // ima fajla postavke za odabranu zadacu
          tekstOPrethodnojPostavci = "Naziv postavke: " + res.data;        } 
      })
    }*/
    return (
      <div>
        <div>
          <div className="card h-100" style={{width: "18rem"}} >
            <Form>
              <div  className="card-title p-2 ">
                <h4>
                  <b>{title ? title : "Kreiranje zadaće"}</b>
                </h4>
              </div>
              <FormGroup>
                <label for="naziv" class="lab">Naziv:</label>
                {/*Tu ispod se nalazi onChange za spremanje naziva */}
                <input
                 class="form-control p-2"
                  value={this.props.podaci.state.naziv}
                  type="text"
                  name="naziv"
                  id="naziv"
                  placeholder="Upišite naziv"
                  onChange={this.props.onChange}
                />
                </FormGroup>
              
              <FormGroup>
                <label class="lab1" for="datum">Datum roka predaje:</label>
                <Input
                  value={this.props.podaci.state.datum}
                  type="date"
                  name="datum"
                  id="datum"
                  onChange={this.props.onChange}
                />
              </FormGroup>
              <FormGroup>
                <label class="lab1" for="vrijeme">Vrijeme roka predaje:</label>
                <Input
                  value={this.props.podaci.state.vrijeme}
                  type="time"
                  name="vrijeme"
                  id="vrijeme"
                  placeholder="time placeholder"
                  onChange={this.props.onChange}
                />
              </FormGroup>
              <FormGroup encType="multipart/form-data">
                <label id="pos" for="file">Postavka:</label>
                <Input type="file" name="file" id="file" 
                  onChange={this.props.onChangePostavka}
                />
                <small id="opc" class="form-text" color="info">Ovo je opcionalna mogućnost</small>
               {/* <FormText color="info">{tekstOPrethodnojPostavci}</FormText> */}
              </FormGroup>
              <FormGroup>
                <label id="brZ" for="brojZadataka">Broj zadataka:</label>
                <Input
                  value={this.props.podaci.state.brojZadataka}
                  type="number"
                  pattern="(10|[1-9])"
                  digitOnly
                  name="brojZadataka"
                  id="brojZadataka"
                  min={1}
                  max={10}
                  step={1}
                  onChange={this.props.onChange}
                  disabled = {this.props.podaci.state.radnja=="Azuriranje"}
                />
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default OsnovniPodaci;
