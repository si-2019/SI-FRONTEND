import React, { Component } from 'react';
import SviPredmeti from './SviPredmeti';

class mojiPredmeti extends Component {
  render() {
    return (
        <div>
            <h1>Moji predmeti</h1>
            <SviPredmeti svipredmeti={this.state.svipredmeti} />
        </div>

    );
  }
}

export default mojiPredmeti;