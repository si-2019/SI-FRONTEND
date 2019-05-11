import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./../bootstrap.css";

class OsnovniPodaci extends Component {
  render() {
    const { title } = this.props;
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
                <Label for="naziv">Naziv:</Label>
                {/*Tu ispod se nalazi onChange za spremanje naziva */}
                <Input
                  value={this.props.podaci.state.naziv}
                  type="text"
                  name="naziv"
                  id="naziv"
                  placeholder="Upišite naziv"
                  onChange={this.props.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="datum">Datum roka predaje:</Label>
                <Input
                  value={this.props.podaci.state.datum}
                  type="date"
                  name="datum"
                  id="datum"
                  onChange={this.props.onChange}
                />
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
              <FormGroup>
                <Label for="file">Postavka:</Label>
                <Input type="file" name="file" id="file" />
                <FormText color="muted">Ovo je opcionalna mogućnost</FormText>
              </FormGroup>
              <FormGroup>
                <Label for="brojZadataka">Broj zadataka:</Label>
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
