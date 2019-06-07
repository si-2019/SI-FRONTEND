import React, { Component } from "react";
import OcjenjivanjeJedanZadatak from "./ocjenjivanjeJedanZadatak";
import OcjenjivanjePocetna from "./ocjenjivanjePocetna";
import OcjenjivanjeJednaZadaca from "./ocjenjivanjeJednaZadaca";
import axios from "axios";

class Ocjenjivanje extends Component {
  queryParamPredmetId = true;
  constructor(props) {
    super(props);

    this.state = {
      listaZadaca: [],
      studentiNisuPoslali: [],
      studentiNijePregledano: [],
      studentiPregledano: [],
      brojZadace: "",
      brojZadatka: "",
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
        pregledanZadatak: []
      }
    };
  }

  componentDidMount = () => {
    const urlParams = new URLSearchParams(window.location.search);

    this.queryParamPredmetId = urlParams.get("idPredmeta")
      ? Number(urlParams.get("idPredmeta"))
      : null;
    this.pokupiZadace();

    document.getElementById("ocjenjivanjePocetna").style.display = "block";
    document.getElementById("ocjenjivanjeJednaZadaca").style.display = "none";
    document.getElementById("ocjenjivanjeJedanZadatak").style.display = "none";
  };

  pokupiStudenteKojimaJePregledanaZadaca = () => {
    axios
      .get(
        "http://localhost:31911/getStudenteKojiSuPoslaliZadacu/" +
          this.state.idZadace
      )
      .then(res => {
        this.setState({
          studentiPregledano: res.data
        });
      })
      .catch(err => {
        this.setState({
          studentiPregledano: []
        });
        alert("Error fetching getStudenteKojiSuPoslaliZadacu:", err.message);
      });
  };

  pokupiStudenteKojiNisuPoslaliZadacu = () => {
    axios
      .get(
        "http://localhost:31911/getStudenteKojiNisuPoslaliZadacu/" +
          this.state.idZadace
      )
      .then(res => {
        this.setState({
          studentiNisuPoslali: res.data
        });
      })
      .catch(err => {
        this.setState({
          studentiNisuPoslali: []
        });
        alert("Error fetching getStudenteKojiNisuPoslaliZadacu:", err.message);
      });
  };

  pokupiStudenteKojimaNijePregledanaZadaca = () => {
    axios
      .get(
        "http://localhost:31911/getStudenteKojimaNijePregledanaZadaca/" +
          this.state.idZadace
      )
      .then(res => {
        this.setState({
          studentiNijePregledano: res.data
        });
      })
      .catch(err => {
        this.setState({
          studentiNijePregledano: []
        });
        alert(
          "Error fetching getStudenteKojimaNijePregledanaZadaca:",
          err.message
        );
      });
  };

  pokupiZadace = () => {
    if (this.queryParamPredmetId) {
      console.log(this.queryParamPredmetId);
      axios
        .get("http://localhost:31911/getZadace/" + this.queryParamPredmetId)
        .then(res => {
          console.log("RES:", res);
          this.setState({
            listaZadaca: res.data
          });
        })
        .catch(err => {
          alert(err.message);
        });
    }
  };

  preuzmiDatoteku = () => {
    axios.get("http://localhost:31911/getDatoteku").then(res => {});
  };

  pregledDatoteke = () => {
    axios.get("http://localhost:31911/getPregledDatoteke").then(res => {});
  };

  pokupiZadacuStudenta = async (idZadace, idStudenta) => {
    try {
      const res = await axios.get(
        `http://localhost:31911/getZadacuStudenta/${idZadace}/${idStudenta}`
      );
      this.setState({
        zadacaState: res.data
      });

      this.sumirajBodove();
      this.ostvareniBodovi();
    } catch (e) {
      console.error("Error fetching zadaca by id", e);
    }
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
        axios
          .post("http://localhost:31911/ocijeniZadatak", this.state)
          .then(res => {
            if (res.status === 200) {
              this.setState({ uspjehOcjenjivanja: true });
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
    if (student != "") {
      this.pokupiZadacuStudenta(this.state.idZadace, idStudenta);

      this.setState({
        student: student,
        idStudenta: idStudenta
      });

      document.getElementById("ocjenjivanjePocetna").style.display = "none";
      document.getElementById("ocjenjivanjeJednaZadaca").style.display =
        "block";
      document.getElementById("ocjenjivanjeJedanZadatak").style.display =
        "none";
    }
  };

  handleBackNaJednaIzborZadace = () => {
    if (this.state.renderajOpet == false) {
      this.setState({
        renderajOpet: true
      });
    } else {
      this.setState({
        renderajOpet: false
      });
    }

    document.getElementById("ocjenjivanjePocetna").style.display = "block";
    document.getElementById("ocjenjivanjeJednaZadaca").style.display = "none";
    document.getElementById("ocjenjivanjeJedanZadatak").style.display = "none";
  };

  handleNaOcjenjivanjeJedanZadatak = indeks => {
    this.setState({
      brojZadatka: indeks + 1
    });

    document.getElementById("ocjenjivanjePocetna").style.display = "none";
    document.getElementById("ocjenjivanjeJednaZadaca").style.display = "none";
    document.getElementById("ocjenjivanjeJedanZadatak").style.display = "block";
  };

  postaviZadacu = (zadaca, id) => {
    this.setState(
      {
        zadaca: zadaca,
        idZadace: id
      },
      () => {
        this.getStudentByZadaca();
      }
    );
  };

  sumirajBodove = () => {
    var sumaBodova = 0;

    for (var i = 0; i < this.state.zadacaState.moguciBodovi.length; i++)
      sumaBodova = sumaBodova + this.state.zadacaState.moguciBodovi[i];

    this.setState({
      sumaMoguci: sumaBodova
    });

    sumaBodova = 0;

    for (var i = 0; i < this.state.zadacaState.ostvareniBodovi.length; i++)
      sumaBodova = sumaBodova + this.state.zadacaState.ostvareniBodovi[i];

    this.setState({
      sumaOsvojeni: sumaBodova
    });
  };

  ostvareniBodovi = () => {
    var pomocniNiz = [];

    for (var i = 0; i < this.state.zadacaState.moguciBodovi.length; i++)
      pomocniNiz.push(
        this.state.zadacaState.ostvareniBodovi[i] +
          "/" +
          this.state.zadacaState.moguciBodovi[i]
      );

    this.setState({
      ostvareniMoguci: pomocniNiz
    });
  };

  getStudentByZadaca = () => {
    this.pokupiStudenteKojimaNijePregledanaZadaca();
    this.pokupiStudenteKojiNisuPoslaliZadacu();
    this.pokupiStudenteKojimaJePregledanaZadaca();
  };

  render() {
    if (!this.queryParamPredmetId) {
      return <div>Fali u query parametru idPredmeta</div>;
    }
    return (
      <div>
        <div id="ocjenjivanjePocetna">
          <OcjenjivanjePocetna
            key={this.state.renderajOpet}
            podaci={this}
            zadaca={this.state.zadaca}
          />
        </div>
        <div>
          <div id="ocjenjivanjeJednaZadaca">
            {/*ovdje ubaci svoju komponentu */}
            <OcjenjivanjeJednaZadaca podaci={this} />
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
