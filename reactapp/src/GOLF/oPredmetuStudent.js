import React, { Component } from 'react';

class oPredmetuStudent extends Component {
  render() {
  	
  	
    return (
        
        <div>
            <h3> O predmetu </h3>
            <h4> {this.props.opis} </h4>
        </div>
    );
  }
}

export default oPredmetuStudent;