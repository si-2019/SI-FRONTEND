import React, { Component } from "react";
import ListaPredmeta from "../ListaPredmeta/ListaPredmeta";
import DrugiModuli from "../DrugiModuli/DrugiModuli";
import Ispiti from "../Ispiti/Ispiti";
import Zadace from "../Zadace/Zadace";
import KonacnaOcjena from "../KonacnaOcjena/KonacnaOcjena";

class Predmet extends Component {
  state = { postotakBodovaZadace: 33, postotakBodovaIspiti: 70 };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ListaPredmeta />
          </div>
          <div className="col-8">
            <div className="row">
              <b>Predmet:</b> Softver inzenjering
            </div>
            <div className="row">
              <b>Odgovorni nastavnik:</b> Novica Nosovic
            </div>
            <div className="row">
              <b>Opis predmeta:</b>
              Svrha ovog predmeta je uvođenje studenta u principe različitih
              vrsta i namjena računarskih arhitektura. On ima za cilj da pomogne
              studentima u razumjevanju strukture i načina rada savremenih
              mikroprocesora opšte i specijalne nemjene (DSP, mikrokontroleri,
              grafički procesori), viseprocesorskih i višeračunarskih struktura,
              kao i mjerenja njihovih performansi i određivanja uskih grla.
            </div>
            <div className="row">
              <b>Broj ETCS bodova: </b> 5
            </div>

            <br />

            <Zadace />
            <br />
            <Ispiti />
            <br />
            <div className="row">
              <div className="col-4" />

              <div>
                <KonacnaOcjena />
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

export default Predmet;
