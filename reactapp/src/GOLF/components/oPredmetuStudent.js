import React, { Component } from 'react';
import axios from 'axios'
import './golf.css'
class oPredmetuStudent extends Component {

  constructor(props){
    super(props)
    this.state={
      objave: {},
      fileovi: []
    }
  }

  ucitaj(props){
    axios.get(`http://si2019golf.herokuapp.com/r3/dajOPredmetu/${this.props.idPredmeta}/${encodeURIComponent(props.naziv)}`).then(res =>{
      if(res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else{
      this.setState({
        objave: res.data.objave[0],
        fileovi: res.data.objave[0].datoteke
      })
    }
  })
  }

  skiniFile(naziv, id){
    axios({
      url: `http://si2019golf.herokuapp.com/r1/dajFile?id=${id}`,
      method: 'GET',
      responseType: 'stream'
    }).then((res) => {
      if(res.data.loginError) {
        window.location.href = window.location.origin + '/romeo/login'
      }
      else{
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', naziv);
        document.body.appendChild(link);
        link.click();
      }
    });
  }

  componentDidMount(){
    this.ucitaj(this.props)

  }

  componentWillReceiveProps(props){
    this.ucitaj(props)
  }


  render() {
  
    return (
        
        <div class='divsaokvirom'>
            <h4 class='naslov'> O predmetu </h4>
            <div class="card" id="objava">
              <div class="card-body">
                <div>{this.state.objave.opis}</div>
                {this.state.fileovi.map(file => [<a href="#" onClick={() => this.skiniFile(file.naziv, file.id)} class='card-link'>{file.naziv}</a>,<br></br>])}
              </div>
            </div>
        </div>
    );
  }
}

export default oPredmetuStudent;