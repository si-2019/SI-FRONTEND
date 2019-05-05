import React, { Component } from 'react'

class JedanPredmet extends Component {
  render() {
    return (
        <p class="text-success">
            {this.props.predmet.naziv}
        </p>
    )
  }
}

export default JedanPredmet
