import React, { Component } from "react";
import axios from "axios";
import OsnovniPodaci from "./osnovniPodaci";
import DodavanjeTipovaFileova from "./dodavanjeTipovaFileova";
import BodoviZadaca from "./bodoviZadaca";
import PreviewZadace from "./previewZadace";
import { Button, Modal, ModalFooter, ModalBody, ModalHeader } from "reactstrap";
import {
  inicijalizirajBrojZadataka,
  promjeniListuTipova,
  promjenaBodova
} from "../utils/kreiranje-zadace";

class KreiranjeZadace extends Component {
  constructor(props) {
    super(props);
    const urlParams = new URLSearchParams(window.location.search);
    this.state = {
      idZadace : null,
      idPredmet: urlParams.get("idPredmeta")
        ? Number(urlParams.get("idPredmeta"))
        : 1,
      radnja: "Kreiranje",
      naziv: "",
      datum: "2019-12-01",
      vrijeme: "23:59",
      postavka: [null],
      brojZadataka: "1",
      sviTipoviIsti: false,
      listaTipova: [[false, false, false, false, false]],
      sviBodoviIsti: false,
      listaBodova: [],
      ukupnoBodova: 0,
      validno: true,
      porukeGreske: [],
      uspjehKreiranja: false,
      neuspjehKreiranja: false,
      vecPostojiImeZadace: false
    };
  }

  handleChangeProps = props => {
    if (props.mainState) {
      this.setState({
        ...this.state,
        ...props.mainState
      });
    }
  };

  onChangePostavka = e => { // ovo bi se trebalo ubaciti u funkciju iznad "handleChangeProps" ili koju vec da ne bude posebna
    if(e) {
      this.setState({
        postavka : e.target.files
      })
    }
  }

