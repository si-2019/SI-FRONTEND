import React, { Component } from 'react';
import './grupeStudent.css';

export class header_cell extends Component {
  render() {
    var text=this.props.naziv;
    
    return (
      
      <tr>
        <td style={stylish}>
          <b>{text}</b>
        </td>
      </tr>  
    )
  }
}

export default header_cell

const stylish=
{
  backgroundColor:"lemonchiffon"

}
