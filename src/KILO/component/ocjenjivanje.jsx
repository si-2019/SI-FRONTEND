import React, { Component } from "react";
import OcjenjivanjeJedanZadatak from "./ocjenjivanjeJedanZadatak";
import OcjenjivanjePocetna from "./ocjenjivanjePocetna";
import OcjenjivanjeJednaZadaca from "./ocjenjivanjeJednaZadaca";
import axios from "axios";
import { async } from "q";

class Ocjenjivanje extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaZadaca: [{ id: 1, naziv: "prva" }, { id: 2, naziv: "druga" }, { id: 0, naziv: "treca" }],
      studentiNisuPoslali: [],
      studentiNijePregledano: [],
      studentiPregledano: [],
      brojZadace: "",
      brojZadatka: "",
      idZadatak: "",
      osvojeniBodovi: 0,
      prepisano: false,
      komentar: "Alles gute Brudeeer",
      maxBrojBodovaZadatka: 5,
      student: "",
      zadaca: "",
      sumaOsvojeni: 0,
      sumaMoguci: 0,
      ostvareniMoguci: [],
      defaultno: "",
      renderajOpet: false,
      idPredmeta: 3,

      idZadace: "",
      idStudenta: "",
      uspjehOcjenjivanja: true,
      zadacaState: {
        zadaciZadace: [],
        postavkaZadace: "",
        moguciBodovi: [],
        ostvareniBodovi: [],
        rokZaPredaju: "",
        stanjeZadatakaZadace: [],
        pregledanZadatak: [],
        idZadatakaZadace: []
      }
    };
  }

  componentDidMount = () => {

    this.pokupiZadace();

    if (this.state.listaZadaca[0] != "") {
      this.setState({
        zadaca: this.state.listaZadaca[0].naziv,
        idZadace: this.state.listaZadaca[0].id,
      });
    }


    document.getElementById("ocjenjivanjePocetna").style.display = "block";
    document.getElementById("ocjenjivanjeJednaZadaca").style.display = "none";
    document.getElementById("ocjenjivanjeJedanZadatak").style.display = "none";
  };

  pokupiStudenteKojimaJePregledanaZadaca = (idZadace) => {
    axios.get(`https://si2019kilo.herokuapp.com/getStudenteKojiSuPoslaliZadacu/${idZadace}`).then(res => {
      this.setState({
        studentiPregledano: res.data
      });
    });
  };

  pokupiStudenteKojiNisuPoslaliZadacu = (idZadace) => {
    axios.get(`https://si2019kilo.herokuapp.com/getStudenteKojiNisuPoslaliZadacu/${idZadace}`).then(res => {
      this.setState({
        studentiNisuPoslali: res.data
      });
    });
  };

  pokupiStudenteKojimaNijePregledanaZadaca = (idZadace) => {
    axios.get(`https://si2019kilo.herokuapp.com/getStudenteKojimaNijePregledanaZadaca/${idZadace}`).then(res => {
      this.setState({
        studentiNijePregledano: res.data
      });
    });
  };

  pokupiZadace = () => {
    axios.get(`https://si2019kilo.herokuapp.com/getZadaceZaOcjenjivanje/${this.state.idPredmeta}`).then(res => {
      this.setState({
        listaZadaca: res.data
      });
    });
  };