  componentDidMount = () => {
    document.getElementById("kreirajKilo").style.display = "block";
    document.getElementById("preview").style.display = "none";
    this.handleChangeProps(this.props);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.mainState && this.props.mainState !== nextProps.mainState)
      this.handleChangeProps(nextProps);
  }
  // pocetak validacije
  datumValidan() {
    var trengodina = new Date().getFullYear();
    var trenmjesec = new Date().getMonth() + 1;
    var trendan = new Date().getDate();
    var nasagodina = Number.parseInt(this.state.datum.substring(0, 4));
    var nasmjesec = Number.parseInt(this.state.datum.substring(5, 7));
    var nasdan = Number.parseInt(this.state.datum.substring(8, 10));

    if (trengodina > nasagodina) return false;
    if (trengodina == nasagodina && trenmjesec > nasmjesec) return false;
    if (trengodina == nasagodina && trenmjesec == nasmjesec && trendan > nasdan)
      return false;
    if (
      trengodina == nasagodina &&
      trenmjesec == nasmjesec &&
      trendan == nasdan &&
      this.state.vrijeme != "23:59"
    )
      return false;
    return true;
  }

  validation = () => {
    var porukeGreske = [];

    var data = this.state;

    if (data.naziv.length < 2 || data.naziv.length > 30) {
      porukeGreske.push("Naziv mora sadrzavati izmedju 2 i 30 karaktera!");
    }
    if (data.brojZadataka.toString().includes(".")) {
      porukeGreske.push("Broj zadataka mora biti cijeli broj!");
    }
    if (!this.datumValidan()) {
      porukeGreske.push(
        "Datum i vrijeme moraju biti postavljeni minimum na danas u 23:59!"
      );
    }
    if (data.listaBodova.length === 0) {
      porukeGreske.push("Potrebno je unijeti maksimalne bodove za zadatke!");
    }
    for (var i = 0; i < data.listaTipova.length; i++) {
      var sviTipoviJednogZadatkaIsti = false;
      for (var j = 0; j < 5; j++) {
        if (data.listaTipova[i][j] === true) {
          sviTipoviJednogZadatkaIsti = true;
          break;
        }
      }
      if (!sviTipoviJednogZadatkaIsti) {
        porukeGreske.push("Potrebno je unijeti tipove za svaki zadatak!");
        break;
      }
    }

    data.listaBodova.forEach(element => {
      if (parseFloat(element) <= 0) {
        porukeGreske.push(
          "Bodovi moraju biti uneseni i broj bodova mora biti veci on 0!"
        );
        return porukeGreske;
      }
      if (isNaN(parseInt(element))) {
        porukeGreske.push("Broj bodova mora biti broj!");
        return porukeGreske;
      }
      if (parseFloat(element) > 100) {
        porukeGreske.push("Broj bodova mora biti manji od 100!");
        return porukeGreske;
      }
      if (parseInt(element * 100) !== element * 100) {
        porukeGreske.push("Broj bodova moze imati najvise dvije decimale!");
        return porukeGreske;
      }
    });

    return porukeGreske;
  };
  // kraj validacije

  handleClick = event => {
    var name = event.target.name;

    switch (name) {
      case "idiNaPreview": {
        // prelazak sa kreiranja zadace na preview

        var porukeGreske = this.validation();

        this.setState({
          porukeGreske: porukeGreske
        });

        var valid = porukeGreske.length == 0 ? true : false;

        if (valid) {
          document.getElementById("kreirajKilo").style.display = "none";
          document.getElementById("preview").style.display = "block";
          this.setState({
            validno: true
          });
        } else {
          this.setState({
            validno: false
          });
        }
        break;
      }
      case "idiNaKreiranjeZadace": {
        // prelazak sa previewa na kreiranje zadace
        document.getElementById("kreirajKilo").style.display = "block";
        document.getElementById("preview").style.display = "none";
        break;
      }
      case "addZadaca": {
        const fData = new FormData();

        if(this.state.postavka[0] !== null) {
          var file = this.state.postavka[0];
          if(file) {
            fData.append('file', new Blob([file], {type: file.type}));
            fData.append('imeFajlaPostavke', file.name);
          }
        }
        fData.append('state', JSON.stringify(this.state));

        if(this.state.radnja === "Kreiranje") { 
          
          axios.post("http://localhost:31911/addZadaca", fData).then(res => {
            if (res.status === 200) {
              this.setState({ uspjehKreiranja: true });
            } else if (res.status === 201) {
              this.setState({ vecPostojiImeZadace: true });
            } else {
              this.setState({ neuspjehKreiranja: true });
            }
          }).catch(() => this.setState({ neuspjehKreiranja: true }));
        }
        
        else if(this.state.radnja==="Azuriranje") {
          axios.put(`http://localhost:31911/zadaca/${this.props.mainState.idZadaca}`, fData).then(res => {
            if (res.status === 200) {
              this.setState({ uspjehKreiranja: true });
            } else if (res.status === 201) {
              this.setState({ vecPostojiImeZadace: true });
            } else {
              this.setState({ neuspjehKreiranja: true });
            }
          });
        }  
      }
      default: {
      }
    }
  };

  klik_isti_br_bod = () => {
    var isti_br_bod = parseFloat(document.getElementById("brbod").value);

    var daLi = document.getElementById("customSwitch1").checked === true;
    this.setState({ sviBodoviIsti: daLi });

    var noviNiz = [];
    if (daLi) {
      var suma = 0;

      suma = this.state.brojZadataka * isti_br_bod;
      for (let i = 1; i <= this.state.brojZadataka; i++) {
        if (document.getElementById(i) !== null) {
          document.getElementById(i).value = isti_br_bod;
          noviNiz.push(isti_br_bod);
        }
      }

      this.setState({ listaBodova: noviNiz });
      document.getElementById("ukupnoStanje").innerHTML = suma;
      this.setState({ ukupnoBodova: suma });
    }
  };

  ugasiModal = event => {
    this.setState({
      validno: true
    });
  };

  handleChange = event => {
    let currentState = this.state;
    switch (event.target.name) {
      case "brojZadataka":
        currentState = {
          ...currentState,
          ...inicijalizirajBrojZadataka(event.target.value)
        };
        break;
      case "sviBodoviIsti":
      case "sviTipoviIsti":
        currentState[event.target.name] = event.target.checked;
        break;
      case "bodovi":
        currentState = {
          ...currentState,
          ...promjenaBodova(
            currentState.listaBodova,
            event.target.dataset.index,
            event.target.value
          )
        };
        break;
      default:
        currentState[event.target.name] = event.target.value;
    }
    this.setState({ ...currentState });
  };

  onChangeListaTipova = (i, j) => {
    const { listaTipova, brojZadataka, sviTipoviIsti } = this.state;

    this.setState({
      ...promjeniListuTipova(listaTipova, brojZadataka, sviTipoviIsti, i, j)
    });
  };

  ugasiPorukuUspjeh = () => {
    this.setState({ uspjehKreiranja: false });
  };

  ugasiPorukuNeuspjeh = () => {
    this.setState({ neuspjehKreiranja: false });
  };

  ugasiPorukuVecPostojiIme = () => {
    this.setState({ vecPostojiImeZadace: false });
  };

  render() {
    var radnjaGlagol;
    if(this.state.radnja==="Azuriranje")
    radnjaGlagol="ažurirali";
    else radnjaGlagol="kreirali";
    return (
      <div>
        <div>
          <Modal isOpen={!this.state.validno}>
            <ModalHeader>Greška!</ModalHeader>
            <ModalBody>
              {this.state.porukeGreske.map((poruka, indeks) => (
                <p key={poruka + indeks}> {poruka} </p>
              ))}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.ugasiModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.uspjehKreiranja}>
            <ModalHeader background-color={"success"}>
              <p className="text-success">
                {" "}
                <b>Čestitamo!</b>
              </p>
            </ModalHeader>
            <ModalBody>Uspješno ste {radnjaGlagol} zadaću.</ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.ugasiPorukuUspjeh}>
                OK
              </Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.neuspjehKreiranja}>
            <ModalHeader background-color={"danger"}>
              <p className="text-danger">
                {" "}
                <b>Dogodila se greška!</b>
              </p>
            </ModalHeader>
            <ModalBody> {this.state.radnja} zadaće nije uspjelo.</ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.ugasiPorukuNeuspjeh}>
                OK
              </Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.vecPostojiImeZadace}>
            <ModalHeader background-color={"warning"}>
              <p className="text-warning">
                {" "}
                <b>Upozorenje!</b>
              </p>
            </ModalHeader>
            <ModalBody>
              Kreiranje zadaće nije uspjelo. Već postoji zadaća sa nazivom " 
              {this.state.naziv} ".
            </ModalBody>
            <ModalFooter>
              <Button color="warning" onClick={this.ugasiPorukuVecPostojiIme}>
                OK
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <div id="kreirajKilo">
          <div class="container-fluid">
          <div class="row">
          <div class="col-3">
          <OsnovniPodaci
            title={this.props.title}
            onChange={this.handleChange}
            onChangePostavka={this.onChangePostavka}
            podaci={this}
          />
          </div>
          <div clas="col-3">
          <DodavanjeTipovaFileova onChange={this.handleChange} podaci={this} />
          </div>
       
          <div class="col-3">
          <BodoviZadaca onChange={this.handleChange} podaci={this} />
          </div>
          </div>
          </div>
          <Button
            id="idiNaPreview"
            name="idiNaPreview"
            onClick={this.handleClick}
            color="info"
            class="btn btn-primary"
          >
            Preview zadace
          </Button>
        </div>
        <div id="preview">
          <PreviewZadace podaci={this.state} />
          <Button 
             className=" btn bg-primary ml-4"
            id="idiNaKreiranjeZadace"
            name="idiNaKreiranjeZadace"
            onClick={this.handleClick}
           
          >
            Natrag
          </Button>
          <Button
            className=" btn bg-primary ml-4"
            id="addZadaca"
            name="addZadaca"
            onClick={this.handleClick}
          >
            Potvrdi
          </Button>
        </div>
      </div>
    );
  }
}

export default KreiranjeZadace;
