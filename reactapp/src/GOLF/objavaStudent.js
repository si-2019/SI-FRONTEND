import React, { Component } from 'react';

class objavaStudent extends Component {
  render() {
  	const objave = [
  	{
  		naslov: 'Predavanja',
  	}
  	]

import DodavanjeDatuma from './DodavanjeDatuma';


class objavaStudent extends Component {
  render() {

    this.state =  {
    datumobjave:{
      id:1,
      datum:Date.now()
    }
  }

    return (
        <div class="card">
            <div class="card-body">
            <h4 class="card-title">{this.props.naslov}</h4>

            {this.props.fileovi.map(predmet => [<a href='#' class='card-link' key='1'>{predmet}</a>,<br key='2'></br>])}
            <DodavanjeDatuma datumobjave={this.state.datumobjave}></DodavanjeDatuma>

            </div>
        </div>
    );
  }
}

export default objavaStudent;