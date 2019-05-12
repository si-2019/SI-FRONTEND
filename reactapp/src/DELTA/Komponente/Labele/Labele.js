import React, { Component } from 'react'

export class Labele extends Component {
  render() {
    return (
      <div className = "labele" style = {labeleStyle}>
        <h3 style = {labelaStil}>Ime profesora: </h3> <h3 className = "imeProfesora" style = {tekstStil}>Dummy Ime</h3> <br/>

        <h3 style = {labelaStil}>Broj ETCS bodova: </h3> <h3 className = "brojETCSBodova" style = {tekstStil}>Dummy ETCS</h3> <br/>

        <h3 style = {labelaStil}>Grupa: </h3> <h3 className = "grupa" style = {tekstStil}>Dummy grupa</h3> <br/>

        <h3 style = {labelaStil}>Opis predmeta: </h3> <h3 className = "opisPredmeta" style = {tekstStil}>Dummy opis</h3> <br/>

      </div>
    )
  }
}

const labeleStyle = {
  border: '1px solid black',
  background: 'cyan',
  display: 'inline-block' 
}

const labelaStil = {
    display: 'inline'
}

const tekstStil = {
    display: 'inline'
}

export default Labele
