import React, { Component } from 'react';
import DodavanjeDatuma from './DodavanjeDatuma';
import OpisMaterijala from './OpisMaterijala'
import FileUredjivanje from './FileUredjivanje'
import axios from 'axios';
import './golf.css'

class objavaProfesor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      naziv: "",
      x: false,
      tekst: "",
      showMe: false,
      nazivObjave: props.naslov,
      opisObjave: props.opis,
      fileovi: props.fileovi,
      objavljeno: props.objavljeno,
      uNaziv: props.naslov,
      uOpis: props.opis,
      uChecked: "",
      datum: props.datumobjave
    }
    this.handleNazivChange = this.handleNazivChange.bind(this)
    this.handleOpisChange = this.handleOpisChange.bind(this)
    this.handleObjavljenoChange = this.handleObjavljenoChange.bind(this)
  }

  handleNazivChange(naziv) {
    this.setState({
      uNaziv: naziv.target.value,
    })
  }

  handleOpisChange(opis) {
    this.setState({
      uOpis: opis.target.value
    })
  }

  handleObjavljenoChange(objavljeno) {
    let tekst = ""
    if (objavljeno.target.checked) {
      tekst = "on"
    }
    this.setState({
      uChecked: tekst
    })
  }


  componentDidMount() {
    axios.get(`http://si2019golf.herokuapp.com/r1/nazivTrenutneAkademskeGodine`).then(res => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        let x = res.data.naziv == this.props.akademskaGodina
        this.setState({
          naziv: res.data.naziv,
          x: x
        })
      }
    })

    let tekst = ""
    if (!this.props.objavljeno) {
      tekst = "on"
    }
    this.setState({
      uChecked: tekst
    })
  }


  ucitaj(props) {
    axios.get(`http://si2019golf.herokuapp.com/r1/nazivTrenutneAkademskeGodine`).then(res => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        let x = res.data.naziv == props.akademskaGodina
        this.setState({
          naziv: res.data.naziv,
          x: x
        })
      }
    })
  }

  componentWillReceiveProps(props) {
    this.ucitaj(props)
  }

  obrisi() {
    axios.delete(`http://si2019golf.herokuapp.com/r1/obrisiMaterijal/${this.props.idpredmeta}/${this.props.id}`).then(res => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        window.location.reload()
      }
    })

  }

  prikaziUredjivanje() {
    this.setState({
      showMe: !this.state.showMe
    })
  }

  handleClick = e => {
    let data = new FormData()
    data.append("napomena", document.getElementById("napomena").value)
    data.append("naziv", document.getElementById("naziv").value)
    data.append("idMaterijal", this.props.id)
    data.append("objavljeno", !document.getElementById("objavljeno").checked)
    console.log(document.getElementById("objavljeno").checked)
    let files = document.getElementById("fileovi").files
    for (let i = 0; i < files.length; i++) {
      data.append('file', files[i])
      console.log(files[i].name)
    }
    axios.post("http://si2019golf.herokuapp.com/r1/updateMaterijal", data).then(res => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        console.log(res.data)
        this.setState({
          nazivObjave: res.data.objava.naziv,
          opisObjave: res.data.objava.opis,
          objavljeno: res.data.objava.objavljeno,
          fileovi: res.data.objava.datoteke,
          showMe: !this.state.showMe,
          datum: res.data.objava.datum
        })
      }
    })
  }

  skiniFile(naziv, id) {
    axios({
      url: `http://si2019golf.herokuapp.com/r1/dajFile?id=${id}`,
      method: 'GET',
      responseType: 'stream'
    }).then((res) => {
      if (res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', naziv);
        document.body.appendChild(link);
        link.click();
      }
    });
  }

  render() {


    return (
      <div class="card sss">
        <div class="card-body">
          <div class="row">
            <div class='col-8'>
              <h5 class="card-title">{this.state.nazivObjave}
                {!this.state.objavljeno && <span class="badge badge-pill badge-primary" id="bedz">Sakriveno</span>}
              </h5>

            </div>
            <div class='col-4'>
              {this.state.x && <div>
                <button type="button" class="btn btn-primary golfDugme" onClick={() => this.prikaziUredjivanje()}>Uredi</button>
                <button type="submit" class="btn btn-danger golfDugme" onClick={() => this.obrisi()}>Obriši</button>
              </div>}
            </div>
          </div>
          <OpisMaterijala opisMaterijala={this.state.opisObjave}></OpisMaterijala>
          {this.state.fileovi.map(file => [<a href="#" onClick={() => this.skiniFile(file.naziv, file.id)} class='card-link'>{file.naziv}</a>, <br key='2'></br>])}
          <DodavanjeDatuma datumobjave={this.state.datum}></DodavanjeDatuma>
        </div>
        {this.state.showMe &&
          <div>
            <div class="card sss">
              <div class="card-body">
                <form encType="multipart/form-data">
                  <div class="form-group">
                    <label class="col-form-label" for="inputDefault" >Naslov: </label>
                    <input type="text" class="form-control" name="naziv" id="naziv" value={this.state.uNaziv} onChange={this.handleNazivChange}></input>
                  </div>
                  <div class="form-group">
                    <label class="col-form-label" for="inputDefault" >Opis: </label>
                    <textarea class="form-control" name="napomena" rows="3" id="napomena" value={this.state.uOpis} onChange={this.handleOpisChange}></textarea>
                  </div>
                  {this.state.fileovi.map(file => <FileUredjivanje id={file.id} naziv={file.naziv} />)}
                  <div class="form-group">
                    <label for="exampleInputFile">Datoteke: </label>
                    <br></br>
                    <input type="file" name="fileovi" id="fileovi" multiple></input>
                  </div>
                  <input type="checkbox" checked={this.state.uChecked} id="objavljeno" onChange={this.handleObjavljenoChange}></input> Sakrij objavu
                  <button type="button" class="btn btn-primary" id="dugmeObjavi" onClick={this.handleClick}>Izmijeni</button>
                </form>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default objavaProfesor;