import React, { Component } from 'react'

export class BodoviNaIspitu extends Component {
  render() {
    return (
        //Ovdje ispisati sve podatke koji se dobiju o jednom ispitu sa servera, ovo su samo dummy podaci
      <div>
          <h5>{this.props.tip}</h5>
          <h5>Datum: {this.props.datum.toString()}</h5>
          <h5>Bodova: {this.props.bodovi}</h5>
          <h5>Polozen: {this.props.polozen.toString()}</h5><br/>
      </div>
    )
  }
}

export default BodoviNaIspitu
