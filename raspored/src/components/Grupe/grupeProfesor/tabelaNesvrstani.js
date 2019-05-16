import React, { Component } from 'react'
import Body_Cell from './nesvrstani_body_cell.js';
import Header_Cell from './nesvrstani_header_cell.js';
import minusSlicica from './slicica_minus.jpg';
import axios from 'axios'; 

export class tabela extends Component {

  dodajStudentaRandom = (idStudent,id) =>
  {       
      axios.post("http://localhost:3001/dodajStudentaRandomGroup/"+idStudent).then()
      {
          console.log("http://localhost:3001/dodajStudentaRandomGroup/"+idStudent);
          document.location.reload();
      };
  } 
  render() {
    
    var renderingCells =[];
    for(var i=0;i<this.props.studenti.length;i++)
    {
        var vlasnikBool = false;
        
        renderingCells.push(
            <Body_Cell lockState={this.props.lockState} dodajStudentaRandom={this.dodajStudentaRandom} redniBroj={i} student={this.props.studenti[i]} vlasnik={vlasnikBool}/>
        );
    }  
    

    return (
      <table style={tableStyle}>
          <thead>
              <Header_Cell/>
          </thead>
          <tbody>
              {renderingCells}
          </tbody> 
         
      </table>
    )
  }
}

export default tabela

const tableStyle=
{    
  width:'95vw',
  margin:"2.5vw"
}
const stylishRed=
{
  borderStyle: 'dashed dashed dashed dashed',
  backgroundColor:"lemonchiffon",
  justifyContent:'center',
  color: 'red'
}
const stylishGreen=
{
  borderStyle: 'dashed dashed dashed dashed',
  backgroundColor:"lemonchiffon",
  justifyContent:'center',
  color: 'green'
}
const stylishCasual=
{
  borderStyle: 'dashed dashed dashed dashed',
  backgroundColor:"lemonchiffon",
  justifyContent:'center'
}

const minus = 
{
  background:'url(./slicica_minus.jpg) no-repeat',
  cursor:'pointer',
  border:'none',
  backgroundSize: '100%',
  width:'20px',
  height:'20px',
  verticalAlign: 'middle',
  marginRight:'5px'  

  
}

const plus = 
{
  background:'url(./slicica_plus.jpg) no-repeat',
  cursor:'pointer',
  border:'none',
  backgroundSize: '100%',
  width:'20px',
  height:'20px',
  verticalAlign: 'middle',
  marginRight:'10px'    
}
