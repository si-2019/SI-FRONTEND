import React, { Component } from 'react';
import axios from 'axios'; 

export class selectRedoslijed extends Component {
    state = {
        currentRedoslijed: "0",
        first:false
      }

     redoslijedi =["Redoslijed abecede","Redoslijed prijavljivanja"];
     
    
        changeRedoslijed = (event) =>
        {  
          
          
    
          
        } 
        

        componentDidMount = () =>{
            if(this.props.trenutniRedoslijed.naziv=="Redoslijed abecede")
            {
                this.setState({currentRedoslijed: "0"});
            }
            if(this.props.trenutniRedoslijed.naziv=="Redoslijed prijavljivanja")
            {
                this.setState({currentRedoslijed: "1"});
            }
                        
          }
        
       
        render() {
            if(!this.state.first)
            {
                this.state.first=true;
                if(this.props.trenutniRedoslijed.naziv=="Redoslijed abecede")
                {
                    console.log(111);
                    this.state.currentRedoslijed="0";
                }
                else
                {
                    this.state.currentRedoslijed="1";
                }
                
            }
        
          
         
          return (
            <div style={divCenter}>
              <select ref="redoslijedSelector" value={parseInt(this.state.currentRedoslijed)} onChange={ this.changeRedoslijed }>
                <option key={`option_${1}`} value={0}>{this.redoslijedi[0]}</option>
                <option key={`option_${2}`} value={1}>{this.redoslijedi[1]}</option>              
              </select>
            </div>
          );
        }
    
      
    }
    
    export default selectRedoslijed
    
    const ButtonPromjeni = 
    {
      marginLeft:'10vw'
    
    }
    const divCenter = 
    {
      display:'flex',
      marginRight: '20vw',
      marginLeft: '25vw',
      marginTop: '1vh',
      marginBottom: '0',
      width:'50vw'
    
    }
    