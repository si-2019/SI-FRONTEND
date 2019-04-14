import React, { Component } from 'react'

export class Cell extends Component {
  render() {
      
    return (
          <td style={tdStyle}>{this.props.redniBroj}

          </td>
        
     
    )
  }
}

const tdStyle=
{
    border:'2px solid #504c4c',
    textAlign:'center',
    padding:'8px',
    textAlign: 'left',
    width:'10vw', 
    backgroundColor: 'white' 
}
export default Cell
