import React, { Component } from 'react'
import Table_body_cell from './table_body_cell.js';

export class Table_body_row extends Component {
  render() {
    return this.props.days.map((day) => (
        <Table_body_cell day={day.title}/>
    ))
  }
}

export default Table_body_row
