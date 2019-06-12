import React, { Component } from 'react'
import StranicaPredmetaStudent from './components/stranicaPredmetaStudent'
import StranicaPredmetaProfesor from './components/stranicaPredmetaProfesor.js'

class StranicaPredmeta extends Component {

state = {
    mozeUredjivati: 0,
    trenutnaAkademskaGodina: ""
}

componentDidMount(){
    axios.get(`http://localhost:31907/r1/nazivTrenutneAkademskeGodine`).then(res => {
        this.setState({
            trenutnaAkademskaGodina: res.data.naziv
        })
    })
}


  render() {

    return (
      <div>
        {!this.state.mozeUredjivati && <StranicaPredmetaStudent/>}
        {this.state.mozeUredjivati && <StranicaPredmetaProfesor/>}
      </div>
    )
  }
}

export default StranicaPredmeta
