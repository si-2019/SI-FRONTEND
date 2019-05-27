import React, { Component } from 'react';
import DodavanjeDatuma from './DodavanjeDatuma';
import OpisMaterijala from './OpisMaterijala'


class objavaStudent extends Component {

  constructor(props){
    super(props);
    this.state =  {
      datumobjave: this.props.datumobjave
  
    }
  }

  render() {

    

    return (
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">{this.props.naslov}</h5>
            <OpisMaterijala opisMaterijala={this.props.opisMaterijala}></OpisMaterijala>
              {this.props.fileovi.map(predmet => [<a href='#' class='card-link' key='1'>{predmet}</a>,<br key='2'></br>])}
            <DodavanjeDatuma datumobjave={this.state.datumobjave}></DodavanjeDatuma>
            </div>
        </div>
    );
  }
}

export default objavaStudent;