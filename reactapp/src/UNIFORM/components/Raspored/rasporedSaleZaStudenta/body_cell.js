import React, { Component } from 'react'

export class Body_cell extends Component {
  render() {
    if(this.props.redniBroj%2==0)
    {
      // Ukoliko je paran red
      if(this.props.termin==undefined)
      {
        //Ako je celija prazna
        return (
          <td style={tdStyleParan}></td>
        );
      }     
      else
      {
        return (
          <td style={tdStyleParan}><b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
          </td>
        );
      } 
    }
    else

    {
      // Ukoliko je neparan red
      if(this.props.termin==undefined)
      {
        //Ako je celija prazna
        return (
          <td style={tdStyleNeparan}></td>
        );
      }     
      else

      {
        return (
          <td style={tdStyleNeparan}><b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
          </td>
        );
      } 
    }
  }
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


export default Body_cell