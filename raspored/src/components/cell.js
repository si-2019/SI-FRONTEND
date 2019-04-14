import React, { Component } from 'react'

export class Cell extends Component {
  render() {
      if(this.props.termin==undefined)
      return (
        <td style={tdStyle}>
        </td>);
        else 
    return (
          <td style={tdStyle}>{this.props.termin.datum + ' ' + this.props.termin.predmet + ' ' +  this.props.termin.title + this.props.termin.vrijeme}

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
