import React, { Component } from 'react';
import DodavanjeDatuma from './DodavanjeDatuma';

class objavaProfesor extends Component {
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
            <DodavanjeDatuma datumobjave={this.state.datumobjave}></DodavanjeDatuma>
            </div>
        </div>
    );
  }
}

export default objavaProfesor;