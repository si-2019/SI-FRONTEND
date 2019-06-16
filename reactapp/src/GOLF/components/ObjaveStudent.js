import React, { Component } from 'react'
import axios from 'axios'
import OPredmetuStudent from './oPredmetuStudent'
import LiteraturaStudent from './literaturaStudent'
import SedmicaStudent from './SedmicaStudent'

class ObjaveStudent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      naziv: props.akademskaGodina,
      sedmice: [],
      prvi: true
    }
  }

  ucitaj(props) {
    axios.get(`http://si2019golf.herokuapp.com/r1/semestar/${this.props.idPredmeta}`).then(res => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        axios.get(`http://si2019golf.herokuapp.com/r1/sedmice/${res.data.semestar}/${encodeURIComponent(props.akademskaGodina)}`).then(res2 => {
          if (res2.data.loginError) {
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
        <OPredmetuStudent naziv={this.props.akademskaGodina} trenutnaAkademskaGodina={this.props.trenutnaAkademskaGodina} idPredmeta={this.props.idPredmeta}></OPredmetuStudent>
        <LiteraturaStudent naziv={this.props.akademskaGodina} trenutnaAkademskaGodina={this.props.trenutnaAkademskaGodina} idPredmeta={this.props.idPredmeta}></LiteraturaStudent>
        {this.state.sedmice.map(sedmica => <SedmicaStudent idpredmeta={this.props.idPredmeta} naslov={sedmica.pocetakSedmice + ' - ' + sedmica.krajSedmice} sedmice={sedmica.redniBrojSedmice} idPredmet={this.props.idPredmeta} naziv={this.props.akademskaGodina} trenutnaAkademskaGodina={this.props.trenutnaAkademskaGodina}></SedmicaStudent>)}

      </div>
    )
  }
}

export default ObjaveStudent