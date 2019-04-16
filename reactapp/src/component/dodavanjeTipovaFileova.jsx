import React from "react";
import { CustomInput, Form, FormGroup, Label, Input, Table } from "reactstrap";
import "../bootstrap.css";

//BITNO!!!!!!
//ID-evi ovih checkboxova su Zadatak + broj zadatka + koja im je ekstenzija

class DodavanjeTipovaFileova extends React.Component {

 

  render() {
    //Ovako se pristupa onim props i komponentama što sam od Petra uzela
    var kk = this.props.podaci.state.naziv;

    //Pravim niz za prvi red one tabele gdje piše Naziv zadaće, Zadatak 1, Zadatak 2 itd.
    var kolone = [];
    for (var i = 1; i <= this.props.podaci.state.brojZadataka; i++) {
      kolone.push("Zadatak " + i);
    }

    return (
      <div>
        <Form>
          <div className="card-header bg-primary text-light  mb-4">
            <h4>
              <b>Tipovi fileova za svaki zadatak</b>
            </h4>
          </div>
          <FormGroup tag="fieldset">
            <legend>Da li svi brojZadataka imaju iste tipove fileova:</legend>

            {/*Ovdje se provjerava na onChange je li označeno DA ili NE */}
            <CustomInput
              checked={this.props.podaci.state.sviTipoviIsti}
              type="switch"
              id="switchTip"
              name="customSwitch"
              label="DA"
              onChange={this.props.podaci.istiTipoviFileova}
            />
          </FormGroup>
          <FormGroup>
            <Table className="table table-bordered text-center bg-active border-solid">
              <thead>
                <tr className="bg-primary text-light">
                  <th>Naziv zadaće</th>
                  {/*Ovim prolazim kroz onaj niz kolona i pravim kolone :D */}
                  {kolone.map(jedno => (
                    <th scope="col" key={jedno}>
                      {jedno}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/*Tu samo dodijeli ovu napravkjenu varijablu i kako se kod petra kuca ovdje će se prikazivati :D*/}
                  <th scope="row">{kk}</th>

                  {/*Prolazim kroz sve kolone, ovo jedno je jedan element tog niza kolone, 
                                i pomoću map se izdvajaju ti elementi. pravim novu kolonu i u svaku kolonu stavljam ove iste checkboxove
                                */}
                  {kolone.map(jedno => (
                    <th scope="col">
                      <td>
                        {/*Za svaki ovaj checkbox pojedinačno  dodijelim tipa atribut jedno = Zadatak1 i svakom checkboxu dodijelim
                                            novi id sa ekstenzijom, i onda na onChange mi je trebalo dvije stvari da se odrade pa imam ovu funkciju.
                                            Tu postavim ovu trenutnaEkstenzija iz statea i gore joj mogu pristupati i pozovem ovu označi šta treba :D i tako za svaki checkbox :D
                                            */}                      
                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id={jedno + "pdf"}
                            onChange={e => {
                              this.props.podaci.state.trenutnaEkstenzija = "pdf";
                              this.props.podaci.oznaciStaTreba(e);
                            }}
                          />{" "}
                          <Label check className="ml-4">
                            .pdf
                          </Label>
                        </FormGroup>

                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id={jedno + "zip"}
                            onChange={e => {
                                this.props.podaci.state.trenutnaEkstenzija = "zip";
                              this.props.podaci.oznaciStaTreba(e);
                            }}
                          />{" "}
                          <Label check className="ml-4">
                            .zip
                          </Label>
                        </FormGroup>

                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id={jedno + "m"}
                            onChange={e => {
                                this.props.podaci.state.trenutnaEkstenzija = "m";
                              this.props.podaci.oznaciStaTreba(e);
                            }}
                          />{" "}
                          <Label check className="ml-4">
                            .m
                          </Label>
                        </FormGroup>

                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id={jedno + "doc"}
                            onChange={e => {
                                this.props.podaci.state.trenutnaEkstenzija = "doc";
                              this.props.podaci.oznaciStaTreba(e);
                            }}
                          />{" "}
                          <Label check className="ml-4">
                            .doc
                          </Label>
                        </FormGroup>

                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id={jedno + "txt"}
                            onChange={e => {
                                this.props.podaci.state.trenutnaEkstenzija = "txt";
                              this.props.podaci.oznaciStaTreba(e);
                            }}
                          />{" "}
                          <Label check className="ml-4">
                            .txt
                          </Label>
                        </FormGroup>
                      </td>
                    </th>
                  ))}
                </tr>
              </tbody>
            </Table>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default DodavanjeTipovaFileova;
