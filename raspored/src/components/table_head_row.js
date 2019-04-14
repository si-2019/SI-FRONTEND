import React, { Component } from 'react'
import Table_head_cell from './table_head_cell.js';

export class Table_head_row extends Component {
  render() {
    return this.props.days.map((day) => (
        <Table_head_cell key={day.id} day={day.title}/>
    ))

    
        
  }
}

export default Table_head_row;
