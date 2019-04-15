import React from "react";
import { CustomInput, Form, FormGroup, Label, Input, Table } from "reactstrap";
import "../bootstrap.css";

//BITNO!!!!!!
//ID-evi ovih checkboxova su Zadatak + broj zadatka + koja im je ekstenzija

class DodavanjeTipovaFileova extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //Oznaceno se odnosi na to da li je označen onaj element na DA (Da li želite da svi zadaci imaju isti broj bodova)
      oznaceno: false,
      // u eksten spremam koja je zadnja kliknuta ekstenzija filea.
      eksten: "pdf",
      listaTipova: [] //listaTipova je niz gdje spremamo odabrane ekstenzije za određeni zadatak
    };
  }

  istiTipoviFileova = () => {
    //Da li je označen onaj element na DA (Da li želite da svi zadaci imaju isti broj bodova)
    var jeLoznaceno = document.getElementById("switchTip");

    if (jeLoznaceno.checked === true) {
      this.setState({ oznaceno: true });

      var niz = ["pdf", "doc", "m", "zip", "txt"];

      //Ukoliko se izvršila promjena sa NE na DA, prođem kroz sve i označim da nisu čekirani jer mi je tako imalo smisla
      //ID-evi ovih checkboxova su Zadatak + broj zadatka + koja im je ekstenzija primjer "Zadatak 1pdf" - sa odvojenim zadatak i ostalo :D
      for (var j = 0; j < niz.length; j++) {
        var s = document.getElementById("Zadatak 1" + niz[j]);
        s.checked = false;
      }

      //Ovdje na promjenu disableam sve osim prvog i odznačim ih sve
      for (var i = 1; i < this.props.komponente.zadaci; i++) {
        var k = i + 1;

        for (j = 0; j < niz.length; j++) {
          s = document.getElementById("Zadatak " + k + niz[j]);
          s.disabled = true;
          s.checked = false;
        }
      }
    } else {
      this.setState({ oznaceno: false });

      niz = ["pdf", "doc", "m", "zip", "txt"];

      //Ovdje kad je na NE, ali radim slične stvari, haman iste :D
      for (j = 0; j < niz.length; j++) {
        s = document.getElementById("Zadatak 1" + niz[j]);
        s.checked = false;
      }

      for (i = 1; i < this.props.komponente.zadaci; i++) {
        k = i + 1;

        for (j = 0; j < niz.length; j++) {
          s = document.getElementById("Zadatak " + k + niz[j]);
          s.disabled = false;
          s.checked = false;
        }
      }
    }
  };

  //Ova funkcija služi kada se klikne na prvu da se označe i svi sa tom ekstenzijom, ako je na DA

  oznaciStaTreba = e => {
    if (this.state.oznaceno === true) {
      var p = document.getElementById("Zadatak 1" + this.state.eksten);

      if (p.checked === true) {
        //Preskoči prvi, ostale checkiraj
        for (var i = 1; i < this.props.komponente.zadaci; i++) {
          var k = i + 1;
          var s = document.getElementById("Zadatak " + k + this.state.eksten);
          s.checked = true;
        }
      } else {
        //Ako se promijeni da nije označen, i ostalim se skida da su označeni :D
        for (i = 1; i < this.props.komponente.zadaci; i++) {
          k = i + 1;
          s = document.getElementById("Zadatak " + k + this.state.eksten);
          s.checked = false;
        }
        this.state.listaTipova = [];
      }
    }
    var temp = this.state.listaTipova;
    temp[e.target.id[8] - 1] = "." + this.state.eksten;
    this.setState({
      listaTipova: temp
    });
    this.props.setListaTipova(this.state.listaTipova);
  };

  render() {
    //Ovako se pristupa onim props i komponentama što sam od Petra uzela
    var kk = this.props.komponente.ime;

    //Pravim niz za prvi red one tabele gdje piše Naziv zadaće, Zadatak 1, Zadatak 2 itd.
    var kolone = [];
    for (var i = 1; i <= this.props.komponente.zadaci; i++) {
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
            <legend>Da li svi zadaci imaju iste tipove fileova:</legend>

            {/*Ovdje se provjerava na onChange je li označeno DA ili NE */}
            <CustomInput
              type="switch"
              id="switchTip"
              name="customSwitch"
              label="DA"
              onChange={this.istiTipoviFileova}
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
                                            Tu postavim ovu eksten iz statea i gore joj mogu pristupati i pozovem ovu označi šta treba :D i tako za svaki checkbox :D
                                            */}
                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id={jedno + "pdf"}
                            onChange={e => {
                              this.state.eksten = "pdf";
                              this.oznaciStaTreba(e);
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
                              this.state.eksten = "zip";
                              this.oznaciStaTreba(e);
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
                              this.state.eksten = "m";
                              this.oznaciStaTreba(e);
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
                              this.state.eksten = "doc";
                              this.oznaciStaTreba(e);
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
                              this.state.eksten = "txt";
                              this.oznaciStaTreba(e);
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
