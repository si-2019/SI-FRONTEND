import React, { Component } from 'react'
import './golf.css'
class JedanPredmet extends Component {
  render() {
    return (
        <div id="predmet_kartica" class="card border-info mb-3" >
        <div class="card-header">
        <a href='/Golf/mojiPredmeti'>{this.props.predmet.naziv}</a>
        </div>
        <div class="card-body">
        <p class="card-text">{this.props.predmet.opis}</p>
        </div>
        </div>

  
    )
  }
}

export default JedanPredmet
