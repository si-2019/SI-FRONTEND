import React, { Component } from 'react'
import axios from 'axios'
import ObjavaProfesor from './objavaProfesor'
import Spinner from 'react-bootstrap/Spinner'

class SedmicaProfesor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      objave: [],
      showMe: false,
      tekst: "Dodaj objavu",
      x: false,
      naziv: "",
      id: "",
      dodavanjeUspjelo: true,
      loading: true,
    }
  }

  ucitaj(props) {
    axios.get(`http://si2019golf.herokuapp.com/r3/dajMaterijaleZaProfesora/${this.props.idPredmet}/${this.props.sedmice}/${encodeURIComponent(props.naziv)}`).then(res => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        this.setState({
          objave: res.data.objave,
          loading: false
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

  sakrij() {
    this.setState({
      dodavanjeUspjelo: !this.state.dodavanjeUspjelo
    })
  }

  componentDidMount() {
    axios.get(`http://si2019golf.herokuapp.com/r3/dajMaterijaleZaProfesora/${this.props.idPredmet}/${this.props.sedmice}/${encodeURIComponent(this.props.naziv)}`).then(res => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        this.setState({
          objave: res.data.objave,
          loading: false
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
          id: res.data.id,
          x: x
        })
      }
    })


    axios.get(`http://si2019golf.herokuapp.com/r1/nazivTrenutneAkademskeGodine`).then(res => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        this.setState({
          naziv: res.data.naziv,
          id: res.data.id
        })
      }
    })

  }

  componentWillReceiveProps(props) {
    this.ucitaj(props)
  }

  handleClick = e => {
    let data = new FormData()
    let imena = []
    data.append("napomena", document.getElementById("napomena").value)
    data.append("naziv", document.getElementById("naziv").value)
    data.append("idMaterijal", this.props.idMaterijala)
    data.append("objavljeno", !document.getElementById("objavljeno").checked)
    data.append("idPredmet", this.props.idPredmet)
    data.append("sedmica", this.props.sedmice)
    data.append("idTipMaterijala", 3)
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
        if (res.data.error) {
          this.setState({
            dodavanjeUspjelo: false
          })
        }
        else {
          let objave = this.state.objave
          objave.push(res.data.objava)
          this.setState({
            objave: objave,
            showMe: !this.state.showMe,
            tekst: "Dodaj objavu",
            dodavanjeUspjelo: true
          })
        }
      }
    })
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

      <div class='divsaokvirom'>
        <h4 class='naslov'>{this.props.naslov}</h4>
        {
          this.state.loading ? <div class="spinerGolf">
          <Spinner animation='border' role='status' variant='primary'>
            <span className="sr-only">Učitavanje...</span>
          </Spinner></div> : <div>
        {this.state.objave.map(file => <ObjavaProfesor akademskaGodina={this.props.naziv} trenutnaAkademskaGodina={this.state.naziv} id={file.id} idtip={1} idpredmeta={this.props.idpredmeta} naslov={file.naziv} opis={file.opis} fileovi={file.datoteke} datumobjave={file.datum} objavljeno={file.objavljeno}></ObjavaProfesor>)}</div>}
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
                    <small id="fileHelp" class="form-text text-muted">Maksimalna veličina datoteke je 2MB</small>
                  </div>

                  <input type="checkbox" name="objavljeno" id="objavljeno"></input> Sakrij objavu
                    <button type="button" class="btn btn-primary" id="dugmeObjavi" onClick={this.handleClick}>Objavi</button>
                </form>
              </div>
            </div>
          </div>

          : null}
        {!this.state.dodavanjeUspjelo && 
        <div class="alert alert-dismissible alert-danger golfw">
          <button type="button" class="close" onClick={() => this.sakrij()} data-dismiss="alert">&times;</button>
          Dodavanje nije uspjelo!
        </div>}
        {this.state.x && 
        <button type="button" onClick={() => this.prikaz()} class="btn btn-primary" id="dodajObjavu">{this.state.tekst}</button>}
      </div>
    );
  }
}

export default SedmicaProfesor