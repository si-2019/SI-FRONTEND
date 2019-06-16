import React, { Component } from 'react'
import axios from 'axios'
import Dropdown from './dropdown.js'
import ObjaveStudent from './ObjaveStudent'

class StranicaPredmetaPregled extends Component {

  constructor(props){
    super(props)
    this.state={
      naziv: "",
      godine: [],
      nazivAg: props.akademskaGodina,
      text: "",
      dodano: 0
    }
    }

  componentDidMount(){
    axios.get(`http://si2019golf.herokuapp.com/r5/dajNaziv/${this.props.idPredmeta}`).then(res =>{
      if(res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else{
      this.setState({
        naziv: res.data.naziv
      })
    }
  })
  axios.get(`http://si2019golf.herokuapp.com/r8/getAkademskaGodina/`).then(res =>{  
    if(res.data.loginError) {
      window.location.href = window.location.origin + '/romeo/login'
    }
else{
    this.setState({
      godine:res.data.godine
    })
  }
  })

  axios.get(`http://si2019golf.herokuapp.com/r6/provjera/${this.props.idKorisnika}/${this.props.idPredmeta}`).then(res2 =>{
    if(res2.data.loginError) {
      window.location.href = window.location.origin + '/romeo/login'
    }
    else{
  let tekst = ""  
  let dodano = 0
  if(res2.data.veza == '1'){
      tekst='Ukloni iz mojih predmeta'
      dodano=1
      }
      else{
        tekst='Dodaj u moje predmete'
        dodano=0
      }
      this.setState({
        text: tekst,
        dodano: dodano
      })
    }
})

}

klikNaDugme = () => {
  if(this.state.dodano==0){
    axios.post(`http://si2019golf.herokuapp.com/r1/dodajMojPredmet/${this.props.idKorisnika}/${this.props.idPredmeta}`).then(res => {
      if(res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else{
      if(res.data.message=='OK'){
        let tekst = 'Ukloni iz mojih predmeta'
        let dodano = 1
        this.setState({
          text:tekst,
          dodano:dodano
        })
      }
    }
    })
  }
  else{
    axios.get(`http://si2019golf.herokuapp.com/r6/obrisi/${this.props.idKorisnika}/${this.props.idPredmeta}`).then(res => {
      if(res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else{
      if(res.data.message=='OK'){
        let tekst = 'Dodaj u moje predmete'
        let dodano = 0
        this.setState({
          text:tekst,
          dodano:dodano
        })
      }
    }
    })
  }
}

render() {

  return (
    <div>
      <div class="row">
        <div class="col-9">
          <h1 class="naslovPredmeta">{this.state.naziv}</h1>
        </div>
        <div class="col-3">
           <button id='dd'type="button" class="btn btn-primary" onClick={this.klikNaDugme}>{this.state.text}</button>
        </div>
      </div>
      <div>
        <Dropdown godine={this.state.godine} nazivAg = {this.props.akademskaGodina} idKorisnika={this.props.idKorisnika} idPredmeta={this.props.idPredmeta}/>
      </div>

      <ObjaveStudent idPredmeta={this.props.idPredmeta} akademskaGodina={this.props.akademskaGodina} trenutnaAkademskaGodina={this.props.trenutnaAkademskaGodina}></ObjaveStudent>
    </div>

    
  )
}
}

export default StranicaPredmetaPregled
