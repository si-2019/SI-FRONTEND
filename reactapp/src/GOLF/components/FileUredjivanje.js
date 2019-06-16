import React, { Component } from 'react'
import axios from 'axios'

axios.interceptors.request.use(function (config) {
    config.params = { usernameGolf: window.localStorage.getItem("username") }
    const token = window.localStorage.getItem("token");
    config.headers.Authorization =  token;
    return config;
  });

class FileUredjivanje extends Component {

    state = {
        klasa: "btn btn-danger btn-sm",
        tekst: "Obriši",
        obrisano: false,
        kliknuto: false
    }

    obrisi() {
        axios.delete(`http://si2019golf.herokuapp.com/r1/obrisiFile/${this.props.id}`).then(res => {
            if (res.data.loginError) {
                window.location.href = window.location.origin + '/romeo/login'
            }
            else {
                if (!this.state.obrisano) {
                    this.setState({
                        tekst: "Obrisano",
                        klasa: "btn btn-danger disabled btn-sm",
                        obrisano: true
                    })
                }
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

    render() {
        return (
            <div>
                <a href="#" onClick={() => this.skiniFile(this.props.naziv, this.props.id)}  class='card-link'>{this.props.naziv} </a> <button type="button" class={this.state.klasa} onClick={() => this.potvrdaBrisanje()}>{this.state.tekst}</button>
            </div>
        )
    }
}

export default FileUredjivanje
