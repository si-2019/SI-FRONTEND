import React, { Component } from 'react'

export class BodoviNaIspitu extends Component {
  render() {
    return (
        //Ovdje ispisati sve podatke koji se dobiju o jednom ispitu sa servera, ovo su samo dummy podaci
      <div>
          <h3>{this.props.tip}</h3>
          <h3>Datum: {this.props.datum.toString()}</h3>
          <h3>Bodova: {this.props.bodovi}</h3>
          <h3>Polozen: {this.props.polozen.toString()}</h3><br/>
      </div>
    )
  }
}

export default BodoviNaIspitu
