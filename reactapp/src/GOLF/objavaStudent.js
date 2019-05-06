import React, { Component } from 'react';

class objavaStudent extends Component {
  render() {
  	const objave = [
  	{
  		naslov: 'Predavanja',
  	}
  	]
    return (
        <div class="card">
            <div class="card-body">
            <h4 class="card-title">{this.props.naslov}</h4>
            </div>
        </div>
    );
  }
}

export default objavaStudent;