import React, { Component } from 'react'

export class Cell extends Component {
  render() {
    if(this.props.redniBroj%2==0)
    {
      if(this.props.termin==undefined)
      return (
        <td style={tdStyleParan}>
        </td>);
        else 
    return (
          <td style={tdStyleParan}><b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}

          </td>
        
     
    )
    }
    else
    {
      if(this.props.termin==undefined)
      return (
        <td style={tdStyleNeparan}>
        </td>);
        else 
    return (
          <td style={tdStyleNeparan}><b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}

          </td>
        
     
    )
    }
  

     
  }
}

const tdStyleNeparan=
{
    rowspan:'5',
    border:'2px solid #504c4c',
    textAlign:'center',
    padding:'8px',
    textAlign: 'left',
    width:'10vw', 
    backgroundColor: 'white' 
}

const tdStyleParan=
{
    rowspan:'5',
    border:'2px solid #504c4c',
    textAlign:'center',
    padding:'8px',
    textAlign: 'left',
    width:'10vw', 
    backgroundColor:'lightgoldenrodyellow' 
}
export default Cell
