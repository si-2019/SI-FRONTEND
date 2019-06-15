import React, { Component } from 'react'
import axios from 'axios'
import OPredmetuProfesor from './oPredmetuProfesor'
import LiteraturaProfesor from './literaturaProfesor'
import SedmicaProfesor from './SedmicaProfesor'

class ObjaveProfesor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      naziv: props.akademskaGodina,
      sedmice: []
    }
  }

  ucitaj(props) {
    axios.get(`http://si2019golf.herokuapp.com/r1/semestar/${this.props.idPredmeta}`).then(res => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        axios.get(`http://si2019golf.herokuapp.com/r1/sedmice/${res.data.semestar}/${encodeURIComponent(props.akademskaGodina)}`).then(res2 => {
          if (res.data.loginError) {
            window.location.href = window.location.origin + '/romeo/login'
          }
          else {
            this.setState({
              sedmice: res2.data.sedmice
            })
          }
        })
      }
    })
  }

  componentDidMount() {
    this.ucitaj(this.props)
  }

  componentWillReceiveProps(props) {
    this.ucitaj(props)
  }

  render() {

    return (
      <div>
        <OPredmetuProfesor naziv={this.props.akademskaGodina} trenutnaAkademskaGodina={this.props.trenutnaAkademskaGodina} idPredmeta={this.props.idPredmeta}></OPredmetuProfesor>
        <LiteraturaProfesor naziv={this.props.akademskaGodina} trenutnaAkademskaGodina={this.props.trenutnaAkademskaGodina} idPredmeta={this.props.idPredmeta}></LiteraturaProfesor>
        {this.state.sedmice.map(sedmica => <SedmicaProfesor trenutnaAkademskaGodina={this.props.trenutnaAkademskaGodina} idpredmeta={this.props.idPredmeta} naslov={sedmica.pocetakSedmice + ' - ' + sedmica.krajSedmice} sedmice={sedmica.redniBrojSedmice} idPredmet={this.props.idPredmeta} naziv={this.props.akademskaGodina}></SedmicaProfesor>)}
      </div>
    )
  }
}

export default ObjaveProfesor