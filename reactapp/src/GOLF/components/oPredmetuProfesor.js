import React, { Component } from 'react';
import axios from 'axios'

class oPredmetuProfesor extends Component {

  skiniFile(file,idpredmeta){
    axios({
      url: `http://localhost:31907/r4/prikaziFileOPredmetu/${idpredmeta}/${file}`,
      method: 'GET',
      responseType: 'blob', // important
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
      <div class='divsaokvirom'>
            <h4 class='naslov'> O predmetu </h4>
            <p class='opis'> {this.props.opis} </p>
            Opis: <br></br>
              <textarea rows="3" id="opisPredmeta"  name="opisPredmeta" class="form-control mr-sm-2"cols="1500"></textarea>
            <div class='linkovi'>
              {this.props.predmet.map(file => [<a href='#' onClick={this.skiniFile.bind(this,file.naziv,this.props.idpredmeta)} class='card-link' key='1'>{file.naziv}</a>,<br key='2'></br>])}
            </div>
            Dodaj file:
            <input className="dugmic" type="file" multiple></input>
        </div>
    );
  }
}

export default oPredmetuProfesor;