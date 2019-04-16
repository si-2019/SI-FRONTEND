import React from "react";
import { Badge, Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";


import "./../bootstrap.css";

class OsnovniPodaci extends React.Component {
 
    
  

  render() {
   

    return (
      <div>
        <div >
          <div className="formaKreiranjaZadace" >
            <Form>
            <div className="card-header bg-primary text-light mb-4">
              <h4>
                <b>Kreiraj zadaću</b>
              </h4>
            </div>
              <FormGroup>
                <Label for="naziv">Naziv:</Label>
                {/*Tu ispod se nalazi onChange za spremanje naziva */}
                <Input
                 
                  type="text"
                  name="naziv"
                  id="naziv"
                  placeholder="Upišite naziv"
                  onChange={this.props.podaci.onChangeNaziv}
                />
                
              </FormGroup>
              <FormGroup>
                <Label for="datum">Datum roka predaje:</Label>
                <Input
                  
                  type="date"
                  name="datum"
                  id="datum"
                  onChange={this.props.podaci.onChangeDatum}
                />
              </FormGroup>

              <FormGroup>
                <Label for="vrijeme">Vrijeme roka predaje:</Label>
                <Input
                
                    
                  type="time"
                  name="vrijeme"
                  id="vrijeme"
                  placeholder="time placeholder"
                  onChange={this.props.podaci.onChangeVrijeme}
                />
              </FormGroup>
              <FormGroup>
                <Label for="file">Postavka:</Label>
                <Input type="file" name="file" id="file" />
                <FormText color="muted">Ovo je opcionalna mogućnost</FormText>
              </FormGroup>
              <FormGroup>
                <Label for="brojZadataka">Broj zadataka:</Label>
                {/*Tu ispod se nalazi onChange za spremanje brojaZadataka */}
               <Input
                  
                  type="number"
                  pattern="[0-9]{0,5}"
                  name="brojZadataka"
                  id="brojZadataka"
                  value = {this.props.podaci.state.brojZadataka}
                  min={1}
                  max={10}
                  onChange={this.props.podaci.onChangeBrojZadataka}
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
