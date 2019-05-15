import React, { Component } from "react";
import OcjenjivanjeJedanZadatak from "./ocjenjivanjeJedanZadatak";
import OcjenjivanjePocetna from "./ocjenjivanjePocetna";
import OcjenjivanjeJednaZadaca from "./ocjenjivanjeJednaZadaca";

class Ocjenjivanje extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaZadaca: ["Prva", "Druga", "Zadaća 3", "Cetvrta", "Peta"],
      studentiNisuPoslali: ["Neko", "Nekic", "Medi", "Haker"],
      studentiNijePregledano: ["Mala Mu", "Nekic", "Medi", "Haker"],
      studentiPregledano: ["Charmander", "Nekic", "Medi", "Haker"],
      brojZadace: 2,
      brojZadatka: 3,
      osvojeniBodovi: 0,
      prepisano: false,
      komentar: "Alles gute Brudeeer",
      maxBrojBodovaZadatka: 5,
      student: "",
      zadaca: "",
      zadaciZadace: ["Zadatak 1", "Zadatak 2", "Zadatak 3", "Zadatak 4", "Zadatak 5"],
      postavkaZadace: "postavkica",
      moguciBodovi: [1,2,3,4,5],
      osvojeniBodovi: [1,1,1,1,1],
      rokZaPredaju: "2020-12-01 23:59", 
      stanjeZadatakaZadace: [0,1,2,3,4],
      sumaOsvojeni: 0,
      sumaMoguci:0,
      ostvareniMoguci: [],
      pregledana: false
    };
  }

  componentDidMount = () => {

    this.sumirajBodove();
    this.ostvareniBodovi();

    document.getElementById("ocjenjivanjePocetna").style.display = "block";
    document.getElementById("ocjenjivanjeJednaZadaca").style.display = "none";
    document.getElementById("ocjenjivanjeJedanZadatak").style.display = "none";
  };

  handleClick = event => {
    var ime = event.target.name; //name uzmem
    switch (ime) {
      case "osvojeniBodovi": {
        var osvojeno = document.getElementById("osvojeniBodovi").value;
        this.setState({ osvojeniBodovi: osvojeno });
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
      case "ok": {
        //salji podatke na rutu u backendu
        console.log("ok button acitvated");
        break;
      }

      case "otkazi": {
        //nista ne radi, ucitaj tabelu sa 1 zadacom

        console.log("otkazi button acitvated");
        //bukvalno fja handleBackNaJednaZadaca
        document.getElementById("ocjenjivanjePocetna").style.display = "none";
        document.getElementById("ocjenjivanjeJednaZadaca").style.display =
          "block";
        document.getElementById("ocjenjivanjeJedanZadatak").style.display =
          "none";
        break;
      }
      default: {
      }
    }
  };

  handleBackNaJednaZadaca = (student) => {
  
    this.setState({
      student: student.target.value
    });

    document.getElementById("ocjenjivanjePocetna").style.display = "none";
    document.getElementById("ocjenjivanjeJednaZadaca").style.display = "block";
    document.getElementById("ocjenjivanjeJedanZadatak").style.display = "none";
  };


  handleBackNaJednaIzborZadace = () => {
  
    document.getElementById("ocjenjivanjePocetna").style.display = "block";
    document.getElementById("ocjenjivanjeJednaZadaca").style.display = "none";
    document.getElementById("ocjenjivanjeJedanZadatak").style.display = "none";

  };

  handleNaOcjenjivanjeJedanZadatak = () => {
  
    document.getElementById("ocjenjivanjePocetna").style.display = "none";
    document.getElementById("ocjenjivanjeJednaZadaca").style.display = "none";
    document.getElementById("ocjenjivanjeJedanZadatak").style.display = "block";

  };

  postaviZadacu = (zadaca) => {
    
    this.setState({
      zadaca: zadaca.target.value
    });

  }

  sumirajBodove = () => {

    var sumaBodova = 0;

    for(var i=0;i<this.state.moguciBodovi.length;i++) sumaBodova = sumaBodova + this.state.moguciBodovi[i];

    this.setState({
      sumaMoguci: sumaBodova
    });

    sumaBodova = 0;

    for(var i=0;i<this.state.osvojeniBodovi.length;i++) sumaBodova = sumaBodova + this.state.osvojeniBodovi[i];

    this.setState({
      sumaOsvojeni: sumaBodova
    });

  }


  ostvareniBodovi = () => {
    var pomocniNiz = [];

    for(var i=0;i<this.state.moguciBodovi.length;i++) pomocniNiz.push(this.state.osvojeniBodovi[i] + "/" + this.state.moguciBodovi[i]);

    this.setState({
      ostvareniMoguci: pomocniNiz
    });
  }

  pregledajZadacu = (parametar) => {

    this.setState({
      pregledana: parametar
    });
  }

  render() {
    
    return (
      <div>
        <div id="ocjenjivanjePocetna">
          <OcjenjivanjePocetna podaci={this} />
        </div>
        <div>
          <div id="ocjenjivanjeJednaZadaca">
            {/*ovdje ubaci svoju komponentu */}
            <OcjenjivanjeJednaZadaca podaci={this}/>
          </div>
        </div>
        <div id="ocjenjivanjeJedanZadatak">
          <OcjenjivanjeJedanZadatak podaci={this} />
        </div>
      </div>
    );
  }
}

export default Ocjenjivanje;
