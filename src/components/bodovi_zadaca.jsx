import React, { Component } from "react";
import "../bootstrap.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

class BodoviZadaca extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brojZadataka: this.props.broj_zad, //ovu info uzimam od Petra
      brojeviZadataka: [1],
      sviIsti: false,
      sviIstiBodovi: 0,
      bodoviPoZadacima: [],
      ukupnoBodovaZadaca: 0
    };

  }

  state = {
    brojZadataka: this.props.broj_zad, //ovu info uzimam od Petra
    brojeviZadataka: [1],
    sviIsti: false,
    sviIstiBodovi: 0,
    bodoviPoZadacima: [],
    ukupnoBodovaZadaca: 0
  };

  /*
    setState se obavljaaa tek nakon zavrsetka handlera(fja)!!!!!!!!
    */

  klik_isti_br_bod = () => {
    //citam unesenu vrijednost
    var isti_br_bod = parseInt(document.getElementById("brbod").value);
    //console.log(isti_br_bod);

    this.setState({ sviIstiBodovi: isti_br_bod });

    //kreiram niz koji ce izgledati 1, 2,3,.. ovisno koliko ima zadataka
    //da tako popunim 1. red tabele sa bodovima
    var noviNiz = [];
    // console.log('medi:'+this.props.broj_zad);
    for (var i = 1; i <= this.props.broj_zad; i++) noviNiz.push(i);

    this.setState({ brojeviZadataka: noviNiz });
    // console.log('medi'+noviNiz);

    //provjeravamo da li je toggle on, ako jeste, onda popunimo textbox-ove iz tabele sa vrijednoscu koju unese u tekstualno polje
    //ako toggle nije on, dzabe sto unosi
    var daLi = document.getElementById("customSwitch1").checked === true;
    this.setState({ sviIsti: daLi });

    if (daLi) {
      var suma = 0;

      noviNiz = [];
      suma = this.props.broj_zad * isti_br_bod;
      for (let i = 1; i <= this.props.broj_zad; i++) {
        document.getElementById(i).value = isti_br_bod;
        noviNiz.push(isti_br_bod);
      }

      this.props.setListaBodova(noviNiz);
      this.setState({ bodoviPoZadacima: noviNiz });
      //console.log(this.state.bodoviPoZadacima);
      document.getElementById("ukupnoStanje").innerHTML = suma;
      this.setState({ ukupnoBodovaZadaca: suma });
    }
  };

  //moram ovo na onChange, jer kad klikne na button, tek se nakon fje obavi setState
  toggle_klik = () => {
    var daLi = document.getElementById("customSwitch1").checked === true;
    this.setState({ sviIsti: daLi });
  };

  unioBodove = () => {
    //mijenja ukupno stanje na badge-u, mijenja atribut bodoviPoZadacima
    var suma = 0;

    var noviNiz = [];
    for (let i = 1; i <= this.props.broj_zad; i++) {
      if (document.getElementById(i).value !== "") {
        //inace bude NaN
        let temp = document.getElementById(i).value;
        suma += parseInt(temp);
        noviNiz.push(temp);
      } else noviNiz.push(0);
    }
    this.props.setListaBodova(noviNiz);
    this.setState({ bodoviPoZadacima: noviNiz });
    //console.log(this.state.bodoviPoZadacima);
    document.getElementById("ukupnoStanje").innerHTML = suma;
  };

  render() {
    var kolone = [];
    for (var i = 1; i <= this.props.broj_zad; i++) {
      kolone.push(i);
    }

    return (
      <div>
        <div className="card-header bg-primary text-light">
          <h4>
            <b>Bodovi zadaće</b>
          </h4>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            Želim da svi zadaci imaju jednak maksimalan broj bodova.
          </h4>
          <div className="form-group">
            <div className="custom-control-static custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
              />
              <label className="custom-control-label" htmlFor="customSwitch1">
                DA
              </label>
              <br />
              <br />
            </div>
            <h5 className="card-title">Broj bodova:</h5>
            <input
              id="brbod"
              type="text"
              className="form-control-static"
              onChange={this.toggle_klik}
            />
            <button
              type="button"
              className="btn bg-primary ml-3 "
              onClick={this.klik_isti_br_bod}
            >
              OK
            </button>
            <hr />
          </div>
        </div>
        <div id="tabela">
          <table className="table table-bordered text-center bg-active border-solid">
            <thead>
              <tr className="bg-primary text-light">
                {kolone.map(jedno => (
                  <th scope="col" key={jedno + 200}>
                    {jedno}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary text-light">
                {kolone.map(jedno => (
                  <th scope="col" key={jedno}>
                    <input
                      type="text"
                      className="form-control bg-primary text-light text-bold"
                      id={jedno}
                      onChange={this.unioBodove}
                    />
                  </th>
                ))}
              </tr>
            </tbody>
          </table>
          <br />
          <label className="ml-3">Ukupno:</label>
          <span className="badge badge-primary ml-3">
            <h5 id="ukupnoStanje">{this.state.ukupnoBodovaZadaca}</h5>
          </span>
          <hr />
        </div>
      </div>
    );
  }
}

export default BodoviZadaca;
