import React, { Component } from 'react';
import DodavanjeDatuma from './DodavanjeDatuma';
import OpisMaterijala from './OpisMaterijala'
import axios from 'axios';

class objavaProfesor extends Component {

  state = {
    tipMaterijala: 3
  }
  
  skiniFile(file,idpredmeta){
    console.log(idpredmeta)
    axios({
      url: `http://localhost:31907/r6/prikaziFileOPredmetu/${idpredmeta}/${file}`,
      method: 'GET',
      responseType: 'blob', 
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', file);
      document.body.appendChild(link);
      link.click();
    });
  }

  klikObrisiFile = () => {
    if(this.state.uploadovan == 1){
      axios.get('http://localhost:31907/r8/obrisiDatoteku/${this.props.match.params.nazivDatoteke}/${this.props.match.params.idpredmeta}//${this.state.tipMaterijala}')
    }
  }

  render() {

    this.state =  {
      datumobjave:{
        id:1,
        datum:Date.now()
      }
    }

    return (
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">{this.props.naslov}</h5>
            <OpisMaterijala opisMaterijala={this.props.opisMaterijala}></OpisMaterijala>
              {this.props.fileovi.map(predmet => [<a href='#' onClick={this.skiniFile.bind(this,predmet,this.props.idpredmeta)} class='card-link' key='1'>{predmet}</a>,<br key='2'></br>])}
            <DodavanjeDatuma datumobjave={this.state.datumobjave}></DodavanjeDatuma>
            <button id = "obrisiFile" type = "button" class = "btn btn-success" onClick = { this.klikObrisiFile }> Obrisi </button>
            </div>
        </div>
    );
  }
}

export default objavaProfesor;