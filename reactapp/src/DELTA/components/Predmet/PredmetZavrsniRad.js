import React, { Component } from "react";
import ListaPredmeta from "../ListaPredmeta/ListaPredmeta";
import DrugiModuli from "../DrugiModuli/DrugiModuli";
import Ispiti from "../Ispiti/Ispiti";
import Zadace from "../Zadace/Zadace";
import KonacnaOcjenaZavrsniRad from "../KonacnaOcjena/KonacnaOcjenaZavrsniRad";

class PredmetZavrsniRad extends Component {
  state = { };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ListaPredmeta />
          </div>
          <div className="col-8">
            <div className="row">
              <b>Tema:</b> Blockchain i nova ekonomija
            </div>
            <div className="row">
              <b>Mentor:</b> Anel Tanovic
            </div>
            <div className="row">
              <b>Sazetak: </b> 
              Razumijevanjem problema koje blockchain rješava i glavnih koncepata na kojima se zasniva, postaje jasno zašto je ova tehnologija tako značajna. Osnovni koncepti su razvijeni u originalnom dokumentu Satoshi Nakamota iz 2008. pod naslovom Bitcoin: A Peer-to-Peer Electronic Cash System.

              Svojim radom, Satoshi je postavio osnove Bitcoina. Kombinovanjem Peer-to-Peer (P2P) mreže i raspodijeljenog servera koji obilježava transakcije vremenskim žigom, nastala je baza podataka koja je autonomna i podijeljena među svim učesnicima mreže.
            </div>

            <br />

            <br />
            <div className="row">
              <div className="col-4" />

              <div>
                <KonacnaOcjenaZavrsniRad />
              </div>
            </div>
            <div className="row">
              <div col-2>
                <DrugiModuli />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PredmetZavrsniRad;