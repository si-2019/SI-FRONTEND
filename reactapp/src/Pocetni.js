import React, { Component } from 'react';
import './App.css';
import MockListaPredmeta from './MockListaPredmeta';
import PrikazPredmeta from './PrikazPredmeta';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      nazivPredmeta:"SI",
      forma:"Mock"
    }
    this.funkcija=this.funkcija.bind(this);
  }
  render() {
    if(this.state.forma=="Mock")
      return (    
        <MockListaPredmeta funkcija={this.funkcija} nazivPredmeta={this.state.nazivPredmeta}/>
      );
    else 
      return(
        <PrikazPredmeta/>
    )  
  };
  funkcija(){
    console.log("test");
    if(this.state.forma=="Mock"){
      this.setState({
        nazivPredmeta:"ARM",
          forma:"Prikaz"
      });
    }
    else{
      this.setState({
        nazivPredmeta:"SI",
          forma:"Mock"
      });
    }
  }
}
export default App;
