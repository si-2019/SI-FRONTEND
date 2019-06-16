import React, { Component } from 'react'
import './golf.css'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import axios from 'axios'

class JedanPredmet extends Component {

  state = {
    trenutnaAkademskaGodina: ""
  }

  componentDidMount() {
    axios.get(`http://si2019golf.herokuapp.com/r1/nazivTrenutneAkademskeGodine`).then(res => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        this.setState({
          trenutnaAkademskaGodina: res.data.naziv
        })
      }
    })
  }


  render() {
    return (
      <div>
        <div class="card sss">
          <div class="card-body">
            <h4 class="card-title"><Link id="nazivPredmeta" to={'/Golf/stranicaPredmeta/' + encodeURIComponent(this.state.trenutnaAkademskaGodina) + '/' + this.props.predmet.id}>{this.props.predmet.naziv}</Link></h4>
            {this.props.predmet.opis}
          </div>
        </div>
      </div>


    )

  }
}

export default JedanPredmet
