import React, { Component } from 'react';
import axios from 'axios'

class sedmica extends Component {
  constructor(props){
    super(props);
    this.state={
      objave: []
    }
  }

  componentDidMount(){
      axios.get(`http://localhost:31907/r3/dajMaterijaleZaStudenta/${this.props.idPremet}/${this.props.sedmice}`).then(res =>{
        console.log({res: res.data.objave})
      })
  }

  render() {
    console.log({objave: this.state.objave})
    return (
        <div class='divsaokvirom'>
            <h4>Sedmica:{this.props.sedmice}</h4>
            <h4 class='naslov'>{this.props.naslov}</h4>
            {/* <h7>{this.state.objave.naziv}</h7> */}
        </div>
    );
  }
}

export default sedmica;