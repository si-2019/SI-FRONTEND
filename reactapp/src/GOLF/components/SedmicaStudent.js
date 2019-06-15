import React, { Component } from 'react'
import axios from 'axios'
import ObjavaStudent from './objavaStudent'

class SedmicaStudent extends Component {

  constructor(props){
    super(props);
    this.state={
      objave: []
    }
  }

  ucitaj(props){
    axios.get(`http://si2019golf.herokuapp.com/r3/dajMaterijaleZaStudenta/${this.props.idPredmet}/${props.sedmice}/${encodeURIComponent(props.naziv)}`).then(res =>{
      if(res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else{
        this.setState({
          objave: res.data.objave
        })
      }
    })  
  }

  componentDidMount(){
      this.ucitaj(this.props)
  }

  componentWillReceiveProps(props){
    this.ucitaj(props)
  }

  render() {
    return (
      
        <div class='divsaokvirom'>
            <h4 class='naslov'>{this.props.naslov}</h4>
            {this.state.objave.map(file => <ObjavaStudent idpredmeta={this.props.idpredmeta} naslov={file.naziv} opisMaterijala={file.opis} fileovi={file.datoteke} datumobjave={file.datum}></ObjavaStudent>)}
          </div>
    );
  }
}

export default SedmicaStudent