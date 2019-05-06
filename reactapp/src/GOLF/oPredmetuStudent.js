import React, { Component } from 'react';

class oPredmetuStudent extends Component {
  render() {
  	const objave = [
  	{
  		naslov: 'O predmetu',
  	}
  	]
    return (
        <div>
            <h3>{this.props.naslov}</h3>
        </div>
    );
  }
}

export default oPredmetuStudent;