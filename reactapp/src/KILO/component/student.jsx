import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TabelaPregledaZadaca from "./tabelaPregledaZadaca";
import { taggedTemplateExpression } from "@babel/types";
import PrviPutSlanjeZadatka from "./prviPutSlanjeZadatka";
import ZadatakVecPoslan from "./zadatakVecPoslan";

//user story 68 i user story 66 pushani skupa
class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaZadaca: ["Zadaća 1", "Zadaća 2", "Zadaća 3", "Zadaća 4"],
      listaZadataka: ["Zadatak 1", "Zadatak 2", "Zadatak 3"],
      maxBodoviPoZadacimaPoZadacama: [
        [2, 3, 4],
        [1, 2, 3],
        [1, 2, 3],
        [1, 1, 3]
      ],
      bodoviPoZadacimaZadaca: [[2, 3, 4], [1, 0, 3], [1, 2, 3], [0, 0, 3]],
      potrebno: [[], [], [], []],
      ukupnoBodova: [],
      moguceBodova: [],
      postavka: [],
      rokZaPredaju: [
        "2020-12-01 23:59",
        "2020-12-01 23:59",
        "2020-12-01 23:59",
        "2020-12-01 23:59"
      ],
      stanjeZadacaPoZadacima: [[0, 0, 0], [2, 2, 2], [3, 4, 0], [1, 1, 1]],
      brojZadace: 0,
      brojZadatka: 0,
      listaTipova: [".pdf", ".rar", ".doc"],
      datumSlanja: "25.05.19",
      vrijemeSlanja: "23:23",
      nazivFajla: "Zadatak1",
      velicinaFajla: "1MB",
      komentar:
        "zadaca je ok zadaca je ok zadaca je ok zadaca je ok zadaca je ok"
    };
  }

  obracunBodova = () => {
    var arr = new Array(this.state.bodoviPoZadacimaZadaca.length);

    for (var i = 0; i < this.state.bodoviPoZadacimaZadaca.length; i++) {
      arr[i] = new Array(this.state.bodoviPoZadacimaZadaca[i].length);
    }

    var pomocniUkupno = [];
    var pomocniMoguce = [];

    for (var i = 0; i < this.state.bodoviPoZadacimaZadaca.length; i++) {
      var zbirUkupno = 0;
      var zbirMoguce = 0;
      for (var j = 0; j < this.state.bodoviPoZadacimaZadaca[i].length; j++) {
        arr[i][j] =
          this.state.bodoviPoZadacimaZadaca[i][j] +
          "/" +
          this.state.maxBodoviPoZadacimaPoZadacama[i][j];
        zbirUkupno = zbirUkupno + this.state.bodoviPoZadacimaZadaca[i][j];
        zbirMoguce =
          zbirMoguce + this.state.maxBodoviPoZadacimaPoZadacama[i][j];
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

  componentDidMount = () => {
    this.obracunBodova();

    document.getElementById("tabelaPregledaZadaca").style.display = "block";
    document.getElementById("prviPutSlanjeZadatka").style.display = "none";
    document.getElementById("zadatakVecPoslan").style.display = "none";
  };

  klikNaPoslati = (r, k) => {
    document.getElementById("tabelaPregledaZadaca").style.display = "none";
    document.getElementById("prviPutSlanjeZadatka").style.display = "block";
    document.getElementById("zadatakVecPoslan").style.display = "none";

    this.setState({
      brojZadace: r+1,
      brojZadatka: k+1
    });
  };

  

  klikNaVecPoslano = (r, k) => {
    document.getElementById("tabelaPregledaZadaca").style.display = "none";
    document.getElementById("prviPutSlanjeZadatka").style.display = "none";
    document.getElementById("zadatakVecPoslan").style.display = "block";

    this.setState({
      brojZadace: r+1,
      brojZadatka: k+1
    });
  };

  handleClick = event => {
    var ime = event.target.name; //name uzmem

    if (ime === undefined) ime = "arrowLeft"; //ne znam sto nece da iscita name ikone

    switch (ime) {
      //ako je rok prosao, blokirati upload

      case "posaljiZadatak": {
        //poslati backendu fajl
        var nazivUploada = document.getElementById("uploadButton").value;
        console.log("Posalji zadatak dugme aktivirano "+nazivUploada);
        break;
      }
      case "ponisti": {
        document.getElementById("uploadButton").value = "";
        break;
      }

      case "arrowLeft": {
        //ide na Edininu tabelu, back dugme
        //console.log("back Dugme aktivirano");
        document.getElementById("tabelaPregledaZadaca").style.display = "block";
    document.getElementById("prviPutSlanjeZadatka").style.display = "none";
    document.getElementById("zadatakVecPoslan").style.display = "none";
        break;
      }
      case "preuzmi": {
        //salji na rutu u backendu
        console.log("preuzmi button acitvated");
        break;
      }

      case "pregled": {
        //salji na rutu u backendu
        console.log("pregled button acitvated");
        break;
      }
      default: {
      }
    }
  };

  render() {
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
