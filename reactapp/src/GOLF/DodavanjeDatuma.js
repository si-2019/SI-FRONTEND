import React, { Component } from 'react'
import Moment from 'react-moment';
class DodavanjeDatuma extends Component {
  render() {
    return (
      <Moment format="DD/MM/YYYY  HH:mm">
        {this.props.datumobjave.datum}
      </Moment>
    )
  }
}

export default DodavanjeDatuma
