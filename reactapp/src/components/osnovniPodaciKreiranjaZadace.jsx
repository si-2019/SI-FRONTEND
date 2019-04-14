import React from "react";
import { Badge, Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

import DodavanjeTipovaFileova from "./dodavanjeTipovaFileova";
import BodoviZadaca from "./bodovi_zadaca";

import "./../bootstrap.css";

class OsnovniPodaciKreiranjaZadace extends React.Component {
  constructor(props) {
    super(props);
      console.log(this.props.data);
      console.log(this.props.brojZadataka);
    //Trebao je naziv i broj zadataka za Edinin i Medinin dio pa se ovdje čuva
    this.state = {
      naziv: "Naziv",
      brojZadataka: this.props.brojZadataka,
      // Podaci koji se trebaju prikupiti od drugih komponenti za PrikazZadace
      zadacaPreviewData: this.props.data
    };
  }

  //Ovim se postavlja broj zadataka iz state na onaj iz inputa  i ovaj dio pozivam na onChange tog inputa
  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      brojZadataka: event.target.value
    });
  };

  //Ovim se postavlja naziv iz state na onaj iz inputa i ovaj dio pozivam na onChange tog inputa
  nazivChange = event => {
    let zadacaPreviewDataTemp = JSON.parse(
      JSON.stringify(this.state.zadacaPreviewData)
    );
    zadacaPreviewDataTemp.naziv = event.target.value;
    this.setState({
      naziv: event.target.value,
      zadacaPreviewData: zadacaPreviewDataTemp
    });
  };
  // funkcija za prikupljannja vremena
  vrijemeChange = event => {
    let zadacaPreviewDataTemp = JSON.parse(
      JSON.stringify(this.state.zadacaPreviewData)
    );
    zadacaPreviewDataTemp.vrijeme = event.target.value;
    this.setState({
      zadacaPreviewData: zadacaPreviewDataTemp
    });
  };
  // funkcija za prikupljanje datuma kada se desi promjena
  datumChange = event => {
    let zadacaPreviewDataTemp = JSON.parse(
      JSON.stringify(this.state.zadacaPreviewData)
    );
    zadacaPreviewDataTemp.datum = event.target.value;
    this.setState({
      zadacaPreviewData: zadacaPreviewDataTemp
    });
  };
  // funckija za proslijedjivanje podataka na klik preview zadace
  zadacaPreviewClick = () => {
    this.props.onZadacaPreviewDataSet(this.state.zadacaPreviewData);
  };

  // funkcija za postavljanje liste bodova po zadacima
  listaBodovaSet = data => {
    let zadacaPreviewDataTemp = JSON.parse(
      JSON.stringify(this.state.zadacaPreviewData)
    );
    zadacaPreviewDataTemp.listaBodova = data;
    this.setState({
      zadacaPreviewData: zadacaPreviewDataTemp
    });
  };
  // funkcija za postavljanje liste tipova fajlova po zadacima
  listaTipovaSet = data => {
    let zadacaPreviewDataTemp = JSON.parse(
      JSON.stringify(this.state.zadacaPreviewData)
    );
    zadacaPreviewDataTemp.listaTipova = data;
    this.setState({
      zadacaPreviewData: zadacaPreviewDataTemp
    });
  };

  render() {
    //Ovu komponentu sam napravila da bih je proslijedila kao props svojoj komponenti
    var komponente = {
      ime: this.state.naziv,
      zadaci: this.state.brojZadataka
    };

    return (
      <div>
        <div class="p-1 d-flex justify-content-center mb-3">
          <div className="formaKreiranjaZadace" class="col-lg-6 col-sm-12 left">
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
                  value={this.state.zadacaPreviewData.naziv}
                  type="text"
                  name="naziv"
                  id="naziv"
                  placeholder="Upišite naziv"
                  onChange={this.nazivChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="datum">Datum roka predaje:</Label>
                <Input
                  value={this.state.zadacaPreviewData.datum}
                  type="date"
                  name="datum"
                  id="datum"
                  onChange={this.datumChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="vrijeme">Vrijeme roka predaje:</Label>
                <Input
                  value={(()=>{
                      switch(this.state.zadacaPreviewData.vrijeme){
                        case "": return "23:59"
                        default: return this.state.zadacaPreviewData.vrijeme
                      }
                  })()}
                    
                  type="time"
                  name="vrijeme"
                  id="vrijeme"
                  placeholder="time placeholder"
                  onChange={this.vrijemeChange}
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
                  value={this.state.brojZadataka}
                  type="number"
                  pattern="[0-9]{0,5}"
                  name="brojZadataka"
                  id="brojZadataka"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Form>
          </div>
          <div class="col-lg-6 col-sm-12 right">
            {/* Tu proslijeđujem pomoću props one komponente koje mi trebaju u Edininu komponentu - kasnije se pomoću props pristupa*/}
            <DodavanjeTipovaFileova
              komponente={komponente}
              setListaTipova={this.listaTipovaSet}
            />
          </div>
        </div>
        <div>
          {/* Tu proslijeđujem pomoću one komponente koje mi trebaju u Medininu  komponentu*/}
          <BodoviZadaca
            broj_zad={komponente.zadaci}
            setListaBodova={this.listaBodovaSet}
            listaBodova={this.state.zadacaPreviewData.listaBodova}
          />
        </div>

        <button
            type="button"
            className="btn bg-primary ml-3"
            onClick={this.predmetPreviewClick} id="dugme">
            Povratak 
        </button>

        <button
          id="Kreiraj"
          type="button"
          className="btn btn-secondary ml-3"
          onClick={this.zadacaPreviewClick}
        >
          Kreiraj zadaću
        </button>
      </div>
    );
  }
}

export default OsnovniPodaciKreiranjaZadace;
