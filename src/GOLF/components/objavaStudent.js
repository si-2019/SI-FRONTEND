import React, { Component } from 'react';
import DodavanjeDatuma from './DodavanjeDatuma';
import OpisMaterijala from './OpisMaterijala';
import axios from 'axios';

class objavaStudent extends Component {

  constructor(props){
    super(props);
    this.state =  {
      datumobjave: this.props.datumobjave
  
    }
  }

  skiniFile(file,idpredmeta){
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

    

    return (
        <div class="card" id="objava">
            <div class="card-body">
            <h5 class="card-title">{this.props.naslov}</h5>
            <OpisMaterijala opisMaterijala={this.props.opisMaterijala}></OpisMaterijala>
              {this.props.fileovi.map(predmet => [<a href='#' onClick={this.skiniFile.bind(this,predmet,this.props.idpredmeta)} class='card-link'>{predmet}</a>,<br></br>])}
            <DodavanjeDatuma datumobjave={this.state.datumobjave}></DodavanjeDatuma>
            </div>
        </div>
    );
  }
}

export default objavaStudent;