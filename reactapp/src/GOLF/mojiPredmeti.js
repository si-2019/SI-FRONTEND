import React, { Component } from 'react';
import SviPredmeti from './SviPredmeti';
import PropTypes from 'prop-types';
class mojiPredmeti extends Component {
  render() {
    this.state={
      svipredmeti: [
        {
          id: 1,
          naziv: 'SI',
          opis:' opis premeta '
        },
        {
          id: 2,
          naziv: 'VI',
          opis: 'opis predmeta'
        }
      ]
    }
    return (
        <div>
            <h1>Moji predmeti</h1>
            <SviPredmeti predmeti={this.state.svipredmeti} />
        </div>

    );
  }
}
SviPredmeti.propTypes={
  svipredmeti: PropTypes.array.isRequired
}
export default mojiPredmeti;