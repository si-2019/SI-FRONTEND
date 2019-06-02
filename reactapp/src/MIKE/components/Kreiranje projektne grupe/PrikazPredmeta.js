import React, { Component } from 'react';

class PrikazPredmeta extends Component {
  render() {
    return (
      <div className="PrikazPredmeta">
        <p> </p>
        <p>Opis projekta: {this.props.opisProjekta}</p>
        <p>Broj mogućih bodova: {this.props.brojMogucihBodova}</p>
      </div>
    );
  }
}

export default PrikazPredmeta;