/*
  preuzmiDatoteku = () => {
    axios.get("https://si2019kilo.herokuapp.com/getDatoteku").then(res => {
    });
  }
*/  
/*
  pregledDatoteke = () => {
    axios.get("https://si2019kilo.herokuapp.com/getPregledDatoteke").then(res => {
    });
  }
*/
  pokupiZadacuStudenta = async (idZadace, idStudenta) => {

    idStudenta = 1;
    try {
      const res = await axios.get(
        `https://si2019kilo.herokuapp.com/getZadacuStudenta/${idZadace}/${idStudenta}`
      );
      this.setState({
        zadacaState: res.data
      });


      // console.log(this.state.zadacaState);
      this.sumirajBodove();
      this.ostvareniBodovi();

    } catch (e) {
      console.error("Error fetching zadaca by id", e);
    }
  }


  handleClick = event => {
    var ime = event.target.name; //name uzmem
    switch (ime) {
      case "osvojeniBodovi": {
        var osvojeno = document.getElementById("osvojeniBodovi").value;
        this.setState({ osvojeniBodovi: osvojeno });
        break;
      }
      case "preuzmi": {
        
        var idStudent = this.state.idStudenta;
        var idZadatak = this.state.idZadatak;

        axios.get(`https://si2019kilo.herokuapp.com/downloadZadatak/${idStudent}/${idZadatak}`).then(res => {
          
          let resultByte = res.data.datoteka.data;
          var bytes = new Uint8Array(resultByte);
          var blob = new Blob([bytes], { type: res.data.mimeTipFajla});
    
          var link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = res.data.nazivDatoteke
          link.click();
        }).catch(e => console.log(e));

        break;
      }
/*
      case "pregled": {
        //salji na rutu u backendu
        console.log("pregled button acitvated");
        break;
      }
*/      
      case "ok": {
        var infoOcjenjivanje = new FormData();
        var kom = document.getElementById("komentar").value;
        this.setState({ komentar: kom });
        infoOcjenjivanje.append('komentar', kom);
        var osvojeniBod = document.getElementById("osvojeniBodovi").value;
        infoOcjenjivanje.append('osvojeniBodovi', osvojeniBod);

        var prepisan = document.getElementById("prepisanZadatak").checked === true;

        infoOcjenjivanje.append('idZadatak', this.state.idZadatak);
        var stanjeZadatka;

        if (prepisan === true) stanjeZadatka = 3;
        else if (kom !== "") stanjeZadatka = 4;
        else stanjeZadatka = 2;
        infoOcjenjivanje.append('prepisanZadatak', prepisan);
        infoOcjenjivanje.append('stanjeZadatka', stanjeZadatka);
        axios.post("https://si2019kilo.herokuapp.com/ocijeniZadatak", infoOcjenjivanje).then(res => {
          if (res.status === 200) {
            this.setState({ uspjehOcjenjivanja: true });
            if (this.state.renderajOpet == false) {
              this.setState({
                renderajOpet: true
              })
            }
            else {
              this.setState({
                renderajOpet: false
              })
            }
          } else if (res.status === 201) {

          } else {
            this.setState({ uspjehOcjenjivanja: false });
          }
        });


        this.handleBackNaJednaZadaca(this.state.student, this.state.idStudenta);
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

  handleBackNaJednaZadaca = (student, idStudenta) => {
    /*const res =  axios.get(
      `https://si2019kilo.herokuapp.com/getZadacuStudenta/${this.state.idZadace}/${this.state.idStudenta}`
    );
    this.setState({
      zadacaState: res.data
    });*/
    if (this.state.renderajOpet == false) {
      this.setState({
        renderajOpet: true
      })
    }
    else {
      this.setState({
        renderajOpet: false
      })
    }
    if (student != "") {

      this.pokupiZadacuStudenta(this.state.idZadace, idStudenta);

      this.setState({
        student: student,
        idStudenta: idStudenta
      });

      document.getElementById("ocjenjivanjePocetna").style.display = "none";
      document.getElementById("ocjenjivanjeJednaZadaca").style.display = "block";
      document.getElementById("ocjenjivanjeJedanZadatak").style.display = "none";

    }

  };




  handleBackNaJednaIzborZadace = () => {

    if (this.state.renderajOpet == false) {
      this.setState({
        renderajOpet: true
      })
    }
    else {
      this.setState({
        renderajOpet: false
      })
    }

    document.getElementById("ocjenjivanjePocetna").style.display = "block";
    document.getElementById("ocjenjivanjeJednaZadaca").style.display = "none";
    document.getElementById("ocjenjivanjeJedanZadatak").style.display = "none";

  };



  handleNaOcjenjivanjeJedanZadatak = (indeks) => {
    this.setState({ idZadatak: this.state.zadacaState.idZadatakaZadace[indeks] });

    this.setState({
      brojZadatka: indeks + 1
    });

    document.getElementById("ocjenjivanjePocetna").style.display = "none";
    document.getElementById("ocjenjivanjeJednaZadaca").style.display = "none";
    document.getElementById("ocjenjivanjeJedanZadatak").style.display = "block";

  };

  postaviZadacu = (zadaca, id) => {

    this.setState({
      zadaca: zadaca,
      idZadace: id
    });

  }

  sumirajBodove = () => {

    var sumaBodova = 0;

    for (var i = 0; i < this.state.zadacaState.moguciBodovi.length; i++) sumaBodova = sumaBodova + this.state.zadacaState.moguciBodovi[i];

    this.setState({
      sumaMoguci: sumaBodova
    });

    sumaBodova = 0;

    for (var i = 0; i < this.state.zadacaState.ostvareniBodovi.length; i++) sumaBodova = sumaBodova + this.state.zadacaState.ostvareniBodovi[i];

    this.setState({
      sumaOsvojeni: sumaBodova
    });

  }


  ostvareniBodovi = () => {
    var pomocniNiz = [];

    for (var i = 0; i < this.state.zadacaState.moguciBodovi.length; i++) pomocniNiz.push(this.state.zadacaState.ostvareniBodovi[i] + "/" + this.state.zadacaState.moguciBodovi[i]);

    this.setState({
      ostvareniMoguci: pomocniNiz
    });
  }

  render(
  ) {
    console.log(this.state);
    return (
      <div>
        <div id="ocjenjivanjePocetna">
          <OcjenjivanjePocetna key={this.state.renderajOpet} podaci={this} />
        </div>
        <div>
          <div id="ocjenjivanjeJednaZadaca">
            {/*ovdje ubaci svoju komponentu */}
            <OcjenjivanjeJednaZadaca key={this.state.renderajOpet} podaci={this} />
          </div>
        </div>
        <div id="ocjenjivanjeJedanZadatak">
          <OcjenjivanjeJedanZadatak key={this.state.renderajOpet} podaci={this} />
        </div>
      </div>
    );
  }
}



export default Ocjenjivanje;