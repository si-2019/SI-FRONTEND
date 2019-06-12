import React, { Component } from 'react';
import axios from 'axios'
class oPredmetuStudent extends Component {
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
        </div>
    );
  }
}

export default oPredmetuStudent;