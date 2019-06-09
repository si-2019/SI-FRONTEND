import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TabelaPregledaZadaca from "./tabelaPregledaZadaca";
import { taggedTemplateExpression } from "@babel/types";
import PrviPutSlanjeZadatka from "./prviPutSlanjeZadatka";
import ZadatakVecPoslan from "./zadatakVecPoslan";
import { async } from "q";

/*0 "nije poslano", 
  1 "nije pregledano", 
  2 "pregledano", 
  3 "prepisano", 
  4 "komentar"*/

//user story 68 i user story 66 pushani skupa
class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zadacaState: {
        listaZadaca: [],
        listaZadataka: [],
        maxBodoviPoZadacimaPoZadacama: [],
        bodoviPoZadacimaZadaca: [],
        stanjeZadacaPoZadacima: [],
        postavka: [],
        rokZaPredaju: [],
        idPoZadacimaZadaca: []
      },
      potrebno: [
        [],
        [],
        [],
        []],
      ukupnoBodova: [],
      moguceBodova: [],
      blokirajSelect: false,
      blokirajSelect2: false,
      brojZadace: 0,
      brojZadatka: 0,
      listaTipova: [],
      datumSlanja: "",
      vrijemeSlanja: "",
      nazivFajla: "",
      velicinaFajla: "",
      komentar: "",
      idStudenta: 1,
      idZadatak: 0,
      idPredmeta: 3,
      uploadZadatka: [null]
    };
  }
  testirajVrijeme = (r) => {
    var povratna_vrijednost;
    var trengodina = new Date().getFullYear();
    var trenmjesec = new Date().getMonth() + 1;
    var trendan = new Date().getDate();
    var nasagodina = Number.parseInt(this.state.zadacaState.rokZaPredaju[r].substring(0, 4));
    var nasmjesec = Number.parseInt(this.state.zadacaState.rokZaPredaju[r].substring(5, 7));
    var nasdan = Number.parseInt(this.state.zadacaState.rokZaPredaju[r].substring(8, 10));
    if (trengodina > nasagodina) povratna_vrijednost = false;
    else if (trengodina === nasagodina && trenmjesec > nasmjesec) povratna_vrijednost = false;
    else if (trengodina === nasagodina && trenmjesec === nasmjesec && trendan > nasdan)
      povratna_vrijednost = false;
    else if (
      trengodina === nasagodina &&
      trenmjesec === nasmjesec &&
      trendan === nasdan &&
      this.state.vrijeme !== "23:59"
    )
      povratna_vrijednost = false;
    else povratna_vrijednost = true;
    return povratna_vrijednost;
  }

  obracunBodova = async (bodoviPoZadacimaZadaca, maxBodoviPoZadacimaPoZadacama) => {

    var arr = new Array(bodoviPoZadacimaZadaca.length);

    for (var i = 0; i < bodoviPoZadacimaZadaca.length; i++) {
      arr[i] = new Array(bodoviPoZadacimaZadaca[i].length);
    }
    var pomocniUkupno = [];
    var pomocniMoguce = [];

    for (var i = 0; i < bodoviPoZadacimaZadaca.length; i++) {
      var zbirUkupno = 0;
      var zbirMoguce = 0;
      for (var j = 0; j < bodoviPoZadacimaZadaca[i].length; j++) {
        arr[i][j] = bodoviPoZadacimaZadaca[i][j] + "/" +
          maxBodoviPoZadacimaPoZadacama[i][j];
        zbirUkupno = zbirUkupno + bodoviPoZadacimaZadaca[i][j];
        zbirMoguce = zbirMoguce + maxBodoviPoZadacimaPoZadacama[i][j];
      }
      pomocniUkupno.push(zbirUkupno);
      pomocniMoguce.push(zbirMoguce);
    }
    this.setState({
      potrebno: arr,
      ukupnoBodova: pomocniUkupno,
      moguceBodova: pomocniMoguce
    });
  };

  componentDidMount = async () => {
    //na osnovu indeksa studenta, prikupiti podatke o zadacama
    //2. parametar axiosa, je sta ce tamo biti u backendu req.body
    var pomoc = 3;
    try {
      const res = await axios.get(`http://localhost:31911/dajZadaceZaStudenta/${this.state.idStudenta}/${this.state.idPredmeta}`);
      this.setState({ zadacaState: res.data });
      this.obracunBodova(res.data.bodoviPoZadacimaZadaca, res.data.maxBodoviPoZadacimaPoZadacama);
    }
    catch (e) {
      console.error("Error fetching zadaca by id", e);
    }
    document.getElementById("tabelaPregledaZadaca").style.display = "block";
    document.getElementById("prviPutSlanjeZadatka").style.display = "none";
    document.getElementById("zadatakVecPoslan").style.display = "none";
  };

  klikNaPoslati = async (r, k) => {
    var vrijednostIdZadatka = this.state.zadacaState.idPoZadacimaZadaca[r][k];
    this.setState({ idZadatak: vrijednostIdZadatka });

    var povratna_vrijednost = this.testirajVrijeme(r);


    //validacija ako je rok prosao, nema liste tipova
    if (povratna_vrijednost) {
      await axios.get(`http://localhost:31911/dozvoljeniTipoviZadatka/${vrijednostIdZadatka}`).then(res => {
        this.setState({ listaTipova: res.data });
      });
      document.getElementById("uploadButton").disabled = false;
      this.setState({ blokirajSelect: false });
      if(this.state.uploadZadatka[0] !== null) {
        document.getElementById("posalji1").disabled = false;
      }
    }
    else {
      this.setState({ blokirajSelect: true });
      document.getElementById("uploadButton").disabled = true;
      document.getElementById("posalji1").disabled = true;
    }
    this.setState({
      brojZadace: r + 1,
      brojZadatka: k + 1
    });
    document.getElementById("tabelaPregledaZadaca").style.display = "none";
    document.getElementById("prviPutSlanjeZadatka").style.display = "block";
    document.getElementById("zadatakVecPoslan").style.display = "none";
  };

  klikNaVecPoslano = async (r, k) => {
    var vrijednostIdZadatka = this.state.zadacaState.idPoZadacimaZadaca[r][k];
    this.setState({ idZadatak: vrijednostIdZadatka });

    var povratna_vrijednost = this.testirajVrijeme(r);

    //validacija ako je rok prosao, nema liste tipova
    if (povratna_vrijednost) {
      await axios.get(`http://localhost:31911/dozvoljeniTipoviZadatka/${vrijednostIdZadatka}`).then(res => {

        this.setState({ listaTipova: res.data });


        document.getElementById("uploadButton2").disabled = false;
        this.setState({ blokirajSelect2: false });
        if(this.state.uploadZadatka[0] !== null) {
          document.getElementById("posalji2").disabled = false;
        }
      });
    }
    else {
      this.setState({ blokirajSelect2: true });
      document.getElementById("uploadButton2").disabled = true;
      document.getElementById("posalji2").disabled = true;
    }
    await axios.get(`http://localhost:31911/popuniZadatakVecPoslan/${vrijednostIdZadatka}`).then(res => {

      this.setState({
        datumSlanja: res.data.datumSlanja,
        vrijemeSlanja: res.data.vrijemeSlanja,
        nazivFajla: res.data.nazivFajla,
        velicinaFajla: res.data.velicinaFajla,
        komentar: res.data.komentar
      });
    });

    this.setState({
      brojZadace: r + 1,
      brojZadatka: k + 1
    });
    document.getElementById("tabelaPregledaZadaca").style.display = "none";
    document.getElementById("prviPutSlanjeZadatka").style.display = "none";
    document.getElementById("zadatakVecPoslan").style.display = "block";
  };

  handleClick = async event => {
    var ime = event.target.name; 

    switch (ime) {

      case "uploadFajla": {
        
        var nazivUploada = document.getElementById("uploadButton").value;
        if(nazivUploada === "") {
          nazivUploada = document.getElementById("uploadButton2").value;
        }

        var ekstenzija = '.' + nazivUploada.split('.').pop();

        if (this.state.listaTipova.includes(ekstenzija)) {
          this.setState({
            uploadZadatka : event.target.files
          })
        } else {
          this.setState({
            uploadZadatka : [null]
          })
          document.getElementById("uploadButton").value = null;
          document.getElementById("uploadButton2").value = null;
          alert("Nije dobar tip")
        }
        
        break;
      }

      case "posaljiZadatak": {
        this.setState({ nazivFajla: nazivUploada });
        await axios.post("http://localhost:31911/slanjeZadatka", nazivUploada).then(res => {

        });
          
        break;
      }

      case "ponisti": {
        this.setState({
          uploadZadatka : [null]
        })
        document.getElementById("uploadButton").value = null;
        document.getElementById("uploadButton2").value = null;

        break;
      }

      case "preuzmi": {
        //salji na rutu u backendu
        await axios.get("http://localhost:31911/getDatoteku").then(res => {
        });
        break;
      }

      case "pregled": {
        //salji na rutu u backendu

        await axios.get("http://localhost:31911/getPregledDatoteke").then(res => {
        });
        break;
      }
      default: {
      }
    }
  };

  handleBack = () => {
    document.getElementById("tabelaPregledaZadaca").style.display = "block";
    document.getElementById("prviPutSlanjeZadatka").style.display = "none";
    document.getElementById("zadatakVecPoslan").style.display = "none";
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <div id="tabelaPregledaZadaca">
          <TabelaPregledaZadaca podaci={this} />
        </div>
        <div id="prviPutSlanjeZadatka">
          <PrviPutSlanjeZadatka podaci={this} />
        </div>
        <div id="zadatakVecPoslan">
          <ZadatakVecPoslan podaci={this} />
        </div>
      </div>
    );
  }
}

export default Student;


