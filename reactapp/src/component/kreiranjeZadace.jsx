import React, { Component } from "react";
import OsnovniPodaci from "./osnovniPodaci";
import DodavanjeTipovaFileova from "./dodavanjeTipovaFileova";
import BodoviZadaca from "./bodoviZadaca";
import PreviewZadace from "./previewZadace";
import {Button, Modal, ModalFooter, ModalBody, ModalHeader} from 'reactstrap';

class KreiranjeZadace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idPredmeta: "",
      radnja: "Kreiranje",
      naziv: "",
      datum: "2019-01-01",
      vrijeme: "23:59",
      postavka: "",
      brojZadataka: "1",
      sviTipoviIsti: false,
      listaTipova: [[false, false, false, false, false]],
      sviBodoviIsti: false,
      listaBodova: [],
      ukupnoBodova: 0,
      validno: true,
      porukeGreske: []
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

  datumValidan(){
    var trengodina=new Date().getFullYear()
    var trenmjesec=(new Date().getMonth()+1)
    var trendan=new Date().getDate()
    var nasagodina=Number.parseInt(this.state.datum.substring(0,4))
    var nasmjesec=Number.parseInt(this.state.datum.substring(5,7))
    var nasdan=Number.parseInt(this.state.datum.substring(8,10))

    if(trengodina>nasagodina)
      return false;
    if((trengodina==nasagodina) && (trenmjesec>nasmjesec))
      return false;
    if((trengodina==nasagodina) && (trenmjesec==nasmjesec) && (trendan>nasdan))
      return false;
    if((trengodina==nasagodina) && (trenmjesec==nasmjesec) && (trendan==nasdan) && (this.state.vrijeme!="23:59"))
      return false;
    return true;
  }
    
  validation = () => {
    var porukeGreske = [];

    var data = this.state;

    if(data.naziv.length < 2 || data.naziv.length > 30) {
      porukeGreske.push("Naziv mora sadrzavati izmedju 2 i 30 karaktera!");
    }
    if(data.brojZadataka.includes(".")) {
      porukeGreske.push("Broj zadataka mora biti cijeli broj!");
    }
    if(!this.datumValidan()){
      porukeGreske.push("Datum i vrijeme moraju biti postavljeni minimum na danas u 23:59!");  
    }
    if(data.listaBodova.length === 0) {
      porukeGreske.push("Potrebno je unijeti maksimalne bodove za zadatke!");
    }
    for(var i = 0; i < data.listaTipova.length; i++) {
      var sviTipoviJednogZadatkaIsti = false;
      for(var j = 0; j < 5; j++) {
        if(data.listaTipova[i][j] === true) {
          sviTipoviJednogZadatkaIsti = true;
          break;
        }
      }
      if(!sviTipoviJednogZadatkaIsti) {
        porukeGreske.push("Potrebno je unijeti tipove za svaki zadatak!");
        break;
      }
    }
      
    data.listaBodova.forEach(element => {
      console.log(element)
      if(parseFloat(element) <= 0) {
        porukeGreske.push("Bodovi moraju biti uneseni i broj bodova mora biti veci on 0!");
        return porukeGreske;
      }
      if(isNaN(parseInt(element))){
        porukeGreske.push("Broj bodova mora biti broj!");
        return porukeGreske;
      }
      if(parseFloat(element) > 100){
        porukeGreske.push("Broj bodova mora biti manji od 100!");
        return porukeGreske;
      }   
      if(parseInt(element*100) !== element*100) {
        porukeGreske.push("Broj bodova moze imati najvise dvije decimale!")
        return porukeGreske;
      }
    });

    return porukeGreske;
  }

  handleClick = (event) => {
    var name = event.target.name;
  
    switch(name) {
      case "idiNaPreview": {

        var porukeGreske = this.validation();
        
        this.setState({
          porukeGreske: porukeGreske
        });

        var valid = porukeGreske.length == 0 ? true : false;

        if(valid) {  
          document.getElementById("kreiranje").style.display = "none";
          document.getElementById("preview").style.display = "block";
          this.setState({
            validno: true
          });
        }
        else { 
          console.log(porukeGreske);
          this.setState({
            validno: false
          });
        }  
        break;
      }
      case "idiNaKreiranjeZadace": {
        document.getElementById("kreiranje").style.display = "block";
        document.getElementById("preview").style.display = "none";
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

  unioBodove = () => {
    var suma = 0;

    var noviNiz = [];
    for (let i = 1; i <= this.state.brojZadataka; i++) {
      if (document.getElementById(i) !== null) {
        if (document.getElementById(i).value !== "") {
          let temp = document.getElementById(i).value;
          suma += parseFloat(temp);
          noviNiz.push(temp);
        } else noviNiz.push(0);
      }
    }

    this.setState({ listaBodova: noviNiz });
    this.setState({ ukupnoBodova: suma });
    document.getElementById("ukupnoStanje").innerHTML = suma;
    console.log(this.state.listaBodova)
  };

  ugasiModal = event => {
    this.setState({
      validno: true
    });
  };

  render() {
    console.log(this.state);
    return (
      <div> 
        <div>
        <Modal isOpen={!this.state.validno}>
          <ModalHeader>
            Greška!
          </ModalHeader>
          <ModalBody>
            {this.state.porukeGreske.map((poruka, indeks) => (
                <p key={poruka + indeks} > {poruka} </p> 
              ))}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.ugasiModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
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
