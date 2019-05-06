import React, { Component } from 'react';

class oPredmetuStudent extends Component {
  render() {
  	const objave = [
  	{
  		naslov: 'Naziv predmeta',
  	}
  	]
    return (
        <div>
            <h2>{this.props.naslov}</h2>
        </div>
    );
  }
}

export default oPredmetuStudent;