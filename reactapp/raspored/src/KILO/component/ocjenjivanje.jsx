import React, { Component } from "react";
import OcjenjivanjeJedanZadatak from "./ocjenjivanjeJedanZadatak";
import OcjenjivanjePocetna from "./ocjenjivanjePocetna";

class Ocjenjivanje extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaZadaca: ["Prva", "Druga", "Treca", "Cetvrta", "Peta"],
      studentiNisuPoslali: ["Neko", "Nekic", "Medi", "Haker"],
      studentiNijePregledano: ["Mala Mu", "Nekic", "Medi", "Haker"],
      studentiPregledano: ["Charmander", "Nekic", "Medi", "Haker"],
      brojZadace: 2,
      brojZadatka: 3,
      osvojeniBodovi: 0,
      prepisano: false,
      komentar: "Alles gute Brudeeer",
      maxBrojBodovaZadatka: 5
    };
  }

  componentDidMount = () => {
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

  handleBackNaJednaZadaca = () => {
    //kada se nalazi na ocjenjivanju zadatka, back ga vodi na tvoju tabelu, (za 1 zadacu)
    //kreiraj drugi handle back na ovaj fazon, koji ga vodi sa tvoje na pocetnu
    document.getElementById("ocjenjivanjePocetna").style.display = "none";
    document.getElementById("ocjenjivanjeJednaZadaca").style.display = "block";
    document.getElementById("ocjenjivanjeJedanZadatak").style.display = "none";
  };

  render() {
    return (
      <div>
        <div id="ocjenjivanjePocetna">
          <OcjenjivanjePocetna podaci={this} />
        </div>
        <div>
          <div id="ocjenjivanjeJednaZadaca">
            {/*ovdje ubaci svoju komponentu */}
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
