import React, { Component } from "react";
import axios from "axios";
import "./bootstrap.min.css";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class UgovorOUcenju extends Component {
  //fali api za dobavljanje smjerova iz baze
  //fali api za obavezne predmete
  constructor() {
    super();
    this.state = {
      izabranaGodina: 1,
      izabraniSmjer: 1,
      izabraniSemestar: 1,
      listaIzbornih: [],
      listaObaveznih: [],
      hasError: false,
      studentId: 1,
      pdfUrl: null,
      ime: "Neko",
      prezime: "Neko",
      indeks: "00000",
      ciklus: 1,
      sviSmjerovi: []

    };
    this.handleCreate = this.handleCreate.bind(this);
    this.handlePrikaz = this.handlePrikaz.bind(this);
    this.promjenaGodineStudija = this.promjenaGodineStudija.bind(this);
    this.promjenaSmjera = this.promjenaSmjera.bind(this);
    this.promjenaSemestra = this.promjenaSemestra.bind(this);
    this.prikaziIzborne = this.prikaziIzborne.bind(this);
  }
  handleCreate() {
    //kreiranje ugovora
    //popravi smjer
    console.log("odsjek: " + this.state.izabraniSmjer);
    axios
      .get("http://localhost:31918/ugovori/kreiraj/" + this.state.studentId, {
        ime: this.state.ime,
        prezime: this.state.prezime,
        semestar: this.state.izabraniSemestar,
        ciklus: this.state.ciklus,
        odsjek: this.state.izabraniSmjer,
        indeks: this.state.indeks,
        obavezni: this.state.listaObaveznih,
        izborni: this.state.listaIzbornih,
        godina: this.state.izabranaGodina
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(res => {
        console.log("greskaaa");
      });

  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  promjenaGodineStudija(event) {
    this.setState({ izabranaGodina: event.target.value }, function () {
      console.log(this.state.izabranaGodina);
      if (this.state.izabranaGodina <= 3) {
        this.setState({
          ciklus: 1
        })
      }
      else if (this.state.izabranaGodina >= 5 && this.state.izabranaGodina <= 6) {
        this.setState({
          ciklus: 2
        })
      }
      else {
        this.setState({
          ciklus: 3
        })
      }
      this.prikaziIzborne();
    });
  }

  promjenaSmjera(event) {
    this.setState({ izabraniSmjer: event.target.value }, function () {
      console.log(this.state.izabraniSmjer);
      this.prikaziIzborne();
    });
  }

  promjenaSemestra(event) {
    this.setState({ izabraniSemestar: event.target.value }, function () {
      console.log(this.state.izabraniSemestar);
      this.prikaziIzborne();
    });
  }

  prikaziIzborne() {
    try {
      axios
        .get(
          `http://localhost:31918/predmeti/` +
          this.state.izabraniSmjer +
          `/` +
          this.state.izabranaGodina +
          `/` +
          this.state.izabraniSemestar
        )
        .then(res => {
          const predmeti = res.data.dostupniPredmeti.map(obj => obj.naziv);
          const obavezan = res.data.dostupniPredmeti.map(obj => obj.obavezan);
          const izborni = [];
          const obavezniPredmeti = [];
          for (var i = 0; i < obavezan.length; i++) {
            if (obavezan[i] == "0") {
              izborni.push(predmeti[i]);
            }
            else{
              obavezniPredmeti.push(predmeti[i]);
            }
          }
          console.log("obavezni predmeti: " + obavezniPredmeti);
          this.setState({
            listaIzbornih: izborni,
            listaObaveznih: obavezniPredmeti
          });
        });
    } catch (e) { }
  }

  componentDidMount() {
    this.prikaziIzborne();
    //dobavljanje ugovora za prikaz
    axios
      .get("http://localhost:31918/ugovori/url/" + this.state.studentId)
      .then(res => {
        this.setState({
          pdfUrl: res.data.link
        });
      })
      .catch(res => {
        console.log(res.error);
      });

    //dobavljanje studenta
    axios
      .get("http://localhost:31918/studenti/" + this.state.studentId)
      .then(res => {
        this.setState({
          ime: res.data.ime,
          prezime: res.data.prezime,
          indeks: res.data.index
        });
      })
      .catch(res => {
        console.log(res.error);
      });

    axios
      .get()
      .then()
      .catch();
  }
  handlePrikaz() {
    //prikaz u prozoru
    const win = window.open("", "_self");
    let html = '';

    html += '<html>';
    html += '<body style="margin:0!important">';
    html += '<embed width="100%" height="100%" src="' + this.state.pdfUrl + '" type="application/pdf" />';
    html += '</body>';
    html += '</html>';

    setTimeout(() => {
      win.document.write(html);
    }, 0);
  }

  render() {
    return (
      <div>
        <div className="row" style={{ margin: "0px" }}>
          <div className="col" />
          <div className="col" style={{ textAlign: "center" }}>
            <div className="card" style={{ display: "inline-block" }}>
              <div className="card-body">
                <h3 className="card-title">Ugovor o učenju</h3>
                <div style={{ textAlign: "left" }}>
                  <label className="col-form-label col-form-label-lg">
                    Godina studija
                  </label>
                </div>

                <select
                  className="custom-select"
                  onChange={e => this.promjenaGodineStudija(e)}
                >
                  <option value="1">1.</option>
                  <option value="2">2.</option>
                  <option value="3">3.</option>
                  <option value="4">4.</option>
                  <option value="5">5.</option>
                  <option value="6">6.</option>
                  <option value="7">7.</option>
                  <option value="8">8.</option>
                </select>

                <div style={{ textAlign: "left" }}>
                  <label className="col-form-label col-form-label-lg">
                    Smjer
                  </label>
                </div>
                <select
                  className="custom-select"
                  onChange={e => this.promjenaSmjera(e)}
                >
                  <option value="1">RI</option>
                  <option value="2">AiE</option>
                  <option value="3">TK</option>
                  <option value="4">EE</option>
                </select>

                <div style={{ textAlign: "left" }}>
                  <label className="col-form-label col-form-label-lg">
                    Semestar
                  </label>
                </div>
                <select
                  className="custom-select"
                  name="semestri"
                  onChange={e => this.promjenaSemestra(e)}
                >
                  <option value="1">1.</option>
                  <option value="2">2.</option>
                </select>

                <div class="form-group">
                  <div style={{ textAlign: "left" }}>
                    <label className="col-form-label col-form-label-lg">
                      Izborni predmeti
                    </label>
                  </div>

                  {this.state.listaIzbornih.length === 0 ? (
                    <p>Nema izbornih predmeta</p>
                  ) : (
                      ""
                    )}
                  {this.state.listaIzbornih.map((item, i) => (
                    <div class="custom-control custom-checkbox" key={i}>
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id={"customCheck" + i}
                      />
                      <label
                        class="custom-control-label"
                        htmlFor={"customCheck" + i}
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
                <div style={{ visibility: "hidden" }}>dssffds</div>
                <div style={{ visibility: "hidden" }}>dssffds</div>
                <button type="submit" class="btn btn-primary btn-lg btn-block" onClick={this.handleCreate}>Kreiraj ugovor</button>
                <div style={{ visibility: "hidden" }}>dssffds</div>
                <div style={{ visibility: "hidden" }}>dssffds</div>

                <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.handlePrikaz}>Prikazi ugovor</button>
              </div>
            </div>
          </div>
          <div className="col" />
        </div>
      </div>
    );
  }
}

export default UgovorOUcenju;
