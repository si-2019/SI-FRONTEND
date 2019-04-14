import React, { Component } from 'react'

export class Head_cell extends Component {
  render() {
    return (
      <React.Fragment>
          <th style={pocetnaKolonaStyle}>{this.props.day}  {this.props.datum}</th>
      </React.Fragment>
    )
  }  
}

const pocetnaKolonaStyle = {
  width: '5vw',
  backgroundColor: 'rgb(208, 214, 298)',
  textAlign: 'center'  
}

export default Head_cell
