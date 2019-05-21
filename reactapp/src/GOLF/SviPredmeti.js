import React, { Component } from 'react'
import JedanPredmet from './JedanPredmet'
class SviPredmeti extends Component {
  render() {
    return this.props.predmeti.map((x)=>(
        <JedanPredmet key={x.id} predmet={x} semestar={this.props.semestar}/>
    ));
  }
}

export default SviPredmeti
