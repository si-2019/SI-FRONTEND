import React, { Component } from 'react';
import DodavanjeDatuma from './DodavanjeDatuma';
import OpisMaterijala from './OpisMaterijala'
import axios from 'axios';

class objavaProfesor extends Component {
  
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
            <div class="row">
            <div class='col-9'><h5 class="card-title">{this.props.naslov}</h5></div>
            <div class='col-3'><button type="button" class="btn btn-primary">Uredi</button></div>
            </div>
            <OpisMaterijala opisMaterijala={this.props.opisMaterijala}></OpisMaterijala>
              {this.props.fileovi.map(predmet => [<a href='#' onClick={this.skiniFile.bind(this,predmet,this.props.idpredmeta)} class='card-link' key='1'>{predmet}</a>,<br key='2'></br>])}
            <DodavanjeDatuma datumobjave={this.state.datumobjave}></DodavanjeDatuma>
            </div>
        </div>
    );
  }
}

export default objavaProfesor;