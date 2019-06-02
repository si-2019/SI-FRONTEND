import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pocetnaStranica.css";
import NaslovnaTermin from "./NaslovnaTermin/naslovnaTermin";
import UnosKrajnjegRoka from "./unosKrajnjegRoka";
import PrikaziSaleForma from "./PrikaziSaleForma";

class PocetnaStranica extends Component {
  constructor() {
    super();
    this.state = { render: "", show: true };
  }
  handleClick(compName) {
    this.setState({ render: compName, show: false });
  }
  prikaziKomponentu() {
    switch (this.state.render) {
      case "terminAdmin":
        return <NaslovnaTermin />;
      case "rok":
        return <UnosKrajnjegRoka />;
      case "sale":
        return <PrikaziSaleForma />;
      case "terminProf":
        return <NaslovnaTermin />;
    }
  }
  goBack() {
    window.location.reload();
  }
  render() {
    return this.state.show ? (
      <main id="pocetna">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Administracija</h5>
                <p>Odaberite profesora</p>
                <input
                  className="form-control btn-block"
                  type="text"
                  placeholder="Pretraga"
                  aria-label="Pretraga"
                />
                <button
                  className="btn btn-dark btn-block"
                  onClick={this.handleClick.bind(this, "terminAdmin")}
                >
                  Unos i prikaz termina
                </button>
                <button
                  className="btn btn-dark btn-block"
                  onClick={this.handleClick.bind(this, "rok")}
                >
                  Promjena roka
                </button>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="card-body">
                  <button
                    className="btn btn-dark btn-block"
                    onClick={this.handleClick.bind(this, "sale")}
                  >
                    Sale
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Profesor</h5>
                <p className="card-text" />
                <button
                  href="#"
                  className="btn btn-dark btn-block"
                  onClick={this.handleClick.bind(this, "terminProf")}
                >
                  Unos i prikaz termina
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    ) : (
      <main>
        {this.prikaziKomponentu()}
        <button
          type="button"
          id="nazad"
          className="dugme"
          className="btn btn-dark m-2"
          onClick={this.goBack}
        >
          Nazad
        </button>
      </main>
    );
  }
}

export default PocetnaStranica;
