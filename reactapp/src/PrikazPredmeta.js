import React, { Component } from 'react';

class PrikazPredmeta extends Component {
  render() {
    return (
      <div className="PrikazPredmeta">
        <p>Test prikaza predmeta</p>
        <button>KLIK</button>
        <p>{this.props.nazivPredmeta}</p>
      </div>
    );
  }
}

export default PrikazPredmeta;
