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

  klikObrisiFile = () => {
    if(this.state.uploadovan == 1){
      axios.get('http://localhost:31907/r8/obrisiDatoteku/${this.props.match.params.nazivDatoteke}/${this.props.match.params.idpredmeta}').then(res => {
        if(res.data.message == 'OK'){
          // dugme postane neaktivno
        }
      })
    }
  }

  render() {
  	
    return (
      <div class='divsaokvirom'>
            <h4 class='naslov'> O predmetu </h4>
            <p class='opis'> {this.props.opis} </p>
            <div class='linkovi'>
              {this.props.predmet.map(file => [<a href='#' onClick={this.skiniFile.bind(this,file.naziv,this.props.idpredmeta)} class='card-link' key='1'>{file.naziv}</a>,<br key='2'></br>])}
              <button id = "dd" type = "button" class = "btn btn-success" onClick = { this.klikObrisiFile }> Obrisi </button>
            </div>
        </div>
    );
  }
}

export default oPredmetuProfesor;