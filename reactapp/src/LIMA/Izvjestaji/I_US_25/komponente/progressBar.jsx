import React, { Component } from "react";
class ProgressBar extends Component {
  state = {};
  racunaj = () => {
    let ostvareniBodovi = 0;
    let moguciBodovi = 0;
    if (this.props.bodovi.length !== 0) {
      //OSTVARENI BODOVI
      if (this.props.bodovi[0].prisustvo !== "/")
        ostvareniBodovi += this.props.bodovi[0].prisustvo;
      if (this.props.bodovi[0].prviParcijalni !== "/")
        ostvareniBodovi += this.props.bodovi[0].prviParcijalni;
      if (this.props.bodovi[0].drugiParcijalni !== "/")
        ostvareniBodovi += this.props.bodovi[0].drugiParcijalni;
      if (this.props.bodovi[0].zavrsni !== "/")
        ostvareniBodovi += this.props.bodovi[0].zavrsni;
      if (this.props.bodovi[0].zadaca !== "/")
        ostvareniBodovi += this.props.bodovi[0].zadaca;
      if (this.props.bodovi[0].projekat !== "/")
        ostvareniBodovi += this.props.bodovi[0].projekat;
      //MOGUCI BODOVI
      if (
        this.props.bodovi[0].postojiStudent === true &&
        this.props.bodovi[0].slusaPredmet === true
      )
        moguciBodovi =
          this.props.bodovi[0].moguciBodPrve +
          this.props.bodovi[0].moguciBodDruge +
          this.props.bodovi[0].moguciBodPrisus +
          this.props.bodovi[0].moguciBodZavrsnog +
          this.props.bodovi[0].moguciBodZad +
          this.props.bodovi[0].moguciBodPro; //prvi,drugi,prisustvo,zavrsni,zadaca, projekat
      //POSTOTAK
      let postotak = 0;
      if (ostvareniBodovi !== 0 && moguciBodovi !== 0)
        postotak = (ostvareniBodovi / moguciBodovi) * 100;
      return (
        <React.Fragment>
          <div className="progress mb-2">
            <div
              className="progress-bar progress-bar-success"
              role="progressbar"
              aria-valuenow={postotak} //trenutno koliko posto
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: postotak + "%" }}
            >
              <span style={{ color: "black" }}>{postotak + "%"}</span>
            </div>
          </div>
          <p>
            Trenutno ostvarenih bodova je {ostvareniBodovi}, od trenutno mogućih{" "}
            {moguciBodovi}.
          </p>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="progress mb-2">
            <div
              className="progress-bar progress-bar-success"
              role="progressbar"
              aria-valuenow="0" //trenutno koliko posto
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "0%" }}
            >
              <span style={{ color: "black" }}>0%</span>
            </div>
          </div>
          <p>
            Trenutno ostvarenih bodova je {ostvareniBodovi}, od trenutno mogućih{" "}
            {moguciBodovi}.
          </p>
        </React.Fragment>
      );
    }
  };
  render() {
    return this.racunaj();
  }
}

export default ProgressBar;
