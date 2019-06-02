import React, { Component } from 'react';

class PrikazPredmeta extends Component {
  render() {
    return (
      <div className="PrikazPredmeta">
        <p>Test prikaza predmeta</p>
        <button>KLIK</button>
        <p>Predmet: {this.props.nazivPredmeta}</p>
        <p>Opis projekta: {this.props.opisProjekta}</p>
        <p>Broj mogućih bodova: {this.props.brojMogucihBodova}</p>
      </div>
    );
  }
}

export default PrikazPredmeta;
