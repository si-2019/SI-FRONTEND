import React, { Component } from 'react'

export class Table_head_cell extends Component {
  render() {
    return (
      <React.Fragment>
          <th>{this.props.day}</th>
      </React.Fragment>
    )
  }
}

export default Table_head_cell
