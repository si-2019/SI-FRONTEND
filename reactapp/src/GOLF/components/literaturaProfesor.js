import React, { Component } from 'react';
import ObjavaProfesor from './objavaProfesor'
import axios from 'axios'

class LiteraturaProfesor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      objave: [],
      showMe: false,
      tekst: "Dodaj objavu",
      x: false,
      id: ""
    }
  }

  ucitaj(props) {
    axios.get(`http://si2019golf.herokuapp.com/r3/dajLiteraturuZaProfesora/${this.props.idPredmeta}/${encodeURIComponent(props.naziv)}`).then(res => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        this.setState({
          objave: res.data.objave
        })
      }
    })

    axios.get(`http://si2019golf.herokuapp.com/r1/nazivTrenutneAkademskeGodine`).then(res => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        let x = res.data.naziv == props.naziv
        this.setState({
          naziv: res.data.naziv,
          id: res.data.id,
          x: x
        })
      }
    })

  }

  componentDidMount() {
    axios.get(`http://si2019golf.herokuapp.com/r3/dajLiteraturuZaProfesora/${this.props.idPredmeta}/${encodeURIComponent(this.props.naziv)}`).then(res => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        this.setState({
          objave: res.data.objave
        })
      }
    })
    axios.get(`http://si2019golf.herokuapp.com/r1/nazivTrenutneAkademskeGodine`).then(res => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        let x = res.data.naziv == this.props.naziv
        this.setState({
          naziv: res.data.naziv,
          x: x
        })
      }
    })

  }

  handleClick = e => {
    let data = new FormData()
    let imena = []
    data.append("napomena", document.getElementById("napomena").value)
    data.append("naziv", document.getElementById("naziv").value)
    data.append("idMaterijal", this.props.idMaterijala)
    data.append("objavljeno", document.getElementById("objavljeno").checked)
    data.append("idPredmet", this.props.idPredmeta)
    data.append("idTipMaterijala", 1)
    data.append("idAkademskaGodina", this.state.id)
    let files = document.getElementById("fileovi").files
    for (let i = 0; i < files.length; i++) {
      data.append('file', files[i])
      imena.push(files[i])
    }
    axios.post("http://si2019golf.herokuapp.com/r1/dodajMaterijal", data).then(res => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        let objave = this.state.objave
        objave.push(res.data.objava)
        this.setState({
          objave: objave,
          showMe: !this.state.showMe,
          tekst: "Dodaj objavu"
        })
      }
    })
  }

  componentWillReceiveProps(props) {
    this.ucitaj(props)
  }

  prikaz() {
    let tekstic = ""
    if (!this.state.showMe) {
      tekstic = "Poništi"
    }
    else {
      tekstic = "Dodaj objavu"
    }
    this.setState({
      showMe: !this.state.showMe,
      tekst: tekstic
    })
  }

  render() {


    return (
      <div class="divsaokvirom">
        <h4 class='naslov'>Literatura</h4>
        {this.state.objave.map(file => <ObjavaProfesor id={file.id} akademskaGodina={this.props.naziv} idpredmeta={this.props.idPredmeta} naslov={file.naziv} opis={file.opis} fileovi={file.datoteke} datumobjave={file.datum} objavljeno={file.objavljeno} idtip={2}></ObjavaProfesor>)}
        {this.state.showMe ?
          <div>
            <div class="card sss">
              <div class="card-body">
                <form encType="multipart/form-data">
                  <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Naslov: </label>
                    <input type="text" class="form-control" name="naziv" id="naziv"></input>
                  </div>
                  <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Opis: </label>
                    <textarea class="form-control" name="napomena" rows="3" id="napomena"></textarea>
                  </div>
                  <div class="form-group">
                    <label >Datoteke: </label>
                    <br></br>
                    <input type="file" name="fileovi" id="fileovi" multiple></input>
                  </div>

                  <input type="checkbox" name="objavljeno" id="objavljeno"></input> Sakrij objavu
                              <button type="button" class="btn btn-primary" id="dugmeObjavi" onClick={this.handleClick}>Objavi</button>
                </form>
              </div>
            </div>
          </div>
          : null}
        {this.state.x && <button type="button" onClick={() => this.prikaz()} class="btn btn-primary" id="dodajObjavu">{this.state.tekst}</button>}
      </div>

    );
  }
}

export default LiteraturaProfesor