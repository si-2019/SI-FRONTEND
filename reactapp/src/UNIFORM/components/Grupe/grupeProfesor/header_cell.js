import React, { Component } from 'react';
import './grupeProfesor.css';

export class header_cell extends Component {
  render() {
    var text=this.props.naziv;
    
    return (      
      <tr>
        <td style={stylish}>
          {text}
        </td>
      </tr>  
    )
  }
}

export default header_cell

const stylish=
{
  backgroundColor:"steelblue",
  color:'white'
}