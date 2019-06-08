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
          <div id="formakreiraj" className="formaKreiranjaZadace">
            <Form>
              <div id="naslovK" className="card-header  text-black mb-4 ">
                <h4>
                  <b>{title ? title : "Kreiranje zadaće"}</b>
                </h4>
              </div>
              <FormGroup>
                <Label for="naziv" >Naziv:</Label>
                {/*Tu ispod se nalazi onChange za spremanje naziva */}
                <input
                  class="form-control"
                  value={this.props.podaci.state.naziv}
                  type="text"
                  name="naziv"
                  id="naziv"
                  placeholder="Upišite naziv"
                  onChange={this.props.onChange}
                />
                <div style={{ visibility: !(this.props.podaci.state.porukeGreske[0]=="" || this.props.podaci.state.porukeGreske[0]== undefined) ? "visible" : "hidden"}}><p class="text-danger">{this.props.podaci.state.porukeGreske[0]}</p></div>
              </FormGroup>
              <FormGroup>
                <Label for="datum">Datum roka predaje:</Label>
                <input
                  class="form-control"
                  value={this.props.podaci.state.datum}
                  type="date"
                  name="datum"
                  id="datum"
                  onChange={this.props.onChange}
                />
                <div style={{ visibility: !(this.props.podaci.state.porukeGreske[2]=="" || this.props.podaci.state.porukeGreske[2]== undefined) ? "visible" : "hidden"}}><p class="text-danger">{this.props.podaci.state.porukeGreske[2]}</p></div>
              </FormGroup>
              <FormGroup>
                <Label for="vrijeme">Vrijeme roka predaje:</Label>
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
                <Label for="file">Postavka:</Label>
                <Input type="file" name="file" id="file" 
                  onChange={this.props.onChangePostavka}
                />
                <FormText color="info">Ovo je opcionalna mogućnost</FormText>
               {/* <FormText color="info">{tekstOPrethodnojPostavci}</FormText> */}
              </FormGroup>
              <FormGroup>
                <Label for="brojZadataka">Broj zadataka:</Label>
                <Input
                  class="form-control"
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
                <div style={{ visibility: !(this.props.podaci.state.porukeGreske[1]=="" || this.props.podaci.state.porukeGreske[1]== undefined) ? "visible" : "hidden"}}><p class="text-danger">{this.props.podaci.state.porukeGreske[1]}</p></div>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default OsnovniPodaci;
