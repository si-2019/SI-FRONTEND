import React from "react";
import OsnovniPodaci from "./osnovniPodaci";
import DodavanjeTipovaFileova from "./dodavanjeTipovaFileova";
import BodoviZadaca from "./bodoviZadaca";
import PreviewZadace from "./previewZadace";
import {Button} from 'reactstrap'

class KreiranjeZadace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idPredmeta: "",
      radnja: "Kreiranje",
      naziv: "",
      datum: "",
      vrijeme: "23:59",
      postavka: "",
      brojZadataka: 1,
      sviTipoviIsti: false,
      listaTipova: [[false, false, false, false, false]],
      sviBodoviIsti: false,
      listaBodova: [],
      ukupnoBodova: 0,
      kreiranjeIliPreview: "Kreiranje"
    };
  }
  /*
    setAllState = () => {
        if(this.props === null) { // u pitanju je kreiranje i state su defaultni
            this.setState = () => {
                this.state.idPredmeta = 1;
            }
        }
        else { // u pitanju je azuriranje i state treba popuniti podacima iz propsa koji sadrzi sve podatke

        }

    }
*/

  componentWillMount = () => {
  }

  componentDidMount = () => {
    document.getElementById("kreiranje").style.display = "block";
    document.getElementById("preview").style.display = "none";
  }

  handleClick = (event) => {
    var name = event.target.name;
    console.log(name);
    switch(name) {
      case "idiNaPreview": {
        document.getElementById("kreiranje").style.display = "none";
        document.getElementById("preview").style.display = "block";
        this.setState({
          kreiranjeIliPreview: "Preview"
        });
        break;
      }
      case "idiNaKreiranjeZadace": {
        document.getElementById("kreiranje").style.display = "block";
        document.getElementById("preview").style.display = "none";
        this.setState({
          kreiranjeIliPreview: "Kreiranje"
        });
        break;
      }
      default: {

      }
    }
  };

  onChangeNaziv = event => {
    this.setState({
      naziv: event.target.value
    });
  };

  onChangeDatum = event => {
    this.setState({
      datum: event.target.value
    });
  };

  onChangeVrijeme = event => {
    this.setState({
      vrijeme: event.target.value
    });
  };

  onChangeSviBodoviIsti = () => {
    var daLi = document.getElementById("customSwitch1").checked === true;
    this.setState({ sviBodoviIsti: daLi });
  };

  onChangeBrojZadataka = event => {
    var noviBrojZadataka = event.target.value;
    if (noviBrojZadataka > 10) noviBrojZadataka = 10;
    if (noviBrojZadataka < 1) noviBrojZadataka = 1;
    var novaListaTipova = [];

    for (var i = 0; i < noviBrojZadataka; i++) {
      novaListaTipova.push([false, false, false, false, false]);
    }

    this.setState({
      brojZadataka: noviBrojZadataka,
      listaTipova: novaListaTipova,
      sviTipoviIsti: false
    });
  };

  onChangeListaTipova = (i, j) => {
    var noviNiz = this.state.listaTipova;
    if (this.state.sviTipoviIsti === false) {
      noviNiz[i][j] = !this.state.listaTipova[i][j];
    } else {
      noviNiz[0][j] = !noviNiz[0][j];
      for (var k = 1; k < this.state.brojZadataka; k++) {
        noviNiz[k][j] = noviNiz[0][j];
      }
    }

    this.setState({
      listaTipova: noviNiz
    });
  };

  onChangeSviTipoviIsti = () => {
    var oznaceno = document.getElementById("switchTip");
    this.setState({ sviTipoviIsti: oznaceno.checked });
  };

  klik_isti_br_bod = () => {
    var isti_br_bod = parseInt(document.getElementById("brbod").value);

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

  unioBodove = () => {
    var suma = 0;

    var noviNiz = [];
    for (let i = 1; i <= this.state.brojZadataka; i++) {
      if (document.getElementById(i) !== null) {
        if (document.getElementById(i).value !== "") {
          let temp = document.getElementById(i).value;
          suma += parseInt(temp);
          noviNiz.push(temp);
        } else noviNiz.push(0);
      }
    }

    this.setState({ listaBodova: noviNiz });
    this.setState({ ukupnoBodova: suma });
    document.getElementById("ukupnoStanje").innerHTML = suma;
  };

  render() {
    return (
      <div>
        <div id="kreiranje">
          <OsnovniPodaci podaci={this} />
          <DodavanjeTipovaFileova podaci={this} />
          <BodoviZadaca podaci={this} />
          <Button id="idiNaPreview" name="idiNaPreview" onClick={this.handleClick} color="info">
            Preview zadace
          </Button>
        </div>
        <div id="preview">
          <PreviewZadace podaci={this} />
          <Button id="idiNaKreiranjeZadace" name="idiNaKreiranjeZadace" onClick={this.handleClick} color="info">
            Kreiranje zadace
          </Button>
        </div>  
      </div>
    );
  }
}

export default KreiranjeZadace;
